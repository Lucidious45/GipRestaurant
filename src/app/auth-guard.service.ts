import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

@Injectable({
   providedIn: 'root'
 })
 export class AuthGuardService {

   constructor(private auth: AuthService, private router: Router) { }

   CanActivate() {

       return this.auth.user$.pipe(map(user => {
         if (user) return true;
         console.log("checking auth")

        this.router.navigate(['']);
       return false;
       }));
     }


      
   }

