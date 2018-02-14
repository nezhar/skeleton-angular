import { Component, OnInit } from '@angular/core';

import { StateService } from "@uirouter/angular";
 
import { AlertService, AuthenticationService } from '../../services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
      private state: StateService,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }
 
    ngOnInit() {
      // reset login status
      this.authenticationService.logout();
    }
 
    login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
          data => {
              this.state.go('root');
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          }
        );
    }
}