Adding more applications
========================

While having separate frontoffice and backoffice is common, sometimes it's not enough. For example, you may need additional
application for, say, a blog. In order to get it:

1. Copy `frontoffice` to `blog`, `environments/dev/frontoffice` to `environments/dev/blog` and `environments/prod/frontoffice`
to `environments/prod/blog`.
2. Adjust namespaces and paths to start with `blog` instead of `frontoffice`.
3. In `common\config\bootstrap.php` add `Yii::setAlias('blog', dirname(dirname(__DIR__)) . '/blog');`.
4. Make adjustments to `environments/index.php` (marked with `+`):

```php
return [
    'Development' => [
        'path' => 'dev',
        'setWritable' => [
            'backoffice/runtime',
            'backoffice/web/assets',
            'frontoffice/runtime',
            'frontoffice/web/assets',
+           'blog/runtime',
+           'blog/web/assets',
        ],
        'setExecutable' => [
            'yii',
            'yii_test',
        ],
        'setCookieValidationKey' => [
            'backoffice/config/main-local.php',
            'frontoffice/config/main-local.php',
+           'blog/config/main-local.php',
        ],
    ],
    'Production' => [
        'path' => 'prod',
        'setWritable' => [
            'backoffice/runtime',
            'backoffice/web/assets',
            'frontoffice/runtime',
            'frontoffice/web/assets',
+           'blog/runtime',
+           'blog/web/assets',
        ],
        'setExecutable' => [
            'yii',
        ],
        'setCookieValidationKey' => [
            'backoffice/config/main-local.php',
            'frontoffice/config/main-local.php',
+           'blog/config/main-local.php',
        ],
    ],
];
```
