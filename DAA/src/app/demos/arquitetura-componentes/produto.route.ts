import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";

const produtoRouterConfig: Routes=[
    {path: '', component: ProdutoDashboardComponent},
    {path: 'editar/:id', component: EditarProdutoComponent}
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