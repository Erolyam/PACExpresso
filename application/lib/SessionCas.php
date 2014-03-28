<?php

/* EXEMPLE D'UTILISATION
session_name("s" . md5(__DIR__)); // Or custom session php id. Must be application unique
                                  // warning for load balancer : the session storage must be shared between hosts,
                                  // and the phpsessid must be the same
$sessionCas = SessionCas::getSingleton();
if (isset($_GET["caslogout"])) {
$sessionCas->logout();
}
$isAuth = $sessionCas->isAuthenticated();
if ($isAuth) {
$login = $sessionCas->getUser();
echo "Authentifié en tant que $login. ";
$url = $sessionCas->getLogoutUrl();
echo "<a href='$url'>se déconnecter</a>";
} else {
$url = $sessionCas->getLoginUrl();
echo "<a href='$url'>s'authentifier</a>";
}
*/


// TODO: rajouter un timer pour vérifier l'auth
// quand on est pas connecté, ne fait pas des requetes vers le cas à chaque fois
// ajouter un mode verbose

/**
 * @author gbouthenot
 * @version 1.4
 * changes: 1.3 -> 1.4
 *   * 2013-09-28: bypassLogin() replaces casUser if already set
 * changes: 1.2 -> 1.3
 *   * handle $_SERVER["X_SSL"]: make Client->isHttps handle proxyfied ssl
 *   * example update
 */
class SessionCas {
    protected static $_instance = null;     // singleton

    // these vars are always available
    protected $_user         = null;        // string login name (only if authenticated)
    protected $_urlLogin     = null;        // url to use to log in (only if not authenticated)
    protected $_casInitiated = null;        // true when phpCAS has been instanced
    protected $_bypassLogin  = null;        // "login" to use. Don't try to use CAS
    protected $_init         = null;

    protected function __construct() { }

    protected function _init() {
        if (null === $this->_init) {
            if (isset($_SERVER['HTTP_X_SSL']) && 'true' === $_SERVER['HTTP_X_SSL']) {
                // make Client->isHttps handle proxyfied ssl
                $_SERVER["HTTPS"] = "on";
                $_SERVER['SERVER_PORT'] = 443;
            }
            if (empty($_SESSION["casUser"])) {
                if (null !== $this->_bypassLogin) {
                    $_SESSION["casUser"] = $this->_bypassLogin;
                } else {
                    $this->_initCas();

                    phpCAS::checkAuthentication();
                    $casCheck = phpCAS::isAuthenticated();
                    if (TRUE === $casCheck) {
                        $casUser = phpCAS::getUser();
                        $_SESSION["casUser"]      = $casUser;
                    } else {
                        $this->_urlLogin  = phpCAS::getServerLoginURL();
                    }
                }

            }

            if (isset($_SESSION["casUser"]) && strlen($_SESSION["casUser"])) {
                $this->_user      = $_SESSION["casUser"];
                $this->_urlLogin  = "";
            }

            $this->_init = true;
        }
    }

    /**
     * Singleton
     * @return SessionCas
     */
    public static function getSingleton() {
        if (null === self::$_instance) {
            $c = __CLASS__;
            self::$_instance = new $c;
        }

        return self::$_instance;
    }

    public function bypassLogin($bypassLogin = null) {
        $this->_bypassLogin = $bypassLogin;
        if (!empty($_SESSION["casUser"])) {
            $_SESSION["casUser"] = $bypassLogin;
        }
    }

    protected function _initCas() {
        if (true !== $this->_casInitiated) {
            $cas_host = 'cas.univ-fcomte.fr';
            $cas_context = '/cas';
            $cas_port = 443;
            require_once("extlib/CAS.php");
            phpCAS::client(CAS_VERSION_2_0, $cas_host, $cas_port, $cas_context, false); //start_session = false
            phpCAS::setNoCasServerValidation();

            $this->_casInitiated = true;
        }
        return;
    }



    public function getUser() {
        $this->_init();
        return $this->_user;
    }

    public function isAuthenticated() {
        $this->_init();
        return (null !== $this->_user)?(true):(false);
    }

    public function getLoginUrl() {
        $this->_init();
        return $this->_urlLogin;
    }

    public function getLogoutUrl($redirUrl=null) {
        $this->_init();
        return $this->_getThisUrl() . "?caslogout";
    }

    public function logout($redirUrl=null) {
        $this->_init();
        $url = "";
        if (null !== $redirUrl && "" !== $redirUrl) {
            $url = $redirUrl;
        } elseif (null === $redirUrl) {
            $url = $this->_getThisUrl();
        }

        $p = array();
        if (strlen($url)) {
            $p = array("service"=>$url);
        }

        session_destroy();
        if ($this->_bypassLogin === null) {
            $this->_initCas();
            phpCAS::logout($p);
        }
    }

    protected function _getThisUrl() {
        $proto = "http";
        $port  = $_SERVER["SERVER_PORT"];
        if (443 == $port) {
            $proto = "https";
            $port  = "";
        } elseif (80 == $port) {
            $port = "";
        } else {
            $port = ":$port";
        }

        $name = $_SERVER["SERVER_NAME"];
        $redirUrl = $_SERVER["REQUEST_URI"];
        $pos = strpos($redirUrl, "?");
        if (false !== $pos) {
            $redirUrl = substr($redirUrl, 0, $pos);
        }
        $url = "$proto://$name$port$redirUrl";

        return $url;
    }
}
