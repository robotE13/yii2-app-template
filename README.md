<p align="center">
    <a href="https://github.com/yiisoft" target="_blank">
        <img src="https://avatars0.githubusercontent.com/u/993323" height="100px">
    </a>
    <h1 align="center">Yii 2 Advanced Project Template</h1>
    <br>
</p>

Yii 2 Advanced Project Template is a skeleton [Yii 2](http://www.yiiframework.com/) application best for
developing complex Web applications with multiple tiers.

The template includes three tiers: frontoffice (public site), backoffice (for administration purposes), 
and console, each of which is a separate Yii application.

The template is supports deploying the application in different environments.

Documentation is at [docs/guide/README.md](docs/guide/README.md).

DIRECTORY STRUCTURE
-------------------

```
common
    config/              contains shared configurations
    mail/                contains view files for e-mails
    models/              contains model classes used in both backoffice and frontoffice
    tests/               contains tests for common classes    
console
    config/              contains console configurations
    controllers/         contains console controllers (commands)
    migrations/          contains database migrations
    models/              contains console-specific model classes
    runtime/             contains files generated during runtime
backoffice
    config/              contains backoffice configurations
    controllers/         contains Web controller classes
    models/              contains backoffice-specific model classes
    runtime/             contains files generated during runtime
    tests/               contains tests for backoffice application    
    themes/              contains view files and assets such as JavaScript and CSS
    web/                 contains the entry script and Web resources
frontoffice
    config/              contains frontoffice configurations
    controllers/         contains Web controller classes
    models/              contains frontoffice-specific model classes
    runtime/             contains files generated during runtime
    tests/               contains tests for frontoffice application
    themes/              contains view files and assets such as JavaScript and CSS
    web/                 contains the entry script and Web resources
    widgets/             contains frontoffice widgets
vendor/                  contains dependent 3rd-party packages
environments/            contains environment-based overrides
```
