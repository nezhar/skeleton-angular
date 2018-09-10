// Import environment constants
import './app.environment';

// Bootstrap the application
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// Local dependencies
import { AppModule } from './app.module';

// Enable angular production mode on production builds
if (BUILD_PRODUCTION) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
