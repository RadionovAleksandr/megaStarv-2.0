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
    loadingPage = false;
    currentPage: string;
    constructor(
        private service: AppService,
    ) { }

    loadPage(name) {
        this.loadingPage = true;
        this.service.fetch(name)
            .subscribe(x => {
                this.currentPage = name;
                this.items = x;
                this.loadingPage = false;
            });
    }
}


