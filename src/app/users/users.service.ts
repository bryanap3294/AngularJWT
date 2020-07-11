import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: "root"
})
export class UsersService {
    
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:8082/login", user, { observe: 'response'}).pipe(map(user => {
      return user;
    }))
    ;
  }

  setToken(token:string){
    sessionStorage.setItem('token', token);
  }

  getToken(){
    return sessionStorage.getItem('token');
  }
}