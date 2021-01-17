import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  async login(user:any){
    
    const url = "localhost://8000/login"

    const result = await this.http.post<any>(url,user).toPromise();

    if(result &&  result.access_token){

    window.localStorage.setItem('token',result.access_token);
    return true;  
    }else{
    return false;  
    }

  }

  createaccount(account:any){
    return new Promise((resolve)=>{
      window.localStorage.setItem('token','meu-token'); 
      resolve(true);
     });
  }

}
