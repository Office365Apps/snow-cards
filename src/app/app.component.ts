import { Component, Inject } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    welcomeMessage = 'Welcome';

    constructor(@Inject('config.data') private data: any) {
        console.log(data);
    }
    async run() {
        /**
         * Insert your Outlook code here
         */
    }
}
