import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../../interfaces';
import { ApiService } from '../../../core/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['id','first_name', 'last_name', 'email'];
  userList: any[] = [];
  pagesCount: number;
  pageIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(
      map(data => data)
    )
      .subscribe((data) => {
        this.userList = data.data.data;
        this.pagesCount = data.data.total;
        if(this.pageIndex === undefined) { // since only on first load it is undefined
          this.pageIndex = data.data.page - 1 // -1 because counting in mat paginator start from 0
        }
      });
  }

  pageChanged(event: PageEvent): void {
    let page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
    this.ngOnInit()
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
