import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router"; 

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        MenuComponent,
        HomeComponent,
        FooterComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    //no exports, estou deixando visivel meus componentes ao mundo externo
    //ao demais que faz referencia ao meu modulo
    exports: [        
        MenuComponent,
        HomeComponent,
        FooterComponent
    ]
})
export class NavegacaoModule{}