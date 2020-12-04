@echo off

rem -------------------------------------------------------------
rem  Composer command line bootstrap script for Windows.
rem -------------------------------------------------------------

@setlocal

docker-compose run --rm php composer %*

@endlocal
