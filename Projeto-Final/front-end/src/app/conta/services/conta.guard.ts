import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, Router } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { LocalStorageUtils } from 'src/app/utils/localstorage';


@Injectable()
export class ContaGuard implements CanDeactivate<CadastroComponent> {
    
    localStorageUtils = new LocalStorageUtils();

    constructor(private router: Router){}
    
    canDeactivate(component: CadastroComponent) {
        if(component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
        }  

        return true
    }
    
}