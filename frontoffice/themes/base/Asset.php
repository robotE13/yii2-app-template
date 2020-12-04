<?php

namespace frontoffice\themes\base;

use yii\web\AssetBundle;

/**
 * Main frontoffice application asset bundle.
 */
class Asset extends AssetBundle
{

    public $sourcePath = '@frontoffice/themes/base/dist';
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
