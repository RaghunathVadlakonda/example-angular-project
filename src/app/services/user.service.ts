import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{

    private BASE_URL = 'http://localhost:3013/user';

    constructor(private http: HttpClient) { }

     getUsers(){
        return this.http.get<any>(this.BASE_URL+'/getUsers');
     }

     saveUsers(obj){
        return this.http.post<any>(this.BASE_URL+'/saveUser',obj);
     }
}