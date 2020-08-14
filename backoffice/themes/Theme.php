<?php

/**
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace backoffice\themes;

/**
 * Description of Theme
 *
 * @author Evgenii Dudal <wolfstrace@gmail.com>
 */
class Theme extends \yii\base\Theme
{
    public function init() {
        //$this->basePath="@frontend/themes/base/dist";
        $this->pathMap = [
            '@backoffice/views'=>[
                '@backoffice/themes/base/views'
             ]
        ];
    }
}
