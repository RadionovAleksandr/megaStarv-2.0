import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
    completed: boolean;
    title: string;
    id?: number;
}
export interface Post {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
}
@Injectable({ providedIn: 'root' })
export class AppService {

    users: User[];
    posts: Post[];

    constructor(private http: HttpClient) { }

    add(page: string, name): Observable<void> {
        return this.http.post<void>(`https://jsonplaceholder.typicode.com/${page}`, name);
    }

    fetch(page): Observable<any> {
        return this.http.get<void>(`https://jsonplaceholder.typicode.com/${page}?_limit=2`)
            .pipe(delay(500));
    }

    edit(items, id: number, name: string) {
        items.forEach(element => {
            if (element.id === id) {
                console.log(' element.topic ' + element.title || element.name);
                element.title ? element.title = name : element.name = name;
            }
        });
    }

    remove(id: number, page: string): Observable<void> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/${page}/${id}`);
    }

    addUsers(user: User): Observable<User> {
        return this.http.post<User>('https://jsonplaceholder.typicode.com/todos', user);
    }
}