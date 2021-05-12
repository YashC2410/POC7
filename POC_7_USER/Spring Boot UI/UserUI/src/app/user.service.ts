import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import {User} from './user';
import {HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
 private baseUrl="http://localhost:8080/users/getUsers";
 private baseUrl1:any="http://localhost:8080/users/getById";
 private baseUrl2="http://localhost:8080/users/createUser";
 private baseUrl3="http://localhost:8080/users/updateUser";
 private baseUrl4="http://localhost:8080/users/deleteUser";
 private baseUrl5="http://localhost:8080/users/getUserByName";
 private baseUrl6="http://localhost:8080/users/getUserByPinCode";
 headers=new HttpHeaders({Authorization:'Basic'+btoa("Yash2410"+":"+"12345")});
  constructor(private httpClient: HttpClient) { 
  }
  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }
  getUserById(id:number):Observable<User>{
       return this.httpClient.get<User>(`${this.baseUrl1}/${id}`);
  }
  createUser(user:User):Observable<Object>{
       return this.httpClient.post(`${this.baseUrl2}`,user);
  }
  updateUser(id:number,user:User):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl3}/${id}`,user);
  }
  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl4}/${id}`);
  }
  getUserByName(n:string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl5}/${n}`);
  }
  getUserByPinCode(n1:string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl6}/${n1}`);
  }
  }
