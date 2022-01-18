import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";

@NgModule({
    declarations:[
        ProdutoDashboardComponent
    ],
    imports:[
        //CommonModule é para ser tratado como um modulo
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: []
})  
export class ProdutoModule{}