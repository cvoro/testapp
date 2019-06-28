import { Injectable } from '@angular/core';
import { ApiService, PaginationApiService } from '../../core/services';

@Injectable()
export class PaginationResolver {

  constructor(private apiService: ApiService,
              private paginationApiService: PaginationApiService) {}

  resolve() {
    return this.paginationApiService.fetchPaginationInfo();
  }

}
