# skeleton-angular

[![build passing](https://gitlab.anx.local/anexia-developme/skeleton-angular/badges/master/build.svg)](https://gitlab.anx.local/anexia-developme/skeleton-angular/builds)

A [Cookiecutter](https://cookiecutter.readthedocs.io/en/latest/) template for Angular 6.1 applications. The skeleton will generate an Angular application, having:
* UI Router with layout configuration
* Global state management
* Metalanguage
* Bootstrap 4
* Font Awesome 5
* Gitlab CI configuration
* Template README.md file
* Docker compose configuration for development
* Docs generator using Compodoc and Storybook

## Prerequisites

Cookiecutter is a Python based command-line utility that creates projects from project templates (a.k.a. cookiecutters).
You need to have Cookiecutter installed on your system to start a new project with this templates. Follow these
instructions:

* Debian/Ubuntu/Mint: `sudo pip install cookiecutter`
* RedHat/CentOS/Fedora: `su -c "pip install cookiecutter"`
* Windows:
  * Make sure Python is installed: [Python Releases for Windows](https://www.python.org/downloads/windows/)
  * Install Cookiecutter: `pip install --user cookiecutter`
* MacOS:
  * Make sure Python is installed: `brew install python3`
  * Install Cookiecutter: `pip install --user cookiecutter`

## Usage

* Start the project: `cookiecutter git@gitlab.anx.local:anexia-developme/skeleton-angular.git`
* Follow the instructions in the project's `README.md`.
* You're done!

## List of developers

* Harald Nezbeda <HNezbeda@anexia-it.com>, Lead developer
* Andreas Stocker <AStocker@anexia-it.com>, Developer

## Project related external resources

* [Cookiecutter documentation](https://cookiecutter.readthedocs.io/en/latest/)