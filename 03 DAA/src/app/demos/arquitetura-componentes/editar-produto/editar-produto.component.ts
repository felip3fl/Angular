import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    //route: ActivatedRoute - aqui serve para pegar a Rota ativa
    private route: ActivatedRoute, 
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.produto = this.produtoService.obterPorId(params['id']);
    });
  }

  salvar(){
    //fazer comunicação com backend ...........

    this.router.navigate(['/produtos']);
    //this.router.navigateByUrl(['/produtos']); //não indicado. recarrega a pagina inteira

  }

}
