import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

cardapioUrl = "http://localhost:8080/Produtos";

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.cardapioUrl}`);
  }

  postItem(produto){
    return this.http.post(this.cardapioUrl,produto).subscribe({
      next: data => {
          console.log(data);
      },
      error: error => {
          console.error('There was an error!', error);
      }
  });
  } 
  
  removeritem(id){
    return this.http.delete(this.cardapioUrl+'/'+id)
    .subscribe({
        next: data => {
            //this.status = 'Delete successful';
        },
        error: error => {
            console.error('There was an error!', error);
        }
    });
      
  }
  
}


    /*   let username = "user";
    
    let password = "6360fdbe-583b-4d77-b618-e79d3037f537"; */

 /*    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    }; */
