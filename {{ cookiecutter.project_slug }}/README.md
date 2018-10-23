# {{ cookiecutter.project_title }}

{{ cookiecutter.project_description }}

This application uses these core components:
* Angular 6.1.x
* UI Router 2.0.x
* NGXS
* ngx-translate
* ngx-resource-factory
* ngx-ui-router-url-type-factory
* ng-bootstrap (using Bootstrap 4.1)
* angular-fontawesome (using Font Awesome 5)

For generating documentation we use:
* Compodoc 1.1.x
* Angular Storybook 4.0.x

NGXS has several plugins installed:

* @ngxs/storage-plugin - Backups the store in localStorage. Configuration is in "app/shared/storage/app.storage.ts"
* @ngxs/devtools-plugin - Plugin with integration with the [Redux Devtools extension](http://extension.remotedev.io/). The plugin is enable donly during development.

## Installation instructions for development

It is expected you have `docker` as well as `docker-compose` set up and running on your machine.

To initially build and run the application, do the steps as follows:
* Initialize the git repository and create an initial commit: `git init && git add . && git commit -m "Initial commit"`
* Create the `docker-compose.yml` from the example: `cp docker-compose.yml.example docker-compose.yml`
* Make sure you can access the [Internal Docker Registry](https://ais.anexia-it.com/display/SI/Interne+Docker+Registry)
* Build the docker container: `docker-compose build`
* Install the dependencies: `docker-compose run --rm node yarn install`
* Build the application, start development server and watch for changes: `docker-compose up`

## Installation and update instructions for deployment

You may need the following common tasks during the development of the application:
* Run code lint: `docker-compose run --rm node "yarn run lint"`
* Run unit tests: `docker-compose run --rm node "yarn run test"`
* Collect all translatable strings: `docker-compose run --rm node "yarn run makemessages"`
* Add a dependency to the application: `docker-compose run --rm "node yarn add DEPENDENCY_NAME"`
* Add a development-only dependency to the application: `docker-compose run --rm node "yarn add --dev DEPENDENCY_NAME"`

## Manual tasks

All of the commands described below assume that you have your docker-compose up and running (e.g. by using `docker-compose up`).
* Build the application for production: `docker-compose run --rm node "yarn run build"`
* Build the documentation: `docker-compose run --rm node "yarn run generatedocs"`
* Build the storybook: `docker-compose run --rm node "yarn run storybook-build"`

### Adding screens

Screens are regular Angular components that are used to bind routes with visual elements.
They follow some internal established conventions:

* They are declared inside a screens module (e.g., `frontend`) and not exported, so they are used only inside the module
* Remove the selector of the screen from `@Component()`, as the components will be instantiated by the ui router
* Add routing declaration and export it in the screens module routing declaration (e.g., `frontend.routing.ts`):

```typescript
const stateFrontendHome: Ng2StateDeclaration = {
    name: 'frontend.home',
    url: '/home',
    component: HomeComponent,
};

export const frontendStates = [
    stateFrontendHome,
];

```

You can generate screens using the Angular CLI:
`docker-compose run --rm node "ng generate component app/screens/{screenModule}/{screenName}"`

* **screenModule** - is the name of the screen module (auth|frontend|backend)
* **screenName** - in the name of the new screen

The screen component will be added automatically by the CLI in the declarations of the screen module.


### Adding wrapper screens

A wrapper screen is an Angular component that is used to hold child component in Routing.
They must declare the ui-view component in their template. Here is a sample for the PostsComponent:

```typescript
const stateBackendPosts = {
    name: 'backend.posts',
    url: '/posts',
    component: PostsComponent,
    redirectTo: 'backend.posts.list',
};

const stateBackendPostsList = {
    name: 'backend.posts.list',
    url: '',
    component: PostsListComponent,
};

const stateBackendPostsDetail = {
    name: 'backend.posts.detail',
    url: '/{post:Post}',
    component: PostDetailComponent,
};

export const frontendStates = [
    stateFrontendHome,
    stateBackendPostsList,
    stateBackendPostsDetail,
];
```

The `PostsComponent` is kept very simple and contains only the ui-view within its template.

```typescript
import { Component } from '@angular/core';

@Component({
    template: '<ui-view></ui-view>',
})
export class PostsComponent {
}

```

This allows to load the `PostsListComponent` or `PostDetailComponent` component (depending on the current route) in the available ui-view
and also to used the nested routing feature of the ui-router. The template in the PostsComponent can also be outsourced to a html file as
in regular components and extended (like with a sub navigation), but make sure that this behavior is required, as this will load the
extended template on all child routes, and only the ui-view will be allocated for the child components.


### Adding components

The components module holds Angular components that are used inside **screens**, **modals** or other **components**.

Run `docker-compose run --rm node "ng generate component app/components/{componentName}"` to add a new component.

The new component will be added directly in the declarations of the component module, located under `src/app/components/components.module.ts`.
Open the file an make sure to also add the component in the **exports** array, so the component can be used in the other modules.

Make sure that the ComponentsModule is declared in the **imports** array of the **@NgModule** you want to use the component.


### Adding modals

The modals module holds Angular components that are used in modal dialogs, using the **NgbModal** service.

Run `docker-compose run --rm node "ng generate component app/modals/{modalName}"` to add a new modal.

The new component will be added directly in the declarations of the modal module, located under `src/app/modals/modals.module.ts`.
Open the file an make sure to also add the component in the **entryComponents** array, so the component can be loaded using NgbModal.

Always extend the **ModalBaseComponent** in a newly created modal, and use the provided content areas in the template

```html
<app-modal-base>
    <span modal-title></span>
    <div modal-body></div>
    <span modal-footer></span>
</app-modal-base>

```

Use the *ModalPostDetailComponent* as a sample.

### Adding services

The **services** module is dedicated for creating service.

Run `docker-compose run --rm node "ng generate service app/services/{serviceFolder}/{serviceName}"` to add a new modal.

This will generate a new folder for the service, and also the .service.ts and .spec.ts files inside.
Make sure to add the newly created service in the module (under `src/app/services/services.module.ts`),
as this is not done by the CLI.

### Adding resources

Resources are also services, they act in the application similar to a data model.
You have to create them manually under `src/app/services/resources`
By convention we always name the file `{resourceName}.resource.ts`

Resources cam be injected into any component and are used to fetch data from
an external source.

Use the *PostResource* and the *UserResource* as samples.

### Adding types

Types are used inside the state declarations of the UI Router.
They allow to map an existing object to a given Route.

Types are located in `src/app/shared/types/`.
By convention we always name the file `{resourceName}.type.ts`

Each type must be added in `src/app/app.module.ts` in the types list declared in
the forRoot method of the **NgxUIRouterUrlTypeFactoryModule**

```typescript
NgxUIRouterUrlTypeFactoryModule.forRoot({
    types: [
        PostType,
    ]
}),
```

Use the *PostType* as a sample.

### Adding modules

**modules** is the location where you would add code that can be potentially
used in other applications or that is meant to be published on a package repository like NPM.

Run `docker-compose run --rm node "ng generate module app/modules/{moduleName}"` to create a new module.

Make sure that your module is declared in app.module.ts or in the module where you want to use the provided function.

If your declare components in your module, make sure that they are using `anx-` as a prefix in the component selector.

You can also add a the new module in the tsconfig.json paths for a more convenient loading:

```typescript
    "paths": {
        "@app/*": [ "src/app/*" ],
        "ngx-anx-forms/*": [ "src/app/modules/ngx-anx-forms/*" ],
        "ngx-anx-loading-screen/*": [ "src/app/modules/ngx-anx-loading-screen/*" ]
    },
```

### Manage translations

Use `docker-compose run --rm node "yarn run makemessages"` to collect all available translations.

All available languages are managed in the `LanguageService` located under `src/app/services/language/language.service.ts`

The translations files are located under `src/assets/locales`

## Instructions for project

* Follow the Anexia coding conventions for JavaScript
* Only deploy production builds to staging and production servers
* Only deploy the application if all tests pass

### Replace the fake backend

The fake backend is currently simulating the default authentication prodived by the [Django Skeleton](https://gitlab.anx.local/anexia-developme/skeleton-django)
In order to remove this you have to remove the `fake-backend.ts` from `src/app/shared/interceptors`. Also make sure that you remove all declarations of the fake backend.
The AuthenticationResource and the UserResource need to be reconfigured to use the appropriate REST APIs.

### JWT Authentication

JWT Authentication is currently implemented in the **AuthState** and it uses the **AuthenticationResource** where the required
methods for authentication are preconfigured. Make sure to adapt this methods to your authentication backend.

The **AuthState** provides the following actions:

* Login (requires a username and password in constructor) - Adds token and user to state on success. Dispatched by the **LoginComponent** screen
* Verify - Updates token and user in state on success. Dispatched by the **AuthenticationGuard** on application load.
* Refresh - Updates token and user in state on success. Dispatched by an interval that starts after *Login* or *Verify*
* Logout - Removes token and user from state. Dispatched when clicking or Logout or if the token if invalid during *Verify* or *Refresh*

### Usage of Layouts

Layouts are used to defined the structure of the page for a given user area. The application uses the following layouts:

* auth-layout: Unguarded layout, used for providing user authentication or registration. Loaded in **auth** screen module.
* frontend-layout: Guarded by **AuthenticationGuard**, meant for regular users of the application. Loaded in **frontend** screen module.
* backend-layout: Guarded by **AuthenticationGuard**, meant for administrators of the application. Loaded in **backend** screen module.

The **AuthenticationGuard** automatically redirects the user to the specific area. This behavior can be adapted in **redirectUser**.

Each screen module loads the layout in the initial route declaration. A layout must make use the **ui-view** component,
so the child routes of the screen can be loaded.

## Notes for dependencies

Some of the applications dependencies cannot be upgraded. Here you can find out why.
Make sure to keep this list updated when making changes to the applications dependencies.

#### rxjs - 6.2.2 and rxjs-compat - 6.2.2

6.2.x is the maximum that Angular 6 is currently supporting.

#### typescript - 2.9

2.9.x is the maximum that Angular 6 is currently supporting.

#### @storybook - 4.0.0-rc.1

We use the alpha version here as this is providing some features that are required for Angular 6.
Also this is a dev dependency and is not causing any harm to the application.
It should be updated to stable once it is available.

#### date-fns - 2.0.0-alpha.22

It should be updated to stable once it is available.

## List of developers

* {{ cookiecutter.author_name }} <{{ cookiecutter.author_email }}>, Lead developer

## Project related external resources

* [Angular documentation](https://angular.io/docs)
* [Angular environments](https://theinfogrid.com/tech/developers/angular/environment-variables-angular/)
* [Angular bootstrapping](https://angular.io/guide/bootstrapping)
* [UI-Router documentation](https://ui-router.github.io/ng2/)
* [NGXS documentation](https://ngxs.gitbook.io/ngxs)
* [ngx-translate documentation](https://github.com/ngx-translate/core)
* [ngx-resource-factory documentation](https://github.com/beachmachine/ngx-resource-factory)
* [ngx-ui-router-url-type-factory documentation](https://github.com/anx-astocker/ngx-ui-router-url-type-factory)
* [ng-bootstrap documentation](https://ng-bootstrap.github.io/#/home)
* [Font Awesome 5 icons](https://fontawesome.com/icons?d=gallery&m=free)
* [Angular Font Awesome docs](https://github.com/FortAwesome/angular-fontawesome)
* [Angular Storyybook docs](https://storybook.js.org/basics/guide-angular/)
* [Compodoc docs](https://compodoc.app/)
* [GitLab flavored markdown](https://docs.gitlab.com/ee/user/markdown.html)
