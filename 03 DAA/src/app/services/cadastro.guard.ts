import { Component, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CadastroComponent } from "../demos/reactiveforms/cadastro/cadastro.component";

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent>{

    canDeactivate(Component: CadastroComponent) {
        if(Component.mudancasNaoSalvas){
            return window.confirm('Tem certeza que deseja descartar tudo?');
        }
        return true;
    }

}