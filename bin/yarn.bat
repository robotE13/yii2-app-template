@echo off

rem -------------------------------------------------------------
rem  Yarn command line bootstrap script for Windows.
rem -------------------------------------------------------------

@setlocal

docker-compose run --rm -T node-cli "yarn %*"

@endlocal
