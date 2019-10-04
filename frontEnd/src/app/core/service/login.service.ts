import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Globals} from '../models/global';
import {Observable} from 'rxjs';
import {authToken} from '../models/goods';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  params: HttpParams;
  tok: authToken = new authToken();

  constructor(private http: HttpClient,
              private global: Globals,
              private router: Router) {
  }

  login(user: User): Observable<string> {
    return this.http.get<string>(this.global.backend + '/api/admin/login?login=' + user.name + '&password=' + user.password);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  checkToken(): Observable<boolean> {
    console.log('token: ' + this.getToken());
    return this.http.get<boolean>(this.global.backend + '/api/admin/check?token=' + this.getToken());
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logout sucess');
    this.router.navigate(['ru/admin']);
  }
}

