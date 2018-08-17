import { Component, OnInit } from '@angular/core';

import { StateService } from "@uirouter/angular";

import { AuthenticationResource } from '../../../services/resource';
import { AlertService } from '../../../services/alert/alert.service';
 

@Component({
    selector: 'app-login-screen',
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
      private authenticationResource: AuthenticationResource,
      private alertService: AlertService) { }
 
    ngOnInit() {}

    login() {

      this.loading = true;
      this.authenticationResource.login({}, {
            username: this.model.username,
            password: this.model.password
      }).$promise
          .then(
              data => {
                  localStorage.setItem('currentUser', JSON.stringify(data));
                  this.state.go('root');
              },
          )
          .catch(
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          );
    }
}