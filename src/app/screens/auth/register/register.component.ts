import { Component } from '@angular/core';

import { StateService } from '@uirouter/angular';
import { UserResource } from 'src/app/services/resource/user.resource';
import { AlertService } from 'src/app/services/alert/alert.service';


@Component({
    templateUrl: './register.component.html',
    styleUrls: [
        './register.component.scss'
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
            .then(() => {
                // set success message and pass true parameter to persist the message after redirecting to the login page
                this.alertService.success('Registration successful', true);
                this.state.go('auth.login');
            })
            .catch(error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
