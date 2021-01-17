import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categoria.service';

@Component({
  selector: 'app-categoriacardapio',
  templateUrl: './categoriacardapio.component.html',
  styleUrls: ['./categoriacardapio.component.css']
})
export class CategoriacardapioComponent implements OnInit {

  categorias:Array<any>;
  

  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
  
   this.listar(); 

  }

  
  remove(id){
  
    let confirma = confirm("Deseja realmente remover este item ?");
    
    if(confirma){
    
      this.remover(id);  
      
    }
      
    }
  
    remover(id){
      console.log("w");
      this.categoriaService.removeritem(id);
    }
  
    listar(){
      this.categoriaService.listar().subscribe(dados => this.categorias = dados)
    }
  

}
