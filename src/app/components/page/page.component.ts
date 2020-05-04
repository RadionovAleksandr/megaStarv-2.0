import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../server.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    @Input() items;
    @Input() page: string;
    @Input() objectId;
    @Input() newTopic: string;
    formCreate = false;
    formEdit = false;
    

    constructor(
        private service: AppService,
    ) { }

    add() {
        this.service.add(this.page, this.newTopic);
        this.items.push( newItem(this.page, this.newTopic, this.items) );

        function newItem(page, newTopic, items) {
            return page === 'user'
            ? { name: newTopic, id: items.length + 1 }
            : { title: newTopic, id: items.length + 1 }
        }

        this.formCreate = !this.formCreate;
    }

    edit(id) {
        this.service.edit(this.items, id, this.newTopic);
        this.formCreate ? this.formCreate = !this.formCreate : this.formEdit = !this.formEdit;
    }

    remove(id) {
        this.service.remove(id, this.page);
        this.items = this.items.filter(el => el.id !== id);
    }

    // activeTh(id) {
        // this.items.forEach(element => {
        //     element.id === id ?  : false;
        // });
    // }

    ngOnInit(): void { }
}
