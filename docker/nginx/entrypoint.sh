#!/bin/bash

export FRONTOFFICE_HOST
export BACKOFFICE_HOST
export SSL_CONFIG_INCLUDE

mkdir /etc/nginx/sites-enabled/

envsubst '$${SSL_CONFIG_INCLUDE},$${FRONTOFFICE_HOST},$${BACKOFFICE_HOST}' < /etc/nginx/conf.d/sites-available/default.conf > /etc/nginx/sites-enabled/default.conf
envsubst '$${FRONTOFFICE_HOST},$${SSL_CONFIG_INCLUDE}' < /etc/nginx/conf.d/sites-available/frontoffice.conf > /etc/nginx/sites-enabled/frontoffice.conf
envsubst '$${BACKOFFICE_HOST},$${SSL_CONFIG_INCLUDE}' < /etc/nginx/conf.d/sites-available/backoffice.conf > /etc/nginx/sites-enabled/backoffice.conf

exec "$@"