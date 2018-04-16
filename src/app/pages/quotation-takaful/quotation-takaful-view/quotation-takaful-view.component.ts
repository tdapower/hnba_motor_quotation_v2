import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'toastr-ng2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { QuotationService } from '../../../shared/services/quotation.service';
import { QuotationTakafulService } from '../../../shared/services/quotation-takaful.service';
import { IQuotationMain } from '../../../shared/models/quotationMain.model';
import { IQuotationTakafulMain } from '../../../shared/models/quotationTakafulMain.model';
import { IQuotationCover } from '../../../shared/models/quotationCover.model';
import { IQuotationCalculate } from '../../../shared/models/quotationCalculate.model';
import { IMRRateValidate } from '../../../shared/models/mRRateValidate.model';
import { IQuotationView } from '../../../shared/models/quotationView.model';

import { IRiskType } from '../../../shared/models/riskType.model';
import { IVehicleType } from '../../../shared/models/vehicleType.model';
import { IVehicleUsage } from '../../../shared/models/vehicleUsage.model';
import { IFuelType } from '../../../shared/models/fuelType.model';
import { IMRApproval } from '../../../shared/models/mrApproval.model';
import { IMiscType } from '../../../shared/models/miscType.model';
import { IUser } from '../../../shared/models/user/user.model';
import { IUpFrontNCB } from '../../../shared/models/upFrontNCB.model';
import { IEarnedNCB } from '../../../shared/models/earnedNCB.model';

import { URL_CONST } from '../../../shared/config/url.constants';

import { COMMON_VALUES } from '../../../shared/config/commonValues';
@Component({
  selector: 'app-quotation-takaful-view',
  templateUrl: './quotation-takaful-view.component.html',
  styleUrls: ['./quotation-takaful-view.component.css']
})
export class QuotationTakafulViewComponent implements OnInit {

  content;

  mode: string;
  isLoading: boolean;


  private loading: Object = {
    loading1: true,
    loading2: true,
    loading3: true,
    loading4: true,
    loading5: true,
    loading6: true,
    loading7: true,
    loading8: true,
    loading9: true,
    loading10: true
  }




  CalculationURL: string;
  QuotationURL: string;


  riskTypeList: Array<IRiskType> = [];
  vehicleTypeList: Array<IVehicleType> = [];
  vehicleUsageList: Array<IVehicleUsage> = [];
  fuelTypeList: Array<IFuelType> = [];
  leasingTypeList: Array<Object> = [];
  agentTypeList: Array<Object> = [];
  productList: Array<Object> = [];
  periodTypeList: Array<Object> = [];
  periodList: Array<Object> = [];

  earnedNCBList: Array<IEarnedNCB> = [];
  upFrontNCBList: Array<IUpFrontNCB> = [];
  yearOfManufactureList: Array<IMiscType> = [];


  voluntaryList: Array<Object> = [];
  tppdList: Array<Object> = [];
  wciList: Array<Object> = [];
  legalLiabilityCountList: Array<Object> = [];
  legalLiabilityValueList: Array<Object> = [];
  goodsInTransitList: Array<Object> = [];
  PABToDriverList: Array<Object> = [];
  PABToPassengerList: Array<Object> = [];

  makeModelList: Array<Object> = [];

  quotationCovers: IQuotationCover[] = [];



  selectedRiskType: string = '';
  selectedVehicleType: string = '';

  selectedEarnedNCBId: string = '';
  selectedUpFrontNCBId: string = '';
  newQuotation: string;

  QuotationNo: string;
  JobId: string;
  RequestBy: string = "";
  ClientName: string = "";
  VehicleChasisNo: string = "";
  RiskTypeId: string;
  RiskTypeName: string;
  VehicleTypeId: string;
  VehicleTypeName: string;

  VehicleUsageId: string;
  VehicleUsageName: string;

  SumInsured: string;
  PeriodTypeCode: string;
  PeriodOfCoverCode: string;
  AgentBroker: string;
  AgentBrokerCode: string;
  LeasingType: string;
  FuelTypeCode: string;
  FuelTypeName: string;
  ProductCode: string;
  BranchId: string;
  Remark: string = "";
  RequestDate: string;
  Status: string;
  UserId: string;
  RevisionNo: string;
  QuotYear: string;
  YearOfManu: string = "";

  Premium: string = "0.00";

  MultipleRebate: string = "";
  TppdId: string;
  WciId: string;
  legalLiabilityCountId: string;
  legalLiabilityValueId: string;
  goodsInTransitId: string;
  PABToDriverId: string;
  PABToPassengerId: string;
  yearOfManufactureId: string;
  makeModelId: string;

  VoluntaryId: string;
  EarnedNCBId: string;
  EarnedNCBValue: string;

  upFrontNCBId: string;
  upFrontNCBName: string;
  HirePurchaseAmount: string = "";
  AACMembershipAmount: string;
  PABToDriverAmount: string;
  PABToPassengerAmount: string;
  GoodsInTransitAmount: string;
  TowingChargeAmount: string;
  WindscreenAmount: string;
  AirBAgReplacementAmount: string;
  PointsEarnedAmount: string;
  CompulsaryExcess: string;

  isChk1Checked: boolean;
  isChk2Checked: boolean;
  isChk3Checked: boolean;
  isChk4Checked: boolean;
  isChk5Checked: boolean;
  isChk6Checked: boolean;
  isChk7Checked: boolean;
  isChk8Checked: boolean;
  isChk9Checked: boolean;
  isChk10Checked: boolean;
  isChk11Checked: boolean;
  isChk12Checked: boolean;
  isChk13Checked: boolean;
  isChk14Checked: boolean;
  isChk15Checked: boolean;
  isChk16Checked: boolean;
  isChk17Checked: boolean;
  isChk18Checked: boolean;
  isChk19Checked: boolean;
  isChk20Checked: boolean;
  isChk21Checked: boolean;
  isChk22Checked: boolean;
  isChk23Checked: boolean;
  isChk24Checked: boolean;
  isChk25Checked: boolean;
  isChk26Checked: boolean;
  isChk27Checked: boolean;
  isChk28Checked: boolean;
  isChk29Checked: boolean;
  isChk30Checked: boolean;
  isChk31Checked: boolean;
  isChk32Checked: boolean;
  isChk33Checked: boolean;
  isChk34Checked: boolean;
  isChk35Checked: boolean;
  isChk36Checked: boolean;
  isChk37Checked: boolean;
  isChk38Checked: boolean;
  isChk39Checked: boolean;
  isChk40Checked: boolean;


  isChk7Disabled: boolean;
  isChk10Disabled: boolean;
  isChk14Disabled: boolean;
  isChk16Disabled: boolean;
  isChk17Disabled: boolean;
  isChk20Disabled: boolean;
  isChk25Disabled: boolean;
  isChk36Disabled: boolean;
  isChk37Disabled: boolean;

  isTPPDDisabled: boolean;

  RequestByClass: string;
  VehicleChassisNoClass: string;
  SumInsuredClass: string;
  YearofManufactureClass: string;
  YearofManufactureValidationClass: string;
  AgentBrokerTypeClass: string;
  AgentBrokerCodeClass: string;
  VehicleRiskTypeClass: string;
  VehicleTypeClass: string;
  UsageClass: string;
  LeasingTypeClass: string;
  FuelTypeClass: string;
  ProductClass: string;
  MakeAndModelClass: string;
  PeriodofCoverClass: string;


  MultipleRebateClass: string;
  HirePurchaseClass: string;
  VoluntaryClass: string;
  AACMembershipClass: string;
  PABToDriverClass: string;
  PABToPassengerClass: string;
  GoodsInTransitClass: string;
  LegalLiabilityClass: string;
  TowingChargesClass: string;
  EarnedNCBClass: string;
  UpFrontNCBClass: string;
  WindscreenClass: string;
  TPPDClass: string;
  WCIClass: string;
  AirBagReplacementClass: string;
  CompulsaryExcessClass: string;

  MRRequestReason: string;

  isQuotationDetailsValid: boolean = false;

  QuotationDocURL: any;
  QuotationCalculationDocURL: any;



  private QuotationDetailsValid: Object = {
    isAgenBrokerCodeValid: true,
    isMRRateValid: true
  }
  isUserCompanyHNBGI: boolean;
  User: IUser;

  constructor(private quotationService: QuotationService,
    private quotationTakafulService: QuotationTakafulService,
    private toastrService: ToastrService,
    public sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.JobId = activatedRoute.snapshot.params['jobId'];

    console.log('id by view ' + this.JobId);
  }


  ngOnInit() {
    this.initializeComonents();

    this.User = JSON.parse(localStorage.getItem('currentUser'));
    if (this.User.Company == 'General') {
      this.isUserCompanyHNBGI = true;
    } else {
      this.isUserCompanyHNBGI = false;
    }

    this.loadQuotationDetails();
  }


  initializeComonents() {

    this.mode = "NEW";



    this.isLoading = true;
    this.getRiskTypes();
    this.getVehicleTypes();
    this.getVehicleUsages();
    this.getFuelTypes();
    this.getLeasingTypes();
    this.getAgentTypes();
    this.getProducts();
    this.getPeriodTypes();
    this.getTppds();
    this.getWCI();
    this.getLeagalLiabilityCounts();
    this.getLeagalLiabilityValues();
    this.getGoodsInTransitList();
    this.getPABToDriverList();
    this.getPABToPassengerList();
    this.getYearOfManufactureList();

    this.getMakeModelList();
    // this.isLoading = false;

    //Adjustment fee
    this.isChk24Checked = true;

    //Validated and enabled by usage and risk type
    this.isChk20Disabled = true;
    this.isChk14Disabled = true;

    this.isChk16Disabled = true;
    this.isChk17Disabled = true;
    this.isChk25Disabled = true;

    this.isChk36Disabled = true;
    this.isChk37Disabled = true;

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








  clearValues() {
    this.newQuotation = null;

    this.QuotationNo = null;
    this.JobId = null;
    this.RequestBy = null;
    this.ClientName = null;
    this.VehicleChasisNo = null;
    this.RiskTypeId = "0";
    this.VehicleTypeId = "0";
    this.VehicleUsageId = "0";
    this.SumInsured = null;
    this.PeriodTypeCode = "0";
    this.PeriodOfCoverCode = "0";
    this.AgentBroker = "0";
    this.AgentBrokerCode = null;
    this.LeasingType = "0";
    this.FuelTypeCode = "0";
    this.ProductCode = "0";
    this.BranchId = null;
    this.Remark = null;
    this.RequestDate = null;
    this.Status = null;
    this.UserId = null;
    this.RevisionNo = null;
    this.QuotYear = null;

    this.Premium = null;

    this.MultipleRebate = "";

    this.TppdId = "0";
    this.WciId = "0";
    this.legalLiabilityCountId = "0";
    this.legalLiabilityValueId = "0";
    this.goodsInTransitId = "0";
    this.PABToDriverId = "0";
    this.PABToPassengerId = "0";
    this.yearOfManufactureId = "0";
    this.makeModelId = "0";

    this.VoluntaryId = "0";
    this.EarnedNCBId = "0";
    this.EarnedNCBValue = null;

    this.upFrontNCBId = "0";
    this.upFrontNCBName = null;
    this.HirePurchaseAmount = "";
    this.AACMembershipAmount = null;
    this.PABToDriverAmount = null;
    this.PABToPassengerAmount = null;
    this.GoodsInTransitAmount = null;
    this.TowingChargeAmount = null;
    this.WindscreenAmount = null;
    this.AirBAgReplacementAmount = null;
    this.PointsEarnedAmount = null;
    this.CompulsaryExcess = null;


    this.isChk1Checked = false;
    this.isChk2Checked = false;
    this.isChk3Checked = false;
    this.isChk4Checked = false;
    this.isChk5Checked = false;
    this.isChk6Checked = false;
    this.isChk7Checked = false;
    this.isChk8Checked = false;
    this.isChk9Checked = false;
    this.isChk10Checked = false;
    this.isChk11Checked = false;
    this.isChk12Checked = false;
    this.isChk13Checked = false;
    this.isChk14Checked = false;
    this.isChk15Checked = false;
    this.isChk16Checked = false;
    this.isChk17Checked = false;
    this.isChk18Checked = false;
    this.isChk19Checked = false;
    this.isChk20Checked = false;
    this.isChk21Checked = false;
    this.isChk22Checked = false;
    this.isChk23Checked = false;
    this.isChk24Checked = false;
    this.isChk25Checked = false;
    this.isChk26Checked = false;
    this.isChk27Checked = false;
    this.isChk28Checked = false;
    this.isChk29Checked = false;
    this.isChk30Checked = false;
    this.isChk31Checked = false;
    this.isChk32Checked = false;
    this.isChk33Checked = false;
    this.isChk34Checked = false;
    this.isChk35Checked = false;
    this.isChk36Checked = false;
    this.isChk37Checked = false;
    this.isChk38Checked = false;
    this.isChk39Checked = false;
    this.isChk40Checked = false;

  }

  resetForm() {
    // alert('reset');


    this.clearValues();
    this.mode = "NEW";

    //Adjustment fee
    this.isChk24Checked = true;

    //Validated and enabled by usage and risk type
    this.isChk20Disabled = true;
    this.isChk14Disabled = true;


    this.isChk16Disabled = true;
    this.isChk17Disabled = true;
    this.isChk25Disabled = true;


    this.isChk36Disabled = true;
    this.isChk37Disabled = true;

    this.PeriodTypeCode = "3";


    this.PeriodOfCoverCode = "44";
  }



  loadingComplete() {
    /*    console.log('loading1  = ' + this.loading['loading1']);
        console.log('loading2  = ' + this.loading['loading2']);
        console.log('loading3  = ' + this.loading['loading3']); 
        console.log('loading4  = ' + this.loading['loading4']);
        console.log('loading5  = ' + this.loading['loading5']);
        console.log('loading6  = ' + this.loading['loading6']);
    
    */

    if (!this.loading['loading1'] && !this.loading['loading2'] && !this.loading['loading3'] && !this.loading['loading4']
      && !this.loading['loading5'] && !this.loading['loading6']) {


      this.isLoading = false;
    }

  }


  loadQuotationDetails() {
    this.isLoading = true;
    this.quotationTakafulService.loadQuotationDetails(this.JobId)
      .subscribe((data) => {
        console.log(data);
        let obj: IQuotationMain = JSON.parse(data);

        this.QuotationNo = obj.QuotationNo;
        this.JobId = obj.JobId;
        this.RequestBy = obj.RequestBy;
        this.ClientName = obj.ClientName;
        this.VehicleChasisNo = obj.VehicleChasisNo;
        this.RiskTypeId = obj.RiskTypeId;

        //this.onSelectOfRiskType(obj.RiskTypeId);

        this.getMakeModelListByRiskTypeId(this.RiskTypeId);
        this.getEarnedNCBByRiskTypeId(this.RiskTypeId);
        this.getUpFrontNCBByRiskTypeId(this.RiskTypeId);

        this.VehicleTypeId = obj.VehicleTypeId;

        this.VehicleUsageId = obj.VehicleUsageId;
        this.SumInsured = obj.SumInsured;
        this.PeriodTypeCode = obj.PeriodTypeCode;
        this.PeriodOfCoverCode = obj.PeriodOfCoverCode;
        this.AgentBroker = obj.AgentBroker;
        this.AgentBrokerCode = obj.AgentBrokerCode;
        this.LeasingType = obj.LeasingType;
        this.FuelTypeCode = obj.FuelTypeCode;

        console.log('obj.ProductCode    ' + obj.ProductCode);

        this.ProductCode = obj.ProductCode;
        this.User.BranchCode = obj.BranchId;
        this.Remark = obj.Remark;
        this.User.UserName = obj.UserId;
        this.YearOfManu = obj.YearOfManu;
        console.log('modelc ' + obj.MakeModelCode);

        this.makeModelId = obj.MakeModelCode;

        console.log('mmmm ' + this.makeModelId);

        this.yearOfManufactureId = obj.YearOfManufactureValidationId;



        this.getCalculatedTotalPremiumByJobId(obj.JobId);

        this.loadQuotationCovers(obj.JobId);


        this.mode = "MODIFY";
      },
      (err) => {
        console.log(err);


        this.isLoading = false;
      });
  }

  getCalculatedTotalPremiumByJobId(jobId) {
    this.quotationTakafulService.getCalculatedTotalPremiumByJobId(jobId)
      .subscribe((data) => {
        this.Premium = data;

      },
      (err) => console.log(err));
  }

  checkIsQuotationDetailsValid() {
    /*    isQuotationDetailsValid: boolean;
      private QuotationDetailsValid: Object = {
        isAgenBrokerCodeValid: true,
        isMRRateValid: true
      }*/



    console.log('isAgenBrokerCodeValid   ' + this.QuotationDetailsValid['isAgenBrokerCodeValid']);
    console.log('isMRRateValid    ' + this.QuotationDetailsValid['isMRRateValid']);



    if (this.QuotationDetailsValid['isAgenBrokerCodeValid'] && this.QuotationDetailsValid['isMRRateValid']) {
      this.isQuotationDetailsValid = true;
    } else {
      this.isQuotationDetailsValid = false;
    }

  }

  getRiskTypes() {
    this.quotationService.getRiskTypes()
      .subscribe((data) => {
        this.riskTypeList = data

        this.RiskTypeId = "0";

        this.VehicleTypeId = "0";

        this.VehicleUsageId = "0";
        this.loading['loading1'] = false;
        this.loadingComplete();
      },
      (err) => console.log(err));
  }


  //vehicle type is load according to risk type
  getVehicleTypes() {
    this.quotationService.getVehicleTypes()
      .subscribe((data) => {
        this.vehicleTypeList = data

        this.loading['loading2'] = false;
        this.loadingComplete();
      }),
      ((err) => console.log(err));
  }

  getVehicleTypesByRiskTypeId(riskType) {

    this.isLoading = true;
    this.quotationService.getVehicleTypesByRiskTypeId(riskType)
      .subscribe((data) => {
        this.vehicleTypeList = data

        this.VehicleTypeId = "0";

        this.isLoading = false;
      },
      ((err) => {
        console.log(err);

        this.isLoading = false;
      }));
  }



  getVehicleUsages() {
    this.quotationService.getVehicleUsages()
      .subscribe((data) => {
        this.vehicleUsageList = data

        this.loading['loading4'] = false;
        this.loadingComplete();
      }),
      ((err) => console.log(err));
  }

  getVehicleUsageByRiskTypeIDAndVehicleType(riskType, vehicleType) {

    this.isLoading = true;
    this.quotationService.getVehicleUsageByRiskTypeIDAndVehicleType(riskType, vehicleType)
      .subscribe((data) => {
        this.vehicleUsageList = data

        this.VehicleUsageId = "0";
        this.VehicleUsageId = "0";

        this.isLoading = false;
      },
      (err) => {
        console.log(err);

        this.isLoading = false;
      });
  }

  getAllowedTakafulProducts(vehicleTypeId, usageId) {
    this.ProductCode = "0";
    this.productList = null;
    this.isLoading = true;
    this.quotationTakafulService.getAllowedTakafulProducts(vehicleTypeId, usageId)
      .subscribe((data) => {
        this.productList = data

        this.ProductCode = "0";

        this.isLoading = false;
      },
      (err) => {
        console.log(err);

        this.isLoading = false;
      });
  }



  getFuelTypes() {
    this.quotationService.getFuelTypes()
      .subscribe((data) => {
        this.fuelTypeList = data
        this.FuelTypeCode = "0";
        this.loading['loading2'] = false;
        this.loadingComplete();
      },
      (err) => console.log(err));
  }



  getLeasingTypes() {
    this.quotationTakafulService.getTakafulLeasingTypes()
      .subscribe((data) => {
        this.leasingTypeList = data

        this.LeasingType = "0";
        this.loading['loading3'] = false;
        this.loadingComplete();
      },
      (err) => console.log(err));
  }

  getAgentTypes() {
    this.quotationService.getAgentTypes()
      .subscribe((data) => {
        this.agentTypeList = data

        this.AgentBroker = "0";
        this.loading['loading4'] = false;
        this.loadingComplete();
      },
      (err) => console.log(err));
  }

  getProducts() {
    this.quotationTakafulService.getTakafulProducts()
      .subscribe((data) => {
        this.productList = data

        this.ProductCode = "0";
        this.loading['loading5'] = false;
        this.loadingComplete();
      },
      (err) => console.log(err));
  }

  getPeriodTypes() {
    this.quotationService.getPeriodTypes()
      .subscribe((data) => {
        this.periodTypeList = data

        this.loading['loading6'] = false;
        this.loadingComplete();


        this.PeriodTypeCode = "3";

        this.onSelectOfPeriodTypeCode(this.PeriodTypeCode);

        this.PeriodOfCoverCode = "44";


      },
      (err) => console.log(err));
  }



  getTppds() {
    this.quotationService.getTppds()
      .subscribe((data) => {
        this.tppdList = data;

        this.TppdId = "0";
      },
      (err) => console.log(err));
  }

  getWCI() {
    this.quotationService.getWCI()
      .subscribe((data) => {
        this.wciList = data;

        this.WciId = "0";
      },
      (err) => console.log(err));
  }

  getLeagalLiabilityCounts() {
    this.quotationService.getLeagalLiabilityCounts()
      .subscribe((data) => {
        this.legalLiabilityCountList = data;

        this.legalLiabilityCountId = "0";
      },
      (err) => console.log(err));
  }

  getLeagalLiabilityValues() {
    this.quotationService.getLeagalLiabilityValues()
      .subscribe((data) => {
        this.legalLiabilityValueList = data;

        this.legalLiabilityValueId = "0";
      },
      (err) => console.log(err));
  }

  getGoodsInTransitList() {
    this.quotationService.getGoodsInTransitList()
      .subscribe((data) => {
        this.goodsInTransitList = data;

        this.goodsInTransitId = "0";
      },
      (err) => console.log(err));
  }

  getPABToDriverList() {
    this.quotationService.getPABToDriverList()
      .subscribe((data) => {
        this.PABToDriverList = data;

        this.PABToDriverId = "0";
      },
      (err) => console.log(err));
  }

  getPABToPassengerList() {
    this.quotationService.getPABToPassengerList()
      .subscribe((data) => {
        this.PABToPassengerList = data;

        this.PABToPassengerId = "0";
      },
      (err) => console.log(err));
  }



  getYearOfManufactureList() {
    this.quotationService.getYearOfManufactureList()
      .subscribe((data) => {
        this.yearOfManufactureList = data;

        this.yearOfManufactureId = "0";
      },
      (err) => console.log(err));
  }
  getMakeModelList() {
    this.quotationService.getMakeModelList()
      .subscribe((data) => {

        this.makeModelList = data;

        this.makeModelId = "0";
      },
      (err) => console.log(err));
  }
  getUpFrontNCBByRiskTypeId(riskType) {
    this.quotationService.getUpFrontNCBByRiskTypeId(riskType)
      .subscribe((data) => {
        this.upFrontNCBList = data;

        //this.upFrontNCBId = "0";
        console.log('point 11');

        this.selectedUpFrontNCBId = this.upFrontNCBId;
        console.log('point 11 this.selectedUpFrontNCBId ' + this.selectedUpFrontNCBId);

      },
      (err) => console.log(err));

  }


  getEarnedNCBByRiskTypeId(riskType) {

    this.quotationService.getEarnedNCBsByRiskTypeId(riskType)
      .subscribe((data) => {
        this.earnedNCBList = data;

        // this.EarnedNCBId = "0";

        console.log('point 12');
        this.selectedEarnedNCBId = this.EarnedNCBId;

        console.log('point 12  this.selectedEarnedNCBId' + this.selectedEarnedNCBId);
      },
      (err) => console.log(err));
  }

  getMakeModelListByRiskTypeId(riskType) {
    this.quotationService.getMakeModelListByRiskTypeId(riskType)
      .subscribe((data) => {
        this.makeModelList = data;
        console.log('makeModelList loaded');

        // this.makeModelId = "0";
      },
      (err) => console.log(err));
  }



  onSelectOfEarnedNCB(earnedNCBValue) {
    this.EarnedNCBValue = earnedNCBValue.EarnedNCBName;
    this.EarnedNCBId = earnedNCBValue.EarnedNCBValue;
    //  console.log(earnedNCBValue.EarnedNCBName);
    //  alert(earnedNCBValue.EarnedNCBName);
  }

  onSelectOfUpFrontNCB(upFrontNCB) {
    console.log("upFrontNCB   =" + upFrontNCB);

    this.upFrontNCBId = upFrontNCB.UpFrontNCBValue;
    this.upFrontNCBName = upFrontNCB.UpFrontNCBName;

    console.log(this.upFrontNCBId);
    console.log(this.upFrontNCBName);

    //alert(this.upFrontNCBName);
  }

  onSelectOfPeriodTypeCode(periodType) {
    this.quotationService.getPeriodsByPeriodType(periodType)
      .subscribe((data) => { this.periodList = data },
      (err) => console.log(err));
  }

  onSelectOfRiskType(riskType) {


    this.RiskTypeName = this.riskTypeList.filter(item => item.RiskTypeId == riskType)[0]['RiskTypeName'];


    //////////////
    this.selectedRiskType = riskType;
    this.getVehicleTypesByRiskTypeId(riskType);

    this.quotationService.getVoluntaryByRiskTypeId(riskType)
      .subscribe((data) => {
        this.voluntaryList = data;

        this.VoluntaryId = "0";
      },
      (err) => console.log(err));

    this.quotationService.getEarnedNCBsByRiskTypeId(riskType)
      .subscribe((data) => {
        this.earnedNCBList = data;

        this.EarnedNCBId = "0";
      },
      (err) => console.log(err));

    this.quotationService.getUpFrontNCBByRiskTypeId(riskType)
      .subscribe((data) => {
        this.upFrontNCBList = data;

        this.upFrontNCBId = "0";
      },
      (err) => console.log(err));


    this.quotationService.getMakeModelListByRiskTypeId(riskType)
      .subscribe((data) => {
        this.makeModelList = data;

        this.makeModelId = "0";
      },
      (err) => console.log(err));


    if (this.selectedVehicleType != '') {
      this.getVehicleUsageByRiskTypeIDAndVehicleType(this.selectedRiskType, this.selectedVehicleType);
    }

  }

  onSelectOfVehicleType(vehicleType) {

    this.VehicleTypeName = this.vehicleTypeList.filter(item => item.VehicleTypeId == vehicleType)[0]['VehicleTypeName'];

    this.selectedVehicleType = vehicleType;
    this.getVehicleUsageByRiskTypeIDAndVehicleType(this.selectedRiskType, vehicleType);
  }
  onChk9CheckedChanged() {

    if (this.isChk9Checked) {
      this.isChk10Checked = false;
    }
  }
  onChk10CheckedChanged() {
    if (this.isChk10Checked) {
      this.isChk9Checked = false;
    }
  }

  onChk19CheckedChanged() {
    if (this.isChk19Checked) {
      this.isChk18Checked = true;
    } else {
      this.isChk18Checked = false;
    }

  }

  onChk18CheckedChanged() {
    if (this.isChk18Checked) {
      this.isChk19Checked = true;
    } else {
      this.isChk19Checked = false;
    }

  }

  onSelectOfAgentBrokerType(AgentBrokerType) {
    if (AgentBrokerType == "Direct") {
      this.AgentBrokerCode = "DIRECT";
    } else {
      this.AgentBrokerCode = "";
    }
  }

  onChangeProduct(Product) {

    console.log(Product);
    //Motor Guard Extra=2
    if (Product == COMMON_VALUES.MOTOR_GUARD_EXTRA_PRODUCT_CODE) {
      this.isChk36Disabled = false;
      this.isChk37Disabled = false;
    }

    /* if (Product == "3") {
 
       for (var i = 1; i < 40; i++) {
 
         var chkName: any;
         var chkItem: any;
 
         chkName = "this.isChk" + i + "Checked";
 
         if (eval(chkName)) {
           chkItem = eval(chkName);
 
           chkItem = false;
           console.log(chkName);
         }
 
       }
 
 
 
     }*/


  }

  onSelectOfFuelTypeCode(FuelType) {
    this.FuelTypeName = this.fuelTypeList.filter(item => item.FuelTypeId == FuelType)[0]['FuelTypeName'];

  }




  onSelectOfLeasingType(leasingType) {
    
        if (leasingType == COMMON_VALUES.IJARAH_LEASING_TYPE_CODE) {
          this.isChk10Checked = true;
    
          this.selectedUpFrontNCBId = COMMON_VALUES.UP_FRONT_NCB_1_YEAR_ID;
          this.upFrontNCBId = COMMON_VALUES.UP_FRONT_NCB_1_YEAR_ID;
          this.upFrontNCBName = COMMON_VALUES.UP_FRONT_NCB_1_YEAR_VALUE;
          this.isChk10Disabled = true;
    
        } else {
          this.isChk10Checked = false;
    
          this.selectedUpFrontNCBId = "0";
          this.upFrontNCBId = "";
          this.upFrontNCBName = "";
          this.isChk10Disabled = false;
        }
       
      }
    
    


  onSelectChangeOfUsage(Usage) {
    //PRIVATE = 1
    //HIRING=2
    //RENT=3
    //ROUTE=4
    //Agriculture=5
    this.VehicleUsageName = this.vehicleUsageList.filter(item => item.VehicleUsageId == Usage)[0]['VehicleUsageName'];


    if (Usage == "1") {
      this.isChk20Checked = true;
      this.isChk20Disabled = true;



      this.isChk7Disabled = true;
    } else {
      this.isChk20Checked = false;
      this.isChk20Disabled = false;

      
      this.isChk7Disabled = false;
    }



    //Motor Car=1
    //TPPD
    if (Usage == "1") {
      if (this.RiskTypeId == "1") {
        this.isChk12Checked = false;
        this.isTPPDDisabled = true;
        this.TppdId = "0";
      } else {

        this.isChk12Checked = true;
        this.isTPPDDisabled = false;
      }
    } else {

      this.isTPPDDisabled = false;
    }

    //Inclusion of Excluded Items
    if (Usage == "2") {
      this.isChk14Checked = true;
      if (this.RiskTypeId == "8" || this.RiskTypeId == "9") {
        this.isChk14Disabled = false;
      } else {
        this.isChk14Disabled = true;
      }
    } else {
      this.isChk14Checked = false;
    }

    //CTB
    if (Usage == "4") {
      this.isChk14Checked = true;
      this.isChk14Disabled = true;

      this.isChk16Disabled = false;

    } else {
      this.isChk16Checked = false;
      this.isChk16Disabled = true;

    }

    //Rent A Car
    if (Usage == "3") {
      this.isChk14Checked = true;
      if (this.RiskTypeId == "8" || this.RiskTypeId == "9") {
        this.isChk14Disabled = false;
      } else {
        this.isChk14Disabled = true;
      }

      this.isChk17Checked = true;
      this.isChk17Disabled = false;
    } else {
      this.isChk17Checked = false;
      this.isChk17Disabled = true;

    }


    this.getAllowedTakafulProducts(this.selectedVehicleType, Usage);

  }



  public saveQuotationMain() {
    ////Quotation Main -Start






    let obj: IQuotationTakafulMain = {
      QuotationNo: this.QuotationNo,
      JobId: this.JobId,
      RequestBy: this.RequestBy,
      ClientName: this.ClientName,
      VehicleChasisNo: this.VehicleChasisNo,
      RiskTypeId: this.RiskTypeId,
      VehicleTypeId: this.VehicleTypeId,
      VehicleUsageId: this.VehicleUsageId,
      SumInsured: this.SumInsured,
      PeriodTypeCode: this.PeriodTypeCode,
      PeriodOfCoverCode: this.PeriodOfCoverCode,
      AgentBroker: this.AgentBroker,
      AgentBrokerCode: this.AgentBrokerCode,
      LeasingType: this.LeasingType,
      FuelTypeCode: this.FuelTypeCode,
      ProductCode: this.ProductCode,
      BranchId: this.User.BranchCode,
      Remark: this.Remark,
      RequestDate: '',
      Status: '1',
      UserId: this.User.UserName,
      RevisionNo: '0',
      QuotYear: '',
      MakeModelCode: this.makeModelId,
      YearOfManufactureValidationId: this.yearOfManufactureId
    };


    console.log(JSON.stringify(obj));

    this.newQuotation = null;
    this.quotationTakafulService.saveQuotationMainDetails(obj).subscribe((data: any) => {

      let returnText = data.text();
      this.JobId = returnText.toString().replace(/"/g, '');

      console.log(this.JobId);



      this.RevisionNo = "0";

      if (this.ProductCode != COMMON_VALUES.THIRD_PARTY_PRODUCT_CODE) {
        this.saveQuotationCovers();
      }



    },
      (err) => {
        // alert(err);
        console.log(err);

        this.isLoading = false;
      },
      () => console.log('done'));


    ////Quotation Main -End


  }



  public updateQuotationMain() {
    ////Quotation Main -Start

    let obj: IQuotationTakafulMain = {
      QuotationNo: this.QuotationNo,
      JobId: this.JobId,
      RequestBy: this.RequestBy,
      ClientName: this.ClientName,
      VehicleChasisNo: this.VehicleChasisNo,
      RiskTypeId: this.RiskTypeId,
      VehicleTypeId: this.VehicleTypeId,
      VehicleUsageId: this.VehicleUsageId,
      SumInsured: this.SumInsured,
      PeriodTypeCode: this.PeriodTypeCode,
      PeriodOfCoverCode: this.PeriodOfCoverCode,
      AgentBroker: this.AgentBroker,
      AgentBrokerCode: this.AgentBrokerCode,
      LeasingType: this.LeasingType,
      FuelTypeCode: this.FuelTypeCode,
      ProductCode: this.ProductCode,
      BranchId: this.User.BranchCode,
      Remark: this.Remark,
      RequestDate: '',
      Status: '1',
      UserId: this.User.UserName,
      RevisionNo: '0',
      QuotYear: '',
      MakeModelCode: this.makeModelId,
      YearOfManufactureValidationId: this.yearOfManufactureId
    };


    console.log(JSON.stringify(obj));

    this.newQuotation = null;
    this.quotationTakafulService.updateQuotationMainDetails(obj).subscribe((data: any) => {


      if (this.ProductCode != "3") {
        this.saveQuotationCovers();
      }





    },
      (err) => {
        // alert(err);
        console.log(err);
      },
      () => console.log('done'));


    ////Quotation Main -End


  }

  public saveQuotationCovers() {

    this.quotationCovers = [];


    if (this.MultipleRebate != "") {
      var mrcover = {
        'JobId': this.JobId,
        'RevisionId': 0,
        'Cover': "multiple rebate",
        'Type': "",
        'Amount': this.MultipleRebate
      }

      this.quotationCovers.push(mrcover);

    }




    for (var i = 1; i < 40; i++) {

      var chkName: any;
      chkName = "this.isChk" + i + "Checked";

      //console.log(chkName);

      if (eval(chkName)) {
        console.log(chkName);


        var coverAmount = "";
        var coverType = "";

        var chkString = "chk" + i;

        if (chkString == "chk2" || chkString == "chk4" || chkString == "chk5" || chkString == "chk6" || chkString == "chk7" || chkString == "chk9" || chkString == "chk10" || chkString == "chk12" || chkString == "chk13") {
          if (chkString == "chk2") {
            coverType = this.VoluntaryId;
          }

          if (chkString == "chk4") {
            coverType = this.PABToDriverId;
          }
          if (chkString == "chk5") {
            coverType = this.PABToPassengerId;
          }
          if (chkString == "chk6") {
            coverType = this.goodsInTransitId;
          }
          if (chkString == "chk7") {
            coverType = this.legalLiabilityCountId;
          }
          if (chkString == "chk9") {
            if (this.selectedEarnedNCBId != "0") {
              this.EarnedNCBId = this.earnedNCBList.filter(item => item.EarnedNCBValue == this.selectedEarnedNCBId)[0]['EarnedNCBName'];
              this.EarnedNCBValue = this.earnedNCBList.filter(item => item.EarnedNCBValue == this.selectedEarnedNCBId)[0]['EarnedNCBValue'];
            }

            coverType = this.EarnedNCBId;
          }
          if (chkString == "chk10") {
            console.log(' this.upFrontNCBName ' + this.upFrontNCBName);
            if (this.selectedUpFrontNCBId != "0") {
              this.upFrontNCBId = this.upFrontNCBList.filter(item => item.UpFrontNCBValue == this.selectedUpFrontNCBId)[0]['UpFrontNCBValue'];
              this.upFrontNCBName = this.upFrontNCBList.filter(item => item.UpFrontNCBValue == this.selectedUpFrontNCBId)[0]['UpFrontNCBName'];
            }
            coverType = this.upFrontNCBName;
          }
          if (chkString == "chk12") {
            coverType = this.TppdId;
          }
          if (chkString == "chk13") {
            coverType = this.WciId;
          }
        }
        else {
          coverType = "0";
        }



        if (chkString == "chk1" || chkString == "chk3" || chkString == "chk4" || chkString == "chk5" || chkString == "chk6" || chkString == "chk7" || chkString == "chk8" || chkString == "chk9" || chkString == "chk10" || chkString == "chk11" || chkString == "chk21" || chkString == "chk28" || chkString == "chk29" || chkString == "chk30" || chkString == "chk31" || chkString == "chk32" || chkString == "chk35") {
          if (chkString == "chk1") {
            coverAmount = this.HirePurchaseAmount;
          }

          if (chkString == "chk3") {
            coverAmount = this.AACMembershipAmount;
          }
          if (chkString == "chk4") {
            coverAmount = this.PABToDriverAmount;
          }
          if (chkString == "chk5") {
            coverAmount = this.PABToPassengerAmount;
          }
          if (chkString == "chk6") {
            coverAmount = this.GoodsInTransitAmount;
          }
          if (chkString == "chk7") {
            coverAmount = this.legalLiabilityValueId;
          }
          if (chkString == "chk8") {
            coverAmount = this.TowingChargeAmount;
          }
          if (chkString == "chk9") {
            if (this.selectedEarnedNCBId != "0") {
              this.EarnedNCBId = this.earnedNCBList.filter(item => item.EarnedNCBValue == this.selectedEarnedNCBId)[0]['EarnedNCBName'];
              this.EarnedNCBValue = this.earnedNCBList.filter(item => item.EarnedNCBValue == this.selectedEarnedNCBId)[0]['EarnedNCBValue'];
            }

            coverAmount = this.EarnedNCBValue;
          }
          if (chkString == "chk10") {
            if (this.selectedUpFrontNCBId != "0") {
              this.upFrontNCBId = this.upFrontNCBList.filter(item => item.UpFrontNCBValue == this.selectedUpFrontNCBId)[0]['UpFrontNCBValue'];
              this.upFrontNCBName = this.upFrontNCBList.filter(item => item.UpFrontNCBValue == this.selectedUpFrontNCBId)[0]['UpFrontNCBName'];
            }

            coverAmount = this.upFrontNCBId;


          }
          if (chkString == "chk11") {
            coverAmount = this.WindscreenAmount;
          }
          if (chkString == "chk21") {
            coverAmount = this.PointsEarnedAmount;
          }
          /*      if (chkString == "chk28") {
                  coverAmount = txtSRCCForPAB.Text;
                }
                if (chkString == "chk29") {
                  coverAmount = txtTCforPAB.Text;
                }
                if (chkString == "chk30") {
                  coverAmount = txtSRCCforWCI.Text;
                }
                if (chkString == "chk31") {
                  coverAmount = txtTCforWCI.Text;
                }*/
          if (chkString == "chk32") {
            coverAmount = this.CompulsaryExcess;
          }
          if (chkString == "chk35") {
            coverAmount = this.AirBAgReplacementAmount;
          }

        }
        else {
          coverAmount = "0";
        }



        var cover = {
          'JobId': this.JobId,
          'RevisionId': 0,
          'Cover': "chk" + i,
          'Type': coverType,
          'Amount': coverAmount
        }

        this.quotationCovers.push(cover);

      }
    }


    this.quotationTakafulService.saveQuotationCoversDetails(this.JobId, this.RevisionNo, this.quotationCovers).subscribe((data: any) => {


      let objForCalculate: IQuotationCalculate = {
        JobId: this.JobId,
        RevisionNo: '0',
        RiskTypeId: this.RiskTypeId,
        ProductCode: this.ProductCode

      }
      console.log(JSON.stringify(objForCalculate));

      this.quotationTakafulService.calculateAndGetPremium(objForCalculate).subscribe((data: any) => {
        console.log(data);

        let returnText = data.text();
        this.Premium = returnText.toString().replace(/"/g, '');

        let obj: IQuotationView = {
          JobId: this.JobId,
          RevisionNo: '0',
          ProductCode: this.ProductCode
        };




        this.CalculationURL = URL_CONST.URL_PREFIX + "/api/QuotationMainTakaful/GetCalculation?quotationViewRequest=" + obj;

        this.QuotationURL = URL_CONST.URL_PREFIX + "/api/QuotationMainTakaful/GetQuotation?quotationViewRequest=" + obj;

        this.isLoading = false;

      },
        (err) => {
          console.log(err);

          this.isLoading = false;
        });


    },
      (err) => {
        // alert(err);
        console.log(err);
      });
  }



  public calculate() {

    this.isLoading = true;


    this.validateFields();
    console.log('pt2 ' + this.isQuotationDetailsValid);
    //this.validateAgentOrBrokerCode();
    //this.validateMRRate();


    if (this.isQuotationDetailsValid) {
      this.validateAgentOrBrokerCode();

    } else {

      this.isLoading = false;
    }




  }

  // public viewCalculation() {

  //   let objViewQuotation: IQuotationView = {
  //     JobId: this.JobId,
  //     RevisionNo: '0',
  //     ProductCode: this.ProductCode

  //   }


  //   this.quotationService.getCalculation(objViewQuotation)
  //     .subscribe((data) => {
  //       // console.log(data);
  //       var blob = new Blob([data], { type: 'application/pdf' });
  //       // console.log(blob);
  //       // saveAs(blob, "testData.pdf");


  //       var file = new Blob([data], { type: 'application/pdf' });
  //       var fileURL = URL.createObjectURL(file);


  //       console.log(fileURL);
  //       this.blobToFile(file, "calc.pdf");

  //       // this.content = file;



  //       /*   var a = document.createElement("a");
  //          a.href = fileURL;
  //          a.download = "ssss.pdf";
  //          a.click();*/

  //       // saveAs(blob, filename);


  //       // window.open(fileURL);

  //       // this.content = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
  //     }),
  //     ((err) => console.log(err));



  // }

  public getQuotation() {

    let objViewQuotation: IQuotationView = {
      JobId: this.JobId,
      RevisionNo: '0',
      ProductCode: this.ProductCode

    }


    this.quotationTakafulService.getQuotation(objViewQuotation)
      .subscribe((data) => {
        // console.log(data);
        var blob = new Blob([data], { type: 'application/pdf' });
        // console.log(blob);
        // saveAs(blob, "testData.pdf");


        var file = new Blob([data], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);


        console.log(fileURL);
        this.blobToFile(file, "calc.pdf");

        // this.content = file;



        /*   var a = document.createElement("a");
           a.href = fileURL;
           a.download = "ssss.pdf";
           a.click();*/

        // saveAs(blob, filename);


        // window.open(fileURL);

        // this.content = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
      },
      (err) => console.log(err));



  }


  public blobToFile(theBlob: Blob, fileName: string): File {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>theBlob;
  }


  public sendMRApprovalRequest() {
    // let objMRApproval: IMRApproval = {
    //   SeqId: "",
    //   JobId: this.JobId,
    //   RevisionId: "0",
    //   RequestedBy: this.User.UserName,
    //   RecomendedBy: "",
    //   ApprovedBy: "",
    //   Remarks: this.MRRequestReason,
    //   ApproveBranchType: "HDO",
    //   RequestStatus: "",
    //   RequestedMr: this.MultipleRebate,
    //   ApproveRejectReason: "",
    //   ApproveBranchCode: "",
    //   UserName: "",
    //   UserEmail: ""

    // }
    let objMRApproval: IMRApproval = {
      SeqId: 0,
      JobId: Number(this.JobId),
      RevisionId: 0,
      RequestedBy: this.User.UserName,
      RecomendedBy: "",
      ApprovedBy: "",
      Remarks: this.MRRequestReason,
      ApproveBranchType: "HDO",
      RequestStatus: "",
      RequestedMr: Number(this.MultipleRebate),
      ApproveRejectReason: "",
      ApproveBranchCode: "",
      UserName: "",
      UserEmail: ""
    }




    this.quotationTakafulService.sendMRApprovalRequest(objMRApproval).subscribe((data: any) => {

      // this.isLoading = false;
      this.showSuccess("Request Successfully Sent.");

      document.getElementById("closeModalMRRequest").click();

    },
      (err) => {
        // alert(err);
        console.log(err);
        this.isLoading = false;

        this.showSuccess("Error while sending request.");
      },
      () => console.log('done'));

  }

  public validateMRRateBeforeViewingQuotation() {

    let objMRRateValidate: IMRRateValidate = {
      JobId: this.JobId,
      RevisionNo: '0',
      BranchCode: this.User.BranchCode,
      RiskTypeId: this.RiskTypeId,
      VehicleClassId: this.VehicleUsageId,
      FuelTypeCode: this.FuelTypeCode,
      AgentType: this.AgentBroker,
      ProductCode: this.ProductCode,
      MakeModelCode: this.makeModelId,
      YearOfManufactureValidationId: this.yearOfManufactureId,
      SumInsured: this.SumInsured,
      RequestedMR: this.MultipleRebate

    }

    this.quotationTakafulService.validateMRRate(objMRRateValidate).subscribe((data: any) => {


      if (data == false) {

        this.quotationTakafulService.CheckIsRequestSent(this.JobId).subscribe((reqData: any) => {
          console.log('CheckIsRequestSent  ' + reqData);

          if (reqData == true) {
            this.quotationTakafulService.CheckRequestStatus(this.JobId, this.MultipleRebate).subscribe((reqStatusData: any) => {
              console.log('CheckIsRequestSent  ' + reqStatusData);

              if (reqStatusData == COMMON_VALUES.MR_APPROVAL_STATUS_APPROVED) {

                this.displayQuotationDocument();
              } else if (reqStatusData == COMMON_VALUES.MR_APPROVAL_STATUS_PENDING) {
                this.showWarning("MR Rate approval pending...");
              } else if (reqStatusData == COMMON_VALUES.MR_APPROVAL_STATUS_REJECTED) {
                this.showWarning("MR Rate request rejected");
              } else {

                document.getElementById("openModalButton").click();
              }
            },
              (err) => {
                console.log(err);
              },
              () => console.log('done'));
          } else {

            document.getElementById("openModalButton").click();
          }

        },
          (err) => {
            console.log(err);
          },
          () => console.log('done'));


      } else {

        if (this.isQuotationDetailsValid) {

          this.quotationTakafulService.getQuotationNumberByJobId(this.JobId).subscribe((data: any) => {
            this.QuotationNo = data;


            this.displayQuotationDocument();
          },
            (err) => {
              console.log(err);
            },
            () => console.log('done'));


        } else {
          this.showWarning("Error while displaying quotation...");
        }
      }


    },
      (err) => {

        console.log(err);
        console.log(this.QuotationDetailsValid['isMRRateValid']);
        this.MultipleRebateClass = "has-error";
        this.QuotationDetailsValid['isMRRateValid'] = false;
      },
      () => console.log('done')
    );


  }

  public displayQuotationDocument() {
    let url: any;
    url = URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/GetQuotation?jobId=' + this.JobId + '&productCode=' + this.ProductCode;


    this.QuotationDocURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    document.getElementById("openQuotationModalButton").click();
  }


  public validateMRRate() {
    let objMRRateValidate: IMRRateValidate = {
      JobId: this.JobId,
      RevisionNo: '0',
      BranchCode: this.User.BranchCode,
      RiskTypeId: this.RiskTypeId,
      VehicleClassId: this.VehicleUsageId,
      FuelTypeCode: this.FuelTypeCode,
      AgentType: this.AgentBroker,
      ProductCode: this.ProductCode,
      MakeModelCode: this.makeModelId,
      YearOfManufactureValidationId: this.yearOfManufactureId,
      SumInsured: this.SumInsured,
      RequestedMR: this.MultipleRebate

    }


    this.quotationService.validateMRRate(objMRRateValidate).subscribe((data: any) => {
      console.log('point3.1');

      this.QuotationDetailsValid['isMRRateValid'] = false;
      if (data.status == 200) {
        console.log('point3.2');
        this.QuotationDetailsValid['isMRRateValid'] = true;
        this.checkIsQuotationDetailsValid();
        console.log('point3');
        console.log(this.QuotationDetailsValid['isMRRateValid']);
      }
      console.log('point3.3');
      console.log('point5');
      console.log(this.QuotationDetailsValid['isMRRateValid']);
    },
      (err) => {
        // alert(err);
        console.log(err);
        console.log('point4');
        console.log(this.QuotationDetailsValid['isMRRateValid']);
        this.MultipleRebateClass = "has-error";
        this.QuotationDetailsValid['isMRRateValid'] = false;
      },
      () => console.log('done'));



  }




  private validateAgentOrBrokerCode() {

    console.log('pt5 ' + this.isQuotationDetailsValid);
    if (this.AgentBrokerCode != "") {

      if (this.AgentBrokerCode != "DIRECT") {
        this.isQuotationDetailsValid = false;

        console.log('pt6 ' + this.isQuotationDetailsValid);

        this.quotationService.validateAgentOrBrokerCode(this.AgentBrokerCode).subscribe((data: any) => {
          console.log(data);
          if (data.status == 200) {
            this.QuotationDetailsValid['isAgenBrokerCodeValid'] = true;
            this.checkIsQuotationDetailsValid();
            this.isQuotationDetailsValid = true;


            console.log('validate result  - ' + this.isQuotationDetailsValid);
            if (this.isQuotationDetailsValid) {
              if (this.mode == "NEW") {
                this.saveQuotationMain();
                this.mode = "MODIFY";

              } else if (this.mode == "MODIFY") {
                this.updateQuotationMain();
              }
            } else {

              this.isLoading = false;

            }


          } else {
            this.isLoading = false;

            this.isQuotationDetailsValid = false;
            this.QuotationDetailsValid['isAgenBrokerCodeValid'] = false;
            this.showError("Error while validating agent/broker code");

            console.log('pt8 ' + this.isQuotationDetailsValid);
          }


        },
          (err) => {
            // alert(err);
            this.isLoading = false;
            this.showError("Error while validating agent/broker code");
            console.log(err);
            this.QuotationDetailsValid['isAgenBrokerCodeValid'] = false;
            this.isQuotationDetailsValid = false;

            console.log('pt9 ' + this.isQuotationDetailsValid);
          },
          () => console.log('done'));
      } else {
        this.QuotationDetailsValid['isAgenBrokerCodeValid'] = true;
        this.checkIsQuotationDetailsValid();

        this.isQuotationDetailsValid = true;


        console.log('validate result  - ' + this.isQuotationDetailsValid);
        if (this.isQuotationDetailsValid) {
          if (this.mode == "NEW") {
            this.saveQuotationMain();
            this.mode = "MODIFY";

          } else if (this.mode == "MODIFY") {
            this.updateQuotationMain();
          }
        } else {

          this.isLoading = false;

        }

      }
    }
  }

  private validateFields() {


    this.isQuotationDetailsValid = true;
    if (this.SumInsured == null) {
      this.SumInsuredClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.SumInsuredClass = "";
    }


    // if (this.ProductCode == COMMON_VALUES.MOTOR_GUARD_EXTRA_PRODUCT_CODE) {
    //   if (this.YearOfManu == null || this.YearOfManu == "") {
    //     this.YearofManufactureClass = "has-error";
    //     this.isQuotationDetailsValid = false;
    //   } else {
    //     this.YearofManufactureClass = "";
    //   }
    // }
    if (this.AgentBroker == "0") {
      this.AgentBrokerTypeClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.AgentBrokerTypeClass = "";
    }

    if (this.AgentBrokerCode == null) {
      this.AgentBrokerCodeClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.AgentBrokerCodeClass = "";
    }
    if (this.RiskTypeId == "0") {
      this.VehicleRiskTypeClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.VehicleRiskTypeClass = "";
    }
    if (this.VehicleTypeId == "0") {
      this.VehicleTypeClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.VehicleTypeClass = "";
    }
    if (this.VehicleUsageId == "0") {
      this.UsageClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.UsageClass = "";
    }
    if (this.LeasingType == "0") {
      this.LeasingTypeClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.LeasingTypeClass = "";
    }
    if (this.FuelTypeCode == "0") {
      this.FuelTypeClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.FuelTypeClass = "";
    }
    if (this.ProductCode == "0") {
      this.ProductClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.ProductClass = "";
    }
    if (this.makeModelId == "0") {
      if (this.RiskTypeId == COMMON_VALUES.MOTOR_CAR_RISK_TYPE) {
        this.MakeAndModelClass = "has-error";
        this.isQuotationDetailsValid = false;
      }

    } else {
      this.MakeAndModelClass = "";
    }
    if (this.PeriodTypeCode == "0") {
      this.PeriodofCoverClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.PeriodofCoverClass = "";
    }
    if (this.yearOfManufactureId == "0") {
      this.YearofManufactureValidationClass = "has-error";
      this.isQuotationDetailsValid = false;
    } else {
      this.YearofManufactureValidationClass = "";
    }

    //validate extra manufacture year
    if (this.ProductCode == COMMON_VALUES.MOTOR_GUARD_EXTRA_PRODUCT_CODE) {
      let MOTOR_GUARD_EXTRA_MAX_YEARS = COMMON_VALUES.MOTOR_GUARD_EXTRA_MAX_YEARS;

      let currentYear = 0;

      if (this.YearOfManu != "") {
        let selectedYearOfManu = Number(this.YearOfManu);


        var moment = require('moment');
        currentYear = moment().format('YYYY');

        if (currentYear - selectedYearOfManu > Number(MOTOR_GUARD_EXTRA_MAX_YEARS)) {

          this.YearofManufactureClass = "has-error";
          this.isQuotationDetailsValid = false;
        } else {
          this.YearofManufactureClass = "";
        }

      }


    }








    console.log('point1');


    for (var i = 1; i < 40; i++) {

      var chkName: any;
      chkName = "this.isChk" + i + "Checked";

      if (eval(chkName)) {

        var coverAmount = "";
        var coverType = "";

        var chkString = "chk" + i;

        if (chkString == "chk2" || chkString == "chk4" || chkString == "chk5" || chkString == "chk6" || chkString == "chk7" || chkString == "chk9" || chkString == "chk10" || chkString == "chk12" || chkString == "chk13") {
          if (chkString == "chk2") {
            if (this.VoluntaryId == "0") {
              this.VoluntaryClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.VoluntaryClass = "";
            }
          }

          if (chkString == "chk4") {

            if (this.PABToDriverId == "0") {
              this.PABToDriverClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.PABToDriverClass = "";
            }
          }
          if (chkString == "chk5") {

            if (this.PABToPassengerId == "0") {
              this.PABToPassengerClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.PABToPassengerClass = "";
            }
          }
          if (chkString == "chk6") {

            if (this.goodsInTransitId == "0") {
              this.GoodsInTransitClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.GoodsInTransitClass = "";
            }
          }
          if (chkString == "chk7") {
            if (this.legalLiabilityCountId == "0") {
              this.LegalLiabilityClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.LegalLiabilityClass = "";
            }
          }
          if (chkString == "chk9") {
            if (this.EarnedNCBId == "0") {
              this.EarnedNCBClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.EarnedNCBClass = "";
            }
          }
          if (chkString == "chk10") {
            if (this.upFrontNCBId == "0") {
              this.UpFrontNCBClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.UpFrontNCBClass = "";
            }
          }
          if (chkString == "chk12") {
            if (this.TppdId == "0") {
              this.TPPDClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.TPPDClass = "";
            }
          }
          if (chkString == "chk13") {
            if (this.WciId == "0") {
              this.WCIClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.WCIClass = "";
            }
          }
        }


        if (chkString == "chk1" || chkString == "chk3" || chkString == "chk4" || chkString == "chk5" || chkString == "chk6" || chkString == "chk7" || chkString == "chk8" || chkString == "chk9" || chkString == "chk10" || chkString == "chk11" || chkString == "chk21" || chkString == "chk28" || chkString == "chk29" || chkString == "chk30" || chkString == "chk31" || chkString == "chk32" || chkString == "chk35") {
          // if (chkString == "chk1") {
          //   if (this.HirePurchaseAmount == null) {
          //     this.HirePurchaseClass = "has-error";
          //     this.isQuotationDetailsValid = false;
          //   } else {
          //     this.HirePurchaseClass = "";
          //   }
          // }

          if (chkString == "chk3") {
            if (this.AACMembershipAmount == null) {
              this.AACMembershipClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.AACMembershipClass = "";
            }
          }
          if (chkString == "chk4") {
            if (this.PABToDriverAmount == null || Number(this.PABToDriverAmount) < Number(COMMON_VALUES.MINIMUM_PAB_CHARGE)) {
              this.PABToDriverClass = "has-error";
              this.isQuotationDetailsValid = false;

              this.showError('PAB to Driver amount is below the minimum amount');
            } else {
              this.PABToDriverClass = "";
            }

            if (this.PABToDriverAmount == null || Number(this.PABToDriverAmount) > Number(COMMON_VALUES.MAXIMUM_PAB_CHARGE)) {
              this.PABToDriverClass = "has-error";
              this.isQuotationDetailsValid = false;

              this.showError('PAB to Driver amount is exceded the maximum amount');
            } else {
              this.PABToDriverClass = "";
            }

          }
          if (chkString == "chk5") {
            if (this.PABToPassengerAmount == null || Number(this.PABToPassengerAmount) < Number(COMMON_VALUES.MINIMUM_PAB_CHARGE)) {
              this.PABToPassengerClass = "has-error";
              this.isQuotationDetailsValid = false;

              this.showError('PAB to Passenger amount is below the minimum amount');
            } else {
              this.PABToPassengerClass = "";
            }

            if (this.PABToPassengerAmount == null || Number(this.PABToPassengerAmount) > Number(COMMON_VALUES.MAXIMUM_PAB_CHARGE)) {
              this.PABToPassengerClass = "has-error";
              this.isQuotationDetailsValid = false;
              this.showError('PAB to Passenger amount is exceded the maximum amount');
            } else {
              this.PABToPassengerClass = "";
            }

          }
          if (chkString == "chk6") {
            //  coverAmount = this.GoodsInTransitAmount;
          }
          if (chkString == "chk7") {
            if (this.legalLiabilityValueId == "0") {
              this.LegalLiabilityClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.LegalLiabilityClass = "";
            }
          }
          if (chkString == "chk8") {
            if (Number(this.TowingChargeAmount) < Number(COMMON_VALUES.MINIMUM_TOWING_CHARGE)) {
              this.TowingChargesClass = "has-error";
              this.isQuotationDetailsValid = false;
              this.showError('Towing charge amount is below the minimum amount');
            } else {
              this.TowingChargesClass = "";
            }
          }
          if (chkString == "chk9") {
            // coverAmount = this.EarnedNCBValue;
          }
          if (chkString == "chk10") {
            // coverAmount = this.upFrontNCBId;
          }
          if (chkString == "chk11") {
            if (this.WindscreenAmount == null) {
              this.WindscreenClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.WindscreenClass = "";
            }
          }
          if (chkString == "chk21") {
            //coverAmount = this.PointsEarnedAmount;
          }

          if (chkString == "chk32") {
            if (this.CompulsaryExcess == null) {
              this.CompulsaryExcessClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.CompulsaryExcessClass = "";
            }
          }
          if (chkString == "chk35") {
            if (this.AirBAgReplacementAmount == null) {
              this.AirBagReplacementClass = "has-error";
              this.isQuotationDetailsValid = false;
            } else {
              this.AirBagReplacementClass = "";
            }
          }

        }
        console.log('point2');

      }
    }




  }


  public viewCalculation() {
    // document.getElementById("btnOpenMRRequest").click();



    this.validateAgentOrBrokerCode();

    this.validateFields();
    if (this.isQuotationDetailsValid) {

      let url: any;
      url = URL_CONST.URL_PREFIX + 'api/QuotationMainTakaful/GetCalculation?jobId=' + this.JobId + '&productCode=' + this.ProductCode;
      console.log('url ---' + url);

      this.QuotationCalculationDocURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);

      document.getElementById("openQuotationCalculationModalButton").click();



    } else {
      this.showWarning("Error while displaying calculation...");

    }
  }

  public test() {
    document.getElementById("openModalButton").click();
  }

  public viewQuotation() {
    if (this.MultipleRebate == null || this.MultipleRebate == "") {

      console.log('view q - ' + this.isQuotationDetailsValid);
      if (this.isQuotationDetailsValid) {

        this.quotationService.getQuotationNumberByJobId(this.JobId).subscribe((data: any) => {
          this.QuotationNo = data;
          this.QuotationURL = URL_CONST.URL_PREFIX + "/api/QuotationMainTakaful/GetQuotation?jobId=" + this.JobId + "&productCode=" + this.ProductCode;


          this.displayQuotationDocument();

        },
          (err) => {
            console.log(err);
          },
          () => console.log('done'));

      }
    } else {
      this.validateMRRateBeforeViewingQuotation();
    }



  }

  public selectLeasingCovers() {

    this.isChk1Checked = true;

    this.isChk4Checked = true;
    this.PABToDriverId = "1";
    this.PABToDriverAmount = "15000";

    this.isChk5Checked = true;
    this.PABToPassengerId = "4";
    this.PABToPassengerAmount = "15000";

    this.isChk18Checked = true;
    this.isChk19Checked = true;
    this.isChk26Checked = true;
  }

  loadQuotationCovers(jobId) {

    this.quotationTakafulService.loadQuotationCoversByJobId(jobId)
      .subscribe((data) => {
        console.log(data);
        this.quotationCovers = JSON.parse(data);

        for (var j = 0; j < this.quotationCovers.length; j++) {
          console.log('cccc  ' + this.quotationCovers[j].Cover);

          if (this.quotationCovers[j].Cover != "multiple rebate") {
            console.log('cov1  ' + this.quotationCovers[j].Cover);
            this.tickSelectedCovers(this.quotationCovers[j].Cover);
            this.setCoverValue(this.quotationCovers[j].Cover, this.quotationCovers[j].Type, this.quotationCovers[j].Amount);

          } else {
            console.log('cov2  ' + this.quotationCovers[j].Cover);
            this.setCoverValue(this.quotationCovers[j].Cover, this.quotationCovers[j].Type, this.quotationCovers[j].Amount);

          }

        }



        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      });
  }


  tickSelectedCovers(cover) {
    var chkName: any;
    chkName = "this.is" + cover.charAt(0).toUpperCase() + cover.slice(1) + "Checked";
    eval(chkName + "= true;");
  }

  setCoverValue(cover, coverType, coverAmount) {
    if (cover == "multiple rebate") {
      this.MultipleRebate = coverAmount;

    } else {
      if (cover == "chk4") {
        this.PABToDriverId = coverType;
      }
      if (cover == "chk5") {
        this.PABToPassengerId = coverType;
      }
      if (cover == "chk6") {
        this.goodsInTransitId = coverType;
      }
      if (cover == "chk7") {
        this.legalLiabilityCountId = coverType;
      }
      if (cover == "chk12") {
        this.TppdId = coverType;
      }
      if (cover == "chk13") {
        this.WciId = coverType;
      }

      if (cover == "chk1") {
        this.HirePurchaseAmount = coverAmount;
      }
      if (cover == "chk2") {

        this.VoluntaryId = coverType;
      }
      if (cover == "chk3") {
        this.AACMembershipAmount = coverAmount;
      }
      if (cover == "chk4") {
        this.PABToDriverAmount = coverAmount;
      }
      if (cover == "chk5") {
        this.PABToPassengerAmount = coverAmount;
      }
      if (cover == "chk6") {
        this.GoodsInTransitAmount = coverAmount;
      }
      if (cover == "chk7") {
        this.legalLiabilityValueId = coverAmount;
      }
      if (cover == "chk8") {
        this.TowingChargeAmount = coverAmount;
      }
      if (cover == "chk9") {

        console.log('ear  ' + coverAmount);
        console.log('ear val ' + coverType);

        this.selectedEarnedNCBId = coverAmount;
        console.log('point 13 this.selectedEarnedNCBId ' + this.selectedEarnedNCBId);

        this.EarnedNCBId = coverType;
        this.EarnedNCBValue = coverAmount;
      }
      if (cover == "chk10") {
        console.log('up  ' + coverAmount);
        console.log('up val ' + coverType);


        this.selectedUpFrontNCBId = coverAmount;

        console.log('point 14 this.selectedUpFrontNCBId ' + this.selectedUpFrontNCBId);
        this.upFrontNCBId = coverType;
        this.upFrontNCBName = coverAmount;

      }
      if (cover == "chk11") {
        this.WindscreenAmount = coverAmount;
      }
      if (cover == "chk21") {
        this.PointsEarnedAmount = coverAmount;
      }
      if (cover == "chk32") {
        this.CompulsaryExcess = coverAmount;
      }

    }
  }


  public CheckYOM() {
    if (this.YearOfManu != "") {
      let selectedYearOfManu = Number(this.YearOfManu);

      if (selectedYearOfManu < 2010) {
        this.yearOfManufactureId = 'Below 2010';
      } else {
        this.yearOfManufactureId = 'Above 2010';
      }
    }

  }

}
