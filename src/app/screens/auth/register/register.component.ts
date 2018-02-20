import {Component} from '@angular/core';

import {StateService} from "@uirouter/angular";

import {AlertService, UserResource} from 'app/services';


@Component({
    moduleId: module.id,
    template: require('./register.component.html'),
    styles: [
        require('./register.component.scss')
    ]
})
export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private state: StateService,
        private userResource: UserResource,
        private alertService: AlertService) { }

    register() {
        this.loading = true;

        this.userResource.create(this.model).$save().$promise
            .then(data => {
                // set success message and pass true parameter to persist the message after redirecting to the login page
                this.alertService.success('Registration successful', true);
                this.state.go('auth.login');
            })
            .catch(error => {
                this.alertService.error(error);
                this.loading = false;
            })
    }
}