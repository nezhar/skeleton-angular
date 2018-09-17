# Angular Skeleton

This application uses these core components:
* Angular 6.1.x
* UI Router 1.0.x
* ngx-translate
* ngx-resource-factory
* ngx-ui-router-url-type-factory
* ng-bootstrap (using Bootstrap 4.1)
* angular-fontawesome (using Font Awesome 5)


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
* Run `s` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`

### Adding screens

Screens are regular Angular components which follow some internal established conventions:

* They are declared inside a screens module and not exported, so they are used only inside the module
* Remove the selector as the components will be instantiated by the ui router
* Add routing declaration and export it in the working module:

```
const stateFrontendHome: Ng2StateDeclaration = {
    url: '/home',
    component: HomeComponent,
};

export const frontendStates = [
    stateFrontendHome,
];

```

### Adding components

... todo


### Adding modals

... todo


### Adding services

... todo

### Adding resources

... todo

### Adding modules

... todo


### Manage translations

... todo

## Instructions for project

* Follow the Anexia coding conventions for JavaScript
* Only deploy production builds to staging and production servers
* Only deploy the application if all tests pass

### Application bootstrapping

... todo

### Replace the fake backend

... todo


## Notes for dependencies


#### rxjs - 6.2.2

... todo

#### rxjs-compat - 6.2.2

... todo

#### typescript - 2.9

... todo

#### @storybook - 4.0.0-alpha.21

... todo

#### date-fns - 2.0.0-alpha.16

... todo

#### @uirouter/angular - 1.1.0

... todo

## List of developers

* Harald Nezbeda <HNezbeda@anexia-it.com>, Lead developer
* Andreas Stocker <AStocker@anexia-it.com>, Developer

## Project related external resources

* [Angular documentation](https://angular.io/docs)
* [UI-Router documentation](https://ui-router.github.io/ng2/)
* [ngx-translate documentation](https://github.com/ngx-translate/core)
* [ngx-resource-factory documentation](https://github.com/beachmachine/ngx-resource-factory)
* [ngx-ui-router-url-type-factory documentation](https://github.com/anx-astocker/ngx-ui-router-url-type-factory)
* [ng-bootstrap documentation](https://ng-bootstrap.github.io/#/home)
* [Font Awesome 5 icons](https://fontawesome.com/icons?d=gallery&m=free)
* [Angular Font Awesome docs](https://github.com/FortAwesome/angular-fontawesome)
* [GitLab flavored markdown](https://docs.gitlab.com/ee/user/markdown.html)
