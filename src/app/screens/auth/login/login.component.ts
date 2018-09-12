import { Component, OnInit } from '@angular/core';

import { StateService } from '@uirouter/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthenticationService } from '@app/services/authentication/authentication.service';


@Component({
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.scss'
    ]
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private state: StateService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
    }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .then(
                () => {
                    this.alertService.success('Login successful');
                    this.state.go('root');
                },
            )
            .catch(
                error => {
                    console.log('Could not login user!');
                    this.alertService.error(error);
                }
            )
            .finally(() => {
                this.loading = false;
            });
    }
}
