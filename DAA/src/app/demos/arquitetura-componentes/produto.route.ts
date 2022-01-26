import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoResolve } from "./services/produto.resolve";

const produtoRouterConfig: Routes=[
    //aqui estou dizerndo que agora dentro da rota principal, tenho uma rota filha
    {path: '', component: ProdutoAppComponent, 
    children: [
        {path: '', redirectTo: 'todos'},
        {
            path: ':estado', 
            component: ProdutoDashboardComponent,
            resolve: {
                produtos: ProdutoResolve
            },
            data: {
                teste: 'informação informação'
            }
        },
        {path: 'editar/:id', component: EditarProdutoComponent}
    ]},
];

@NgModule({
    declarations:[
        
    ],
    imports:[
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutoRoutingModule{}