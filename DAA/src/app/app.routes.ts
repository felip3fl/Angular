import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'produtos', 
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
        .then(m => m.ProdutoModule)},
    { path: 'admin', 
        loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule)},

    //ATENÇÃO, Esse linha SEMPRE tem que ser a última, se não irá bugar o resto da navegação
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    //modulo de routeamento do nosso modulo principal
    imports:[
        RouterModule.forRoot(rootRouterConfig, {enableTracing:true})
    ],
    //aqui no exports, estou deixando o RouterModule disponivel
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}