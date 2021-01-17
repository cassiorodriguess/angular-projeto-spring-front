import { Component, OnInit } from '@angular/core';
import { CardapioService } from 'src/app/cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  cardapio : Array<any>;

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.listar();  
  }

  remove(id){
  
  let confirma = confirm("Deseja realmente remover este item ?");
  
  if(confirma){
  
  this.remover(id);  
  this.listar();
  
  }
  
  }

  remover(id){
    console.log("w");
    this.cardapioService.removeritem(id);
  }

  listar(){
    this.cardapioService.listar().subscribe(dados => this.cardapio = dados)
  }

}
