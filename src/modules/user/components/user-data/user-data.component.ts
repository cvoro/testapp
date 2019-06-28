import { Component, Input, OnInit, Optional } from '@angular/core';
import { UserInterface } from '../../../../interfaces';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input() user: UserInterface;

  constructor( private router: Router) { }

  ngOnInit() {}

  back(): void {
    this.router.navigate(['./users']);
  }

}
