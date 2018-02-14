import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainComponent } from './main/main.component';
import { AlertComponent } from './widgets/index';
import { HomeComponent, LoginComponent, RegisterComponent } from './screens/index'

import { JwtInterceptor } from './helpers/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { AuthGuard } from './guards/index';
import { RoutingModule } from './app.routing';

// used to create fake backend
import { fakeBackendProvider } from './helpers/index';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { NavigationComponent } from './widgets/navigation/navigation.component';
import { ContentComponent } from './widgets/content/content.component';
import { FrontendLayoutComponent } from './widgets/frontend-layout/frontend-layout.component';


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
    FrontendLayoutComponent
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
