<?php
class AuthController extends KleinExtController {

    /**
     * gestion de l'authentification.
     * fournit $_SESSION["auth"] et &$rs->auth
     */
    public function actionAuth() {
        // l'authentification.
        require_once "lib/SessionCas.php";
        $sessionCas = SessionCas::getSingleton();
        if (isset($_GET["caslogout"])) {
            Gb_Log::logInfo("logout");
            $sessionCas->logout();
        }
        if ($GLOBALS["allow_bypassAuth"]) {
            if (isset($_REQUEST["bypassAuth"]) && strlen($_REQUEST["bypassAuth"])) {
                $sessionCas->bypassLogin($_REQUEST["bypassAuth"]);
            }
        }

        $isAuth = $sessionCas->isAuthenticated();
        if ($isAuth) {
            $login = $sessionCas->getUser();

            if (!( isset($_SESSION["auth"]) && is_array($_SESSION["auth"]) && isset($_SESSION["auth"]["login"]) && $login === $_SESSION["auth"]["login"] )) {
                // utilisateur n'est pas déjà connecté à cette appli
                $url = "https://applications.univ-fcomte.fr/fastannu/fastsearch.php?f=json&uid=$login";
                Gb_Log::logInfo("fastannu request for uid=$login");
                $userinfo = file_get_contents($url);
                Gb_Log::logDebug("fastannu response:", $userinfo);
                $userinfo = json_decode($userinfo);
                if (empty($userinfo->mail)) {
                    throw new Exception("Cannot get fastannu info for user $login");
                }

                $user = User::findFirst(array("login"=>$login));
                if (!$user) {
                    // crée un nouvel utilisateur
                    // cherche le profil de base
                    $profile = Userprofile::findFirstOrThrows(array("is_superadmin"=>0, "is_admin"=>0, "is_author"=>0));

                    $user = User::create();
                    $user->userprofile_id = $profile->id;
                    $user->login = $login;
                    $user->auth_type = "ldap";
                }

                // met à jour utilisateur avec données de fastannu
                $user->email      = $userinfo->mail;
                $user->name_first = $userinfo->pren;
                $user->name_last  = $userinfo->nom;
                $user->last_at    = Gb_String::date_iso();
                $res = $user->save();

                $_SESSION["auth"] = array("id"=>$user->id, "login"=>$login, "logoutUrl"=>$sessionCas->getLogoutUrl(), "email"=>$userinfo->mail, "firstname"=>$userinfo->pren, "lastname"=>$userinfo->nom, "displayname"=>$userinfo->disp);
            }
            Gb_Log::$file_prepend .= "user:$login ";
        } else {
            $_SESSION["auth"] = array("loginUrl"=>$sessionCas->getLoginUrl());
        }
        $this->_rs->auth = &$_SESSION["auth"];
    }

}
