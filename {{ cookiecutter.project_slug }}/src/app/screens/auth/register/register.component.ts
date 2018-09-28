import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StateService } from '@uirouter/angular';
import { UserResource } from 'src/app/services/resource/user.resource';
import { AlertService } from 'src/app/services/alert/alert.service';


@Component({
    templateUrl: './register.component.html',
    styleUrls: [
        './register.component.scss'
    ]
})
export class RegisterComponent implements OnInit {
    loading = false;
    registerForm: FormGroup;

    constructor(
        private state: StateService,
        private userResource: UserResource,
        private alertService: AlertService) {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            first_name: new FormControl('', Validators.required),
            last_name: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            superuser: new FormControl(false),
        });
    }

    register() {
        this.loading = true;
        this.userResource.save({}, this.registerForm.value).$promise
            .then(() => {
                // set success message and pass true parameter to persist the message after redirecting to the login page
                this.alertService.success('Registration successful', true);
                this.state.go('auth.login');
            })
            .catch(error => {
                this.alertService.error(error);
            })
            .finally(() => {
                this.loading = false;
            });
    }
}
