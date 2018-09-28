// Bootstrap the application
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// Local dependencies
import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';

// Enable angular production mode on production builds
if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
