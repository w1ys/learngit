/*您的应用的主要入口点。使用JIT编译器编译应用程序 并引导应用程序的根模块（AppModule）在浏览器中运行。您也可以使用AOT编译器 不通过传递改变任何代码--aot到ng build或ng serve*/
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
