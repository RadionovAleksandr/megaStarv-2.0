import { Component } from '@angular/core';
import { AppService } from './server.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'megaStar-v2';
    items;
    currentPage: string;
    constructor(
        private service: AppService,
    ) { }

    loadPage(name) {
        console.log(" loadPage " + name);
        this.service.fetch(name)
            .subscribe(x => {
                this.currentPage = name;
                this.items = x;
            });
    }
}


