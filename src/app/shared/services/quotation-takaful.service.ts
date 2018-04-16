import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { URL_CONST } from '../config/url.constants';
import { USER } from '../config/user';


@Injectable()
export class QuotationTakafulService {

  options: RequestOptions;
  constructor(private http: Http) { }

  

  getTakafulLeasingTypes() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/LeasingType/GetTakafulLeasingType', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getTakafulProducts() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/Product/GetTakafulProducts', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getAllowedTakafulProducts(VehicleTypeId, UsageId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/Product/GetAllowedTakafulProducts?VehicleTypeId=' + VehicleTypeId + '&UsageId=' + UsageId, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }
  saveQuotationMainDetails(params) {
    let body = params;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let postoptions = new RequestOptions({ headers: headers });

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/AddQuotationMainDetails', body, postoptions)
      .map(res => res)
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
    /* .map((response: Response) => response);*/


  }
  updateQuotationMainDetails(params) {
    let body = params;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let postoptions = new RequestOptions({ headers: headers });

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/UpdateQuotationMainDetails', body, postoptions)
      .map(res => res)
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
    /* .map((response: Response) => response);*/


  }

  saveQuotationCoversDetails(jobId, revisionId, params) {

    //let body = params;

    let body = { JobId: jobId, RevisionId: revisionId, QuotationCovers: params };

    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let postoptions = new RequestOptions({ headers: headers });

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationCoverTakaful/AddQuotationCoverDetails', body, postoptions)
      .map(res => res)
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
    /* .map((response: Response) => response);*/


  }

  calculateAndGetPremium(params) {
    let body = params;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let postoptions = new RequestOptions({ headers: headers });

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/CalculateAndGetPremium', body, postoptions)
      .map(res => res)
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
    /* .map((response: Response) => response);*/


  }


  getCalculation(objViewCalculation) {
    console.log('jjj' + objViewCalculation.JobId + '    rrr=' + objViewCalculation.RevisionId);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    headers.append('responseType', 'arraybuffer');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/GetCalculation', objViewCalculation, options)
      .map(res => res)
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  getQuotation(objViewQuotation) {
    console.log('jjj' + objViewQuotation.JobId + '    rrr=' + objViewQuotation.RevisionId);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    headers.append('responseType', 'arraybuffer');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/GetQuotation', objViewQuotation, options)
      .map(res => res)
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }



  validateMRRate(objMRRateValidate) {

    let body = objMRRateValidate;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });


    return this.http.post(URL_CONST.URL_PREFIX + 'api/MRRateTakaful/ValidateMRRate', body, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .finally(() => console.log('tttt'))
      .catch((res) => {
        return Observable.throw(new Error(res.status));
      });

    // .catch((error: any) => {
    //   //this.handleError;
    //  // console.log(error.status);
    //   return Observable.throw(error.status);
    //   //return Observable.throw(new Error(error.status))
    // });
  }
  getCalculatedTotalPremiumByJobId(jobId) {
    let body = jobId;
    let headers = new Headers({ 'Content-Type': 'application/json' });

    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    console.log(USER.USER_AUTH_TOKEN);
    return this.http.get(URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/GetCalculatedTotalPremium?jobId=' + jobId + '&revisionNo=0', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        console.log(error);

        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  loadQuotationCoversByJobId(jobId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/QuotationCoverTakaful/GetQuotationCoversByJobId/' + jobId, options)
      .map((response: Response) => JSON.stringify(response.json()))
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  sendMRApprovalRequest(objMRApproval) {
    console.log(JSON.stringify(objMRApproval));
    let body = objMRApproval;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });


    return this.http.post(URL_CONST.URL_PREFIX + 'api/MRApprovalRequestTakaful/AddMRRequest', body, options)
      .map(res => res)
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  searchQuotationDetails(searchObject) {
    let body = searchObject;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });


    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/SearchQuotations', body, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  loadQuotationDetails(jobId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/GetQuotationByJobId/' + jobId, options)
      .map((response: Response) => JSON.stringify(response.json()))
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getQuotationNumberByJobId(jobId) {
    let body = jobId;
    let headers = new Headers({ 'Content-Type': 'application/json' });

    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    console.log(USER.USER_AUTH_TOKEN);
    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/UpdateAndGetQuotationNumber?jobId=' + jobId, body, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  CheckIsRequestSent(jobId) {
    
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', USER.USER_AUTH_TOKEN);
        let options = new RequestOptions({ headers: headers });
    
    
        return this.http.get(URL_CONST.URL_PREFIX + 'api/MRRateTakaful/CheckIsRequestSent?jobNo=' + jobId + '&revisionNo=0', options)
          .map((response: Response) => response.json())
          .timeout(60000)
          .catch((res) => {
            return Observable.throw(new Error(res.status));
          });
      }
    
      CheckRequestStatus(jobId, requestedMR) {
    
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', USER.USER_AUTH_TOKEN);
        let options = new RequestOptions({ headers: headers });
    
    
        return this.http.get(URL_CONST.URL_PREFIX + 'api/MRRateTakaful/CheckRequestStatus?jobNo=' + jobId + '&revisionNo=0&requestedMR=' + requestedMR, options)
          .map((response: Response) => response.json())
          .timeout(60000)
          .catch((res) => {
            return Observable.throw(new Error(res.status));
          });
      }

  private handleError(error: Response) {
    //  throw new Error("HTTP error: " + error.statusText + " (" + error.status + ")");
    console.error('Error occured - ', error);
    console.error('Error Code - ', error.status);
    return Observable.throw(error.status || ' error');
  }
}
