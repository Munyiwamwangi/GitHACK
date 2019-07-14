import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Repository } from './repository';

@Injectable()
export class SearchService {
  public username: string;
  user: User;
  repos: Repository[];
  reposa: any = [];

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', 0, 0, '');
    this.repos = [];
    this.username = 'lilianwaweru';
  }}
