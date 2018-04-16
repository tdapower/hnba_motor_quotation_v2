import { Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { QuotationAddComponent } from './quotation/quotation-add/quotation-add.component';

import { QuotationBasicComponent } from './quotation/quotation-basic/quotation-basic.component';
import { QuotationSearchComponent } from './quotation/quotation-search/quotation-search.component';
import { QuotationViewComponent } from './quotation/quotation-view/quotation-view.component';

import { QuotationTakafulAddComponent } from './quotation-takaful/quotation-takaful-add/quotation-takaful-add.component';
import { QuotationTakafulSearchComponent } from './quotation-takaful/quotation-takaful-search/quotation-takaful-search.component';
import { QuotationTakafulViewComponent } from './quotation-takaful/quotation-takaful-view/quotation-takaful-view.component';


export const PAGE_ROUTES: Routes = [
    {
        path: 'add',
        component: QuotationAddComponent
    },
    {
        path: 'quote',
        component: QuotationBasicComponent
    },
    {
        path: 'search',
        component: QuotationSearchComponent
    },
    {
        path: 'addTakaful',
        component: QuotationTakafulAddComponent
    },
    {
        path: 'searchTakaful',
        component: QuotationTakafulSearchComponent
    },
    {
        path: 'view/:jobId',
        component: QuotationViewComponent
    },
    {
        path: 'viewTakaful/:jobId',
        component: QuotationTakafulViewComponent
    }


];
