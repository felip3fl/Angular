import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styles: []
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;

  constructor(
    //router: ActivatedRoute - aqui serve para pegar a Rota ativa
    private router: ActivatedRoute, private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.produto = this.produtoService.obterPorId(params['id']);
    });
  }

}
