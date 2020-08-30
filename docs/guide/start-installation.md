Installation
============

## Requirements

The project template is designed to run in Docker containers. 
This requires that Docker and Docker-compose to be installed on your system.

## Installing using Composer

Use the docker image [Composer](https://hub.docker.com/_/composer) for installation.
Install the application using the following command:

    docker run --rm -it -v $PWD:/app -v ${COMPOSER_HOME:-$HOME/.composer}:/tmp composer create-project --prefer-dist robote13/yii2-webapp-template yii-application

The command installs the application in a directory named `yii-application`.
You can choose a different directory name if you want.

It uses [asset-packagist](https://asset-packagist.org/) for managing bower and npm package dependencies through Composer. 

## Preparing application

After you install the application, you have to conduct the following steps to initialize
the installed application. You only need to do these once for all.

1. After the project template is installed to adjust default `.env-dist`, `package.json` and `composer.json` that can be found in the root directory.
    First we're updating basic information.
    - In `composer.json`: change `name`, `description`, `keywords`, `homepage` and `support`;
    - In `package.json`: change `name`, `description`, `author`, and `repository`;
    - In `.env-dist`: change `COMPOSE_PROJECT_NAME`, `FRONTOFFICE_HOST`, `BACKOFFICE_HOST` to match your project;
    Second, specify your names for the application and test databases in the `bin/init`file
    - `db_name`
    - `db_test_name`

2. Execute the `bin/init` command.
    
    ```
    /path/to/yii-application/bin/init
    ```
    
    If you automate it with a script you can execute `bin/init` in non-interactive mode.
    
    ```
    /path/to/yii-application/init --env=Development --overwrite=All
    ```
    
3. При локальной разработке замените в файле .env имена хостов на ваши локальные. Напрмер akvarel.loc.
    
    > Не забудьте добавить для локального адреса докер-хоста, указанные вами локальные имена хостов, в файл `.hosts`.
    > Узнать локальный адрес докер-машины можно запустив команду `docker-machine ip`
    
4. Adjust the components['db'] configuration in `common/config/main-local.php` accordingly.
    
    ```
    'dsn' => 'mysql:host=db;dbname=db_name',
    'username' => 'root',
    'password' => MYSQL_ROOT_PASSWORD (see .env)
    ```
    
    And the components['db'] configuration in `common/config/test-local.php` accordingly.
    
    ```
    'dsn' => 'mysql:host=db;dbname=db_test_name',
    ```

    > You specified 'db_name` and' db_test_name `in the`bin/init ' file. 
    > By default databases with these names are created during initialization
    
    > Docker networking creates a DNS entry for the host `db` available from your `php` and `nginx` containers.
    
5. Start the application
    
    ```
    docker-compose up -d
    ```
    
6. Run composer build command to install the application dependencies, applying migrations, clear cache e.t.c
    
    ```
    bin/composer build-dev
    ```

7. Run yarn commands to install NPM dependencies described in package.json file and build frontend assets (js, css, images e.t.c).
   See the corresponding `webpack.config` file for each theme.
    
    ```
    bin/yarn
    bin/yarn dev
    ```
    
Access it in your browser by opening

- frontend: http://$FRONTOFFICE_HOST (see .env file)
- backend: http://$BACKOFFICE_HOST