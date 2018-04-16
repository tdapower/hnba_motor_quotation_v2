import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ModalModule } from "ng2-modal";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { Md2DatepickerModule } from 'md2-datepicker';

import { ToastrModule } from 'toastr-ng2';

import { AppComponent } from './app.component';
import { QuotationAddComponent } from './pages/quotation/quotation-add/quotation-add.component';
import { SpinnerComponent } from './shared/misc/spinner/spinner.component';
import { DropdownModule } from 'ng2-bootstrap';
import { routes } from './app.router';
import { QuotationSearchComponent } from './pages/quotation/quotation-search/quotation-search.component';
import { QuotationService } from './shared/services/quotation.service';
import { QuotationTakafulService } from './shared/services/quotation-takaful.service';

import { AuthenticationService } from './shared/services/user/authentication.service';

import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { AuthGuard } from '../app/authGuard';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { QuotationTakafulAddComponent } from './pages/quotation-takaful/quotation-takaful-add/quotation-takaful-add.component';
import { QuotationTakafulSearchComponent } from './pages/quotation-takaful/quotation-takaful-search/quotation-takaful-search.component';
import { QuotationViewComponent } from './pages/quotation/quotation-view/quotation-view.component';
import { QuotationBasicComponent } from './pages/quotation/quotation-basic/quotation-basic.component';
import { QuotationTakafulViewComponent } from './pages/quotation-takaful/quotation-takaful-view/quotation-takaful-view.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotationAddComponent,
    SpinnerComponent,
    QuotationSearchComponent,
    UserLoginComponent,
    LayoutComponent,
    HeaderComponent,
    QuotationTakafulAddComponent,
    QuotationTakafulSearchComponent,
    QuotationViewComponent,
    QuotationBasicComponent,
    QuotationTakafulViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NKDatetimeModule,
    routes,
    DropdownModule.forRoot(),
    Ng2PaginationModule,
    ModalModule,
    ToastrModule.forRoot()
  ],
  providers: [QuotationService, QuotationTakafulService,AuthenticationService, AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
