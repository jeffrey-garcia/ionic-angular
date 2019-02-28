import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log("prod? " + environment.production);

if (environment.production) {
  // inject the cordova script to the header index.html at runtime except for testing in browser
  console.log("write the cordova script to the header index.html");
  const cordovaJs = document.createElement('script');
  cordovaJs.type = "text/javascript";
  cordovaJs.src = "cordova.js";
  document.body.appendChild(cordovaJs);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
