Installation
============

## Requirements

The minimum requirement by this project template is that your Web server supports PHP 5.6.0.

## Installing using Composer

If you do not have [Composer](http://getcomposer.org/), follow the instructions in the
[Installing Yii](https://github.com/yiisoft/yii2/blob/master/docs/guide/start-installation.md#installing-via-composer) section of the definitive guide to install it.

With Composer installed, you can then install the application using the following commands:

    composer create-project --prefer-dist robote13/yii2-webapp-template yii-application

The command installs the advanced application in a directory named `yii-application`. You can choose a different
directory name if you want.

It uses [asset-packagist](https://asset-packagist.org/) for managing bower and npm package dependencies through Composer. Also you can use [asset-plugin](https://packagist.org/packages/fxp/composer-asset-plugin), as in earlier versions, but it works slowly.

## Preparing application

### Installing using Docker

After you install the application, you have to conduct the following steps to initialize
the installed application. You only need to do these once for all.

1. В файле .env-dist замените COMPOSE_PROJECT_NAME и имена хостов для front и back-office на те, 
   которые будут использоваться при размещении проекта в production. 
   Локальные имена хостов, использующиеся для разработки, можно будет указать позже
   перед запуском контейнеров в файле .env (env_file для docker-compose)

2. Open a console terminal, execute the `bin/init` command.

   ```
   /path/to/yii-application/bin/init
   ```

   If you automate it with a script you can execute `bin/init` in non-interactive mode.

   ```
   /path/to/yii-application/init --env=Development --overwrite=All
   ```

3. Install the application dependencies

    bin/composer install

4. Start the application

    docker-compose up -d

5. Adjust the components['db'] configuration in `common/config/main-local.php` accordingly.
    
        'dsn' => 'mysql:host=db;dbname=yii2webapp',
        'username' => 'yii2webapp',
        'password' => 'secret',

> Docker networking creates a DNS entry for the host `mysql` available from your `backend` and `frontend` containers.

Access it in your browser by opening

- frontend: http://$FRONTOFFICE_HOST
- backend: http://BACKOFFICE_HOST

