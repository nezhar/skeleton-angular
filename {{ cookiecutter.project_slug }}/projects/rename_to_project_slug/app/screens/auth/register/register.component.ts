import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StateService } from '@uirouter/angular';
import { ToastrService } from 'ngx-toastr';

import { UserResource } from '@app/services/resource/user.resource';


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
        private toastrService: ToastrService) {
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
                this.toastrService.success('Registration successful');
                this.state.go('auth.login');
            })
            .catch(error => {
                this.toastrService.error(error);
            })
            .finally(() => {
                this.loading = false;
            });
    }
}
