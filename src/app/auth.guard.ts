import {CanActivate, ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import { HeroService } from './hero.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    param

    constructor(private heroService: HeroService,private activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe( (params) => {
            this.param = params.id;   
        })
    }
    
    canActivate(route : ActivatedRouteSnapshot) {
     return this.heroService.getHero(route.params.id).toPromise().then((value) => {
        console.log(value);
        return parseInt(route.params.id) === 11
    })
    // }
    // else{
    //     window.alert('you do not have permission');
    //     return false;
    // }
    }
  }