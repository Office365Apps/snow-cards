import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, data } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

// @ts-ignore

Office.initialize = function () {
    // console.log(Office.context);

};

// console.log(Office.context);
(async () => {
    // @ts-ignore
    await Office.onReady();
    // @ts-ignore
    console.log(Office.context);
    data.data = { a: 'b' };
    // @ts-ignore
    if (Office.context && Office.context.mailbox) {
        data.data = { a: 'c' };
    }
    platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
})();
// @ts-ignore
// if (!Office.InitializationReason.Browser) {

//     // @ts-ignore
//     Office.initialize = reason => {
//         // document.getElementById('sideload-msg').style.display = 'none';
//         data.data = { a: 'b' };
//         // Bootstrap the app
//         // platformBrowserDynamic().bootstrapModule(AppModule).catch(error => console.error(error));
//         platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
//         console.log(data);
//     };
// } else {
//     data.data = { a: 'c' };
//     platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));

// }
