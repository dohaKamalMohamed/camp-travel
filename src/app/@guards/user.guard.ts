// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';



import { usersService } from '../@service/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( private router: Router,private auth:usersService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!this.auth.loggedin())
        {
        this.router.navigate(['/login']);
        }
        else
         return true;
    }
}
