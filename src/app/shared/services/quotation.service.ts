import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { URL_CONST } from '../config/url.constants';
import { USER } from '../config/user';

@Injectable()
export class QuotationService {
  options: RequestOptions;
  constructor(private http: Http) { }

  getRiskTypes() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/RiskType/get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  getVehicleTypes() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/VehicleType/Get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getVehicleTypesByRiskTypeId(riskType) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/VehicleType/GetVehicleTypeByRiskTypeId/' + riskType, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  getVehicleUsages() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/Vehicleusage/get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  getVehicleUsageByRiskTypeIDAndVehicleType(riskTypeId, vehicleTypeId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/VehicleUsage/GetVehicleUsageByRiskTypeIDAndVehicleType?riskTypeId=' + riskTypeId + '&vehicleTypeId=' + vehicleTypeId, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getFuelTypes() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/fueltype/get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getLeasingTypes() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/LeasingType/get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getAgentTypes() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/AgentType/get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getProducts() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/Product/GetProducts', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }



  getAllowedProducts(VehicleTypeId, UsageId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/Product/GetAllowedProducts?VehicleTypeId=' + VehicleTypeId + '&UsageId=' + UsageId, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }



  getPeriodTypes() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/PeriodType/get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getEarnedNCBsByRiskTypeId(riskType) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/EarnedNCB/GetEarnedNCBByRiskTypeId/' + riskType, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  getUpFrontNCBByRiskTypeId(riskType) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/UpFrontNCB/GetUpFrontNCBByRiskTypeId/' + riskType, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }



  getVoluntaryByRiskTypeId(riskType) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/MiscTypes/GetVoluntaryByRiskTypeId/' + riskType, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  getTppds() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/TPPD/Get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getWCI() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/MiscTypes/GetWCI', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }



  getLeagalLiabilityCounts() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/MiscTypes/GetLegalLiability', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getLeagalLiabilityValues() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/LegalLiability/Get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getGoodsInTransitList() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/GoodsInTransit/Get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }





  getPABToDriverList() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/MiscTypes/GetPABToDriver', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  getPABToPassengerList() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/MiscTypes/GetPABToPassenger', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  getYearOfManufactureList() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/MiscTypes/GetYearOfManufactureValidation', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getMakeModelList() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/MakeModel/Get', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getMakeModelListByRiskTypeId(riskType) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/MakeModel/GetMakeModelByRiskTypeID/' + riskType, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  getPeriodsByPeriodType(periodType) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/Period/GetPeriodByPeriodTypeId/' + periodType, options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }







  validateAgentOrBrokerCode(agentBrokerCode) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });


    return this.http.get(URL_CONST.URL_PREFIX + 'api/MiscTypes/ValidateAgentOrBrokerCode?agentBrokerCode=' + agentBrokerCode, options)
      .map(res => res)
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

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMain/AddQuotationMainDetails', body, postoptions)
    .map((response: Response) => JSON.stringify(response.json()))
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

    console.log('point 4');
    console.log(body);
    

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMain/UpdateQuotationMainDetails', body, postoptions)
    .map((response: Response) => JSON.stringify(response.json()))
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

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationCover/AddQuotationCoverDetails', body, postoptions)
    .map((response: Response) => JSON.stringify(response.json()))
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

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMain/CalculateAndGetPremium', body, postoptions)
    .map((response: Response) => JSON.stringify(response.json()))
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

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMain/GetCalculation', objViewCalculation, options)
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

    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMain/GetQuotation', objViewQuotation, options)
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


    return this.http.post(URL_CONST.URL_PREFIX + 'api/MRRate/ValidateMRRate', body, options)
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


  sendMRApprovalRequest(objMRApproval) {
    console.log(JSON.stringify(objMRApproval));
    let body = objMRApproval;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });


    return this.http.post(URL_CONST.URL_PREFIX + 'api/MRApprovalRequest/AddMRRequest', body, options)
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


    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMain/SearchQuotations', body, options)
      .map((response: Response) => response.json())
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
    return this.http.post(URL_CONST.URL_PREFIX + 'api/QuotationMain/UpdateAndGetQuotationNumber?jobId=' + jobId, body, options)
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

    return this.http.get(URL_CONST.URL_PREFIX + 'api/QuotationMain/GetQuotationByJobId/' + jobId, options)
      .map((response: Response) => JSON.stringify(response.json()))
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }

  loadQuotationCoversByJobId(jobId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL_CONST.URL_PREFIX + 'api/QuotationCover/GetQuotationCoversByJobId/' + jobId, options)
      .map((response: Response) => JSON.stringify(response.json()))
      .timeout(60000)
      .catch((error: any) => {
        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }
  getCalculatedTotalPremiumByJobId(jobId) {
    let body = jobId;
    let headers = new Headers({ 'Content-Type': 'application/json' });

    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });

    console.log(USER.USER_AUTH_TOKEN);
    return this.http.get(URL_CONST.URL_PREFIX + 'api/QuotationMain/GetCalculatedTotalPremium?jobId=' + jobId + '&revisionNo=0', options)
      .map((response: Response) => response.json())
      .timeout(60000)
      .catch((error: any) => {
        console.log(error);

        this.handleError;
        return Observable.throw(new Error(error.status))
      });
  }


  CheckIsRequestSent(jobId) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', USER.USER_AUTH_TOKEN);
    let options = new RequestOptions({ headers: headers });


    return this.http.get(URL_CONST.URL_PREFIX + 'api/MRRate/CheckIsRequestSent?jobNo=' + jobId + '&revisionNo=0', options)
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


    return this.http.get(URL_CONST.URL_PREFIX + 'api/MRRate/CheckRequestStatus?jobNo=' + jobId + '&revisionNo=0&requestedMR=' + requestedMR, options)
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