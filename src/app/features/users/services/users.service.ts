import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return new Observable<User[]>(observer => {
      setTimeout(() => {
        observer.next([
          { id: 1, name: 'User 1', email: 'test@test.com' },
          { id: 2, name: 'User 2', email: 'mail2@mail.com' }
        ]);
      }, 1000);
    });
  }

}
