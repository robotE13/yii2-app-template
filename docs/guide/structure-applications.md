Applications
============

There are three applications in advanced template: frontoffice, backoffice and console. Frontoffice is typically what is presented
to end user, the project itself. Backoffice is admin panel, analytics and such functionality. Console is typically used for
cron jobs and low-level server management. Also it's used during application deployment and handles migrations and assets.

There's also a `common` directory that contains files used by more than one application. For example, `User` model.

Frontoffice and backoffice are both web applications and both contain the `web` directory. That's the webroot you should point your
web server to.

Each application has its own namespace and alias corresponding to its name. Same applies to the common directory.
