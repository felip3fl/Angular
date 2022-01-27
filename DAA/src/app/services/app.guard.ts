import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad{

user = {admin:false,logged:false}

    canLoad(){
        return this.user.admin;        
    }

}