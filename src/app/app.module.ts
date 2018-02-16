import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RoutingModule } from './app.routing';
import { AuthGuard } from './guards/index';
import { JwtInterceptor } from './helpers/index';
import { AlertService, AuthenticationService, UserService } from './services/index';

import { MainComponent, FrontendLayoutComponent, AuthLayoutComponent } from './layouts/index';
import { AlertComponent, HeaderComponent, FooterComponent, NavigationComponent, ContentComponent } from './widgets/index';
import { HomeComponent, LoginComponent, RegisterComponent } from './screens/index'

// used to create fake backend
import { fakeBackendProvider } from './helpers/index';


@NgModule({
  declarations: [
    MainComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ContentComponent,
    FrontendLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [    
    // Angular imports
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // 3rd party imports
    NgbModule.forRoot(),

    // Application imports
    RoutingModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // Provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
