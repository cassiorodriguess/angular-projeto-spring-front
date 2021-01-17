import { Component, OnInit } from '@angular/core';
import { CardapioService } from 'src/app/cardapio.service';

@Component({
  selector: 'app-formcardapio',
  templateUrl: './formcardapio.component.html',
  styleUrls: ['./formcardapio.component.css']
})
export class FormcardapioComponent implements OnInit {


  produto = {
    titulo:'',
    descricao:'',
    preco:0,
    quantidade:0
  }

  constructor(private cardapioService : CardapioService) { }

  ngOnInit(): void {
  }

  async onSubmit(){

    try {
      const result = await this.cardapioService.postItem(this.produto);
      console.log(' sucesso ' + result);
    } catch (error) {
      console.error(error);
    }

  }


}
