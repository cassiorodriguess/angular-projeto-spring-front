import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http : HttpClient) { }

  categoriaUrl = "http://localhost:8080/Categorias";

  listar(){
    return this.http.get<any[]>(`${this.categoriaUrl}`);
  }

  removeritem(id){
    return this.http.delete(this.categoriaUrl+'/'+id)
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
