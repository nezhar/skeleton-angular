import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StateService } from '@uirouter/angular';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';

import { Login } from '../../../shared/state/auth/auth.actions';


@Component({
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.scss'
    ]
})
export class LoginComponent implements OnInit {
    loading = false;
    loginForm: FormGroup;

    constructor(
        private state: StateService,
        private store: Store,
        private toastrService: ToastrService) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    login() {
        const
            username = this.loginForm.get('username').value,
            password = this.loginForm.get('password').value;

        this.loading = true;
        this.store
            .dispatch(new Login(username, password))
            .toPromise()
            .then(
                () => {
                    this.toastrService.success('Login successful');
                    this.state.go('root');
                },
            )
            .catch(
                error => {
                    console.log('Could not login user!');
                    this.toastrService.error(error);
                }
            )
            .finally(() => {
                this.loading = false;
            });
    }
}
