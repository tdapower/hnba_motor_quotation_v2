import { Component, OnInit, NgZone } from '@angular/core';

import { ToastrService } from 'toastr-ng2';
import { MomentModule } from 'angular2-moment';
import { Router } from '@angular/router';
import { ISearchQuotations } from '../../../shared/models/searchQuotation.model';

import { QuotationService } from '../../../shared/services/quotation.service';
declare var jQuery: any;
@Component({
  selector: 'app-quotation-search',
  templateUrl: './quotation-search.component.html',
  styleUrls: ['./quotation-search.component.css']
})
export class QuotationSearchComponent implements OnInit {

  isLoading: boolean;

  VehicleChasisNo: string = "";
  QuotationNo: string = "";
  JobId: string = "";
  Status: string = "";
  AgentCode: string = "";
  RequestBy: string = "";
  QuotationDate: string = "";


  searchResults: Array<Object> = [];

  datepickerOpts = {
    format: 'dd/mm/yyyy'
  }

  constructor(private quotationService: QuotationService,
    private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.isLoading = false;
  }

  showSuccess(message) {
    this.toastrService.success(message, 'Success!');
  }

  showError(message) {
    this.toastrService.error(message, 'Oops!');
  }

  showWarning(message) {
    this.toastrService.warning(message, 'Alert!');
  }

  showInfo(message) {
    this.toastrService.info(message);
  }
  searchQuotations() {
    if (this.VehicleChasisNo == "" && this.QuotationNo == "" && this.JobId == "" && this.Status == "" && this.AgentCode == "" &&
      this.RequestBy == "" && this.QuotationDate == undefined) {
      this.showWarning("Search text cannot be blank");
    } else {
      this.search();
    }
  }

  search() {

    console.log(this.VehicleChasisNo);
    console.log(this.QuotationNo);
    console.log(this.JobId);
    console.log(this.Status);
    console.log(this.AgentCode);
    console.log(this.RequestBy);


    console.log('this.QuotationDate  ' + this.QuotationDate);

    console.log(this.QuotationDate);


    var moment = require('moment');

    if (this.QuotationDate != undefined) {
      console.log(moment(this.QuotationDate).format('DD/MM/YYYY'));

      var QuotationDate = moment(this.QuotationDate).format('DD/MM/YYYY');
    }


    let objSearchQuotations: ISearchQuotations = {
      QuotationNo: this.QuotationNo,
      VehicleChasisNo: this.VehicleChasisNo,
      JobId: this.JobId,
      Status: this.Status,
      AgentBrokerCode: this.AgentCode,
      RequestBy: this.RequestBy,
      ClientName: '',
      RequestDate: QuotationDate

    }

    this.quotationService.searchQuotationDetails(objSearchQuotations).subscribe((data: any) => {
      console.log(data);
      this.searchResults = data;
    },
      (err) => {
        console.log(err);
      },
      () => console.log('done'));



  }


  setClickedRow = function (index, JobId) {
    console.log(JobId);

    this.router.navigate(['/', 'view', JobId]);
  }





}
