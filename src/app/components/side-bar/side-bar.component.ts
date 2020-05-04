import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    currentPage: string;
    @Output() onPage = new EventEmitter();
    constructor() { }

    pageDepartment() {
        this.currentPage = 'posts';
        this.onSideBar();
    };

    pageEmployee() {
        this.currentPage = 'users';
        this.onSideBar();
    };

    onSideBar() {
        this.onPage.emit(this.currentPage);
    }

    ngOnInit(): void {
    }

}
