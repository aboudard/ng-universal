import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  public users$ = this.usersService.getUsers();

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    console.log('UsersComponent constructor');
  }

  detailUser(id: number) {
    this.router.navigate(['users', id]);
  }

}
