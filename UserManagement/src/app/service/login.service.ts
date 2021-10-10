import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  redirectUrl: string;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Login[]> {
    return this.http.get<Login[]>('/api/users/');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getById(id): Observable<Login> {
    return this.http.get<Login>('/api/users/' + id);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  Add(data): any {
    return this.http.post<Login>('/api/users/', data);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  update(data): any {
    return this.http.put<Login>('/api/users/' + data.id, data);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  delete(id): any {
    return this.http.delete<Login>('/api/users/' + id);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  Login(username, password): any {
    return this.http.get('/api/users/').pipe(
      map((response) => {
        response = Object.values(response).filter((x) => {
          return x.username === username && x.password === password;
        });
        if (response !== null && response !== undefined) {
          console.log(response);
          localStorage.setItem('currentUser', JSON.stringify(response));
        }
      })
    );
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  getUserName(): string {
    const userData = localStorage.getItem('currentUser');
    if (userData !== null && userData !== undefined) {
      return JSON.parse(userData)[0].username;
    }
    return '';
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getAdminRole(): boolean {
    const userData = localStorage.getItem('currentUser');
    if (userData !== null && userData !== undefined) {
      const role = JSON.parse(userData)[0].role;
      if (role === 'admin') {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  LoggedOut(): void {
    localStorage.removeItem('currentUser');
  }
}
