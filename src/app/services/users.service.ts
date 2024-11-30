import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

getUsuarios(){
 return this.http.get('http://localhost:3000/api/users', {responseType: 'json'})
}


// this.http.get('http://localhost:3000/api/users', {responseType: 'json'}).subscribe(data=>{
//   return data
//    })
//  }

  
  
}
