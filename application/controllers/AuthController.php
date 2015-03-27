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
                Gb_Log::logWarning("bypassAuth={$_REQUEST["bypassAuth"]}");
                $sessionCas->bypassLogin($_REQUEST["bypassAuth"]);
            }
        }

        $isAuth = $sessionCas->isAuthenticated();
        if ($isAuth) {
            $login = $sessionCas->getUser();

            if (!( isset($_SESSION["auth"]) && is_array($_SESSION["auth"])
                    && isset($_SESSION["auth"]["user"]) && is_array($_SESSION["auth"]["user"])
                    && isset($_SESSION["auth"]["user"]["login"]) && $login === $_SESSION["auth"]["user"]["login"] )) {
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
                $user->email      = (is_array($userinfo->mail)) ? ($userinfo->mail[0])            : ($userinfo->mail);
                $user->name_first = (is_array($userinfo->pren)) ? (implode('/', $userinfo->pren)) : ($userinfo->pren);
                $user->name_last  = (is_array($userinfo->nom))  ? (implode('/', $userinfo->nom))  : ($userinfo->nom);
                $user->last_at    = Gb_String::date_iso();
                $res = $user->save();

                $profile = $user->rel("profile");
                $_SESSION["auth"] = array(
                    "logoutUrl"=>$sessionCas->getLogoutUrl(), "displayname"=>$userinfo->disp,
                    "user"=>$user->asArray(),
                    "profile"=>$profile->asArray(),
                );
            }
            Gb_Log::$file_prepend .= "user:$login ";
        } else {
            $_SESSION["auth"] = array("loginUrl"=>$sessionCas->getLoginUrl(), "user"=>array(), "profile"=>array());
        }
    }

    public static function getAuth() {
        return $_SESSION["auth"];
    }

    /**
     * renvoie un attribut de auth
     * @param string $attr
     * @param string[optional] $default="THROWS" if "THROWS", throws exception if attr is not found
     * @throws Exception
     * @return mixed
     */
    public static function get($attr, $default="THROW") {
        $auth = self::getAuth();
        if (isset($auth[$attr])) {
            return $auth[$attr];
        } elseif ($default !== "THROW") {
            return $default;
        } else {
            throw new Exception("$attr not set");
        }
    }

    /**
     * renvoie un attribut de auth["user"]
     * @param string $attr
     * @param string[optional] $default="THROWS" if "THROWS", throws exception if attr is not found
     * @throws Exception
     * @return mixed
     */
    public static function getUser($attr=null, $default="THROW") {
        $auth = self::getAuth();
        if ($attr === null) {
            if ( $default === "THROW" && (!isset($auth["user"]) || count($auth["user"]) === 0) ) {
                throw new Exception("user not set");
            }
            return array();
        }
        $auth = $auth["user"];
        if (isset($auth[$attr])) {
            return $auth[$attr];
        } elseif ($default !== "THROW") {
            return $default;
        } else {
            throw new Exception("user $attr not set");
        }
    }

    /**
     * renvoie un attribut de auth["profile"]
     * @param string $attr
     * @param string[optional] $default="THROWS" if "THROWS", throws exception if attr is not found
     * @throws Exception
     * @return mixed
     */
    public static function getProfile($attr=null, $default="THROW") {
        $auth = self::getAuth();
        if ($attr === null) {
            if ( $default === "THROW" && (!isset($auth["profile"]) || count($auth["profile"]) === 0) ) {
                throw new Exception("profile not set");
            }
            return array();
        }
        $auth = $auth["profile"];
        if (isset($auth[$attr])) {
            return $auth[$attr];
        } elseif ($default !== "THROW") {
            return $default;
        } else {
            throw new Exception("profile $attr not set");
        }
    }

    /**
     * return true if logged
     * @return boolean
     */
    public static function isLogged() {
        $auth = self::getUser("id", null);
        return $auth !== null;
    }


}
