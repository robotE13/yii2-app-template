<?php

namespace backoffice\themes\base;

use yii\web\AssetBundle;

/**
 * Main backoffice application asset bundle.
 */
class Asset extends AssetBundle
{

    public $sourcePath = '@backoffice/themes/base/dist';
    public $css = [
        'style.bundle.css',
    ];
    public $js = [
        'bundle.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
    ];

}
