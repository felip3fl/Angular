import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate{

    user = {admin:false,logged:false}

    //aqui a tela é carrega no javascript, mas não pode ser apresentada para o usuario
    canActivate(): boolean {
        return this.user.admin
    }

    //aqui a tela não é carrega no javascript, e tbm não pode ser apresentada para o usuario
    canLoad(){
        return this.user.logged;        
    }

}