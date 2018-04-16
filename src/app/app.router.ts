import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { AuthGuard } from './authGuard';

import { PAGE_ROUTES } from './pages/pages.routing';
import { LayoutComponent } from './layout/layout.component';

export const router: Routes = [
    { path: '', component: LayoutComponent, children: PAGE_ROUTES, canActivate: [AuthGuard]},
    { path: 'login', component: UserLoginComponent }
   /* {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
    
    { path: 'add', component: QuotationAddComponent },
    { path: 'search', component: QuotationSearchComponent, canActivate: [AuthGuard] }*/
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);