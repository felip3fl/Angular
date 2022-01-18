import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'produtos', 
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
        .then(m => m.ProdutoModule)}
];

@NgModule({
    //modulo de routeamento do nosso modulo principal
    imports:[
        RouterModule.forRoot(rootRouterConfig)
    ],
    //aqui no exports, estou deixando o RouterModule disponivel
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}