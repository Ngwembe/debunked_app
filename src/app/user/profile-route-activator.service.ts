import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemCardSummaryService } from 'src/app/trucks/shared/item-card-summary.service';

@Injectable({
  providedIn: 'root'
})
export default class UserProfileRouteActivator implements CanActivate {

  constructor(private truckService: ItemCardSummaryService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
  {    
    const itemExists = !!this.truckService.getTruck(route.params['id']);

    if(!itemExists)
      this.router.navigate(['/404'])

      return itemExists;
  }
}
