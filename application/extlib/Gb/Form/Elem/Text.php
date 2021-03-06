<?php
/**
 * Gb_Form_Elem_Text
 *
 * @author Gilles Bouthenot
 * @version $Revision$
 * @Id $Id$
 */

if (!defined("_GB_PATH")) {
    define("_GB_PATH", realpath(dirname(__FILE__).DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'..').DIRECTORY_SEPARATOR);
} elseif (_GB_PATH !== realpath(dirname(__FILE__).DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'..').DIRECTORY_SEPARATOR) {
    throw new Exception("gbphpdb roots mismatch");
}

require_once(_GB_PATH."Form/Elem/Text/Abstract.php");


class Gb_Form_Elem_Text  extends Gb_Form_Elem_Text_Abstract
{

    protected function getHtmlInInput()
    {
        $classInput = $this->classInput();
        return "type='text' class='text $classInput'";
    }
}
