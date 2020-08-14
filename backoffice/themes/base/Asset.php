<?php

namespace backoffice\themes\base;

use yii\web\AssetBundle;

/**
 * Main backoffice application asset bundle.
 */
class Asset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
    ];
    public $js = [
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
