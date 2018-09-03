# Angular Skeleton

This application uses these core components:
* Angular 6.1.x
* UI Router 1.0.x
* ngx-translate
* ngx-resource-factory

## Installation instructions for development

It is expected you have `docker` as well as `docker-compose` set up and running on your machine.

To initially build and run the application, do the steps as follows:
* Create the `docker-compose.yml` from the example: `cp docker-compose.yml.example docker-compose.yml`
* Build the docker container: `docker-compose build`
* Install the NPM dependencies: `docker-compose run node npm install`
* Build the application, start development server and watch for changes: `docker-compose up`

## Installation and update instructions for deployment

You may need the following common tasks during the development of the application:
* Collect all translatable strings: `docker-compose run --rm node "npm run makemessages"`
* Add a NPM dependency to the application: `docker-compose run --rm "node npm install --save DEPENDENCY_NAME"`
* Add a NPM development-only dependency to the application: `docker-compose run --rm node "npm install --save-dev DEPENDENCY_NAME"`

## Manual tasks

All of the commands described below assume that you have your docker-compose up and running (e.g. by using `docker-compose up`).
* Build the application for production: `docker-compose run --rm node "npm run build"`
* Build the documentation: `docker-compose run ---rm node "npm run generatedocs"`
* Run the test suite: `docker-compose run --rm node "npm run test"`
* Run `docker-compose run --rm node "ng generate component module/component"` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`

## Instructions for project

* Follow the Anexia coding conventions for JavaScript
* Only deploy production builds to staging and production servers
* Only deploy the application if all tests pass

## List of developers

* Harald Nezbeda <HNezbeda@anexia-it.com>, Lead developer
* Andreas Stocker <AStocker@anexia-it.com>, Developer

## Project related external resources

* [Angular documentation](https://angular.io/docs)
* [UI-Router documentation](https://ui-router.github.io/ng2/)
* [ngx-translate documentation](https://github.com/ngx-translate/core)
* [ngx-resource-factory documentation](https://github.com/beachmachine/ngx-resource-factory)
* [GitLab flavored markdown](https://docs.gitlab.com/ee/user/markdown.html)
