import { Component, OnInit, Input } from '@angular/core';
import { AppService, User, Post } from 'src/app/server.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    @Input() items;
    @Input() page: string;
    newTopic = "test";

    constructor(
        private service: AppService,
    ) { }

    add() {
        this.service.add(this.page, this.newTopic);
        this.items.push( newItem(this.page, this.newTopic, this.items) );

        function newItem(page, newTopic, items) {
            console.log(' newItem ');
            console.log(page);
            return page === 'user'
            ? { name: newTopic, id: items.length + 1 }
            : { title: newTopic, id: items.length + 1 }
        }
    }

    edit(page, id) {
        console.log(' page: ' + page + ", id :" + id);
        this.service.edit(this.items, id, this.newTopic);
    }

    remove(page, id) {
        console.log(' page: ' + page + ", id :" + id);
        this.service.remove(id, page);
        this.items = this.items.filter(el => el.id !== id);
    }

    ngOnInit(): void { }

}
