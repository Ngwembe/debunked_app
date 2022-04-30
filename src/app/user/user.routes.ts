import { Routes } from "@angular/router";
import { ItemsListResolverService } from "src/app/trucks/shared/items-list-resolver.service";
import { NotFounderrorComponent } from "../errors/not-founderror/not-founderror.component";
import UserProfileRouteActivator from "./profile-route-activator.service";
import { ProfileComponent } from "./profile/profile.component";

export const userRoutes:Routes = [
    { path: '404', component: NotFounderrorComponent },
    { 
        path: 'profile', 
        component: ProfileComponent
    },
    { 
        path: 'profile/new', 
        component: ProfileComponent, 
        canDeactivate: ['canDeactivateCreateEvent'] 
    },
    { path: 'profile/edit', component: ProfileComponent,  resolve: {trucks: ItemsListResolverService} },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [UserProfileRouteActivator] },
    { path: '', redirectTo: '/profile', pathMatch:'full' }
]