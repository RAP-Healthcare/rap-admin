import { Component, OnInit, Injector, OnDestroy, Inject } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiBaseResponse, HttpBaseModel, IndexedDBFactoryService, PROFILE_INDEXED_DB } from '@xaphira/shared';
import {
  ResponseCode,
  USER_INFO,
  User,
  UserInfo, } from '@xaphira/shared';
import { Pattern } from '@xaphira/utils';
import { BaseFormComponent, SelectParamModel } from '@xaphira/ngxa-common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'xa-profile-page',
  styleUrls: ['./profile-page.component.scss'],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

  public image: string;
  public formGroupImage: FormGroup;
  public uploadFinished: boolean;
  public patternEmail: string = Pattern.EMAIL;
  public patternPhoneNumber: string = Pattern.PHONE_NUMBER;
  public minLength: number = 5;
  public disabledUpload: boolean = false;

  public apiSelectProvince: HttpBaseModel;
  public paramSelectProvince: SelectParamModel[];

  public apiSelectCity: HttpBaseModel;
  public paramSelectCity: SelectParamModel[];

  public apiSelectDistrict: HttpBaseModel;
  public paramSelectDistrict: SelectParamModel[];

  public apiSelectSubDistrict: HttpBaseModel;
  public paramSelectSubDistrict: SelectParamModel[];

  constructor(
    public injector: Injector,
    @Inject(USER_INFO) private userService: UserInfo,
    @Inject(PROFILE_INDEXED_DB) private profileIndexedDB: IndexedDBFactoryService) {
    super(injector,
      {
        'name': [],
        'email': [],
        'address': [null, [Validators.minLength(5)]],
        'province': [],
        'city': [],
        'district': [],
        'subDistrict': [],
        'phoneNumber': [],
        'mobileNumber': [],
      });
    this.formGroupImage = this.formBuilder.group({
      'image': [],
    });
    this.apiSelectProvince = this.api['master']['select-province'];
    this.apiSelectCity = this.api['master']['select-city'];
    this.apiSelectDistrict = this.api['master']['select-district'];
    this.apiSelectSubDistrict = this.api['master']['select-subdistrict'];
  }

  ngOnInit(): void {
    this.onInit('profile', 'get-profile');
    this.profileIndexedDB.get('image-b64').then((value: any) => {
      this.image = value;
    });
    this.paramSelectProvince = [{
      key: 'country',
      value: 'IDN',
    }];
    this.paramSelectCity = [{
      key: 'province',
      value: 'undefined',
    }];
    this.paramSelectDistrict = [{
      key: 'city',
      value: 'undefined',
    }];
    this.paramSelectSubDistrict = [{
      key: 'district',
      value: 'undefined',
    }];
  }

  ngOnDestroy(): void {}

  onInit(serviceName: string, apiName: string): void {
    this.loadingForm = true;
    this.exec(serviceName, apiName)
      .subscribe(
        (success: any) => {
          this.loadingForm = false;
          this.formGroup.controls['name'].setValue(success['name']);
          this.formGroup.controls['email'].setValue(success['email']);
          success['address'] ? this.formGroup.controls['address'].setValue(success['address']) : null;
          success['province'] ? this.formGroup.controls['province'].setValue(success['province']) : null;
          success['city'] ? this.formGroup.controls['city'].setValue(success['city']) : null;
          success['district'] ? this.formGroup.controls['district'].setValue(success['district']) : null;
          success['subDistrict'] ? this.formGroup.controls['subDistrict'].setValue(success['subDistrict']) : null;
          success['phoneNumber'] ? this.formGroup.controls['phoneNumber'].setValue(success['phoneNumber']) : null;
          success['mobileNumber'] ? this.formGroup.controls['mobileNumber'].setValue(success['mobileNumber']) : null;
          this.formGroup.markAsPristine();
        },
        (error: HttpErrorResponse) => {
          this.loadingForm = true;
          const err: ApiBaseResponse = error['error'];
          if (err) {
            this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
          } else {
            this.toastr.showI18n(err as any, true, null, 'danger');
          }
        },
      );
  }

  onSelectProvince(select: any): void {
    this.paramSelectCity = [
      {
        key: 'province',
        value: select ? select.value : 'undefined',
      },
    ];
    this.onClearProvince();
  }
  onSelectCity(select: any): void {
    this.paramSelectDistrict = [
      {
        key: 'city',
        value: select ? select.value : 'undefined',
      },
    ];
    this.onClearCity();
  }
  onSelectDistrict(select: any): void {
    this.paramSelectSubDistrict = [
      {
        key: 'district',
        value: select ? select.value : 'undefined',
      },
    ];
    this.onClearDistrict();
  }

  onClearProvince(): void {
    this.formGroup.patchValue({
      'city': [],
      'district': [],
      'subDistrict': [],
    });
  }
  onClearCity(): void {
    this.formGroup.patchValue({
      'district': [],
      'subDistrict': [],
    });
  }
  onClearDistrict(): void {
    this.formGroup.get('subDistrict').patchValue([]);
  }

  uploadImage(file: any) {
    const data: FormData = new FormData();
    data.append('photo', file);
    this.formGroupImage.get('image').disable();
    this.exec('file', 'photo-profile', data).subscribe(
        (success: ApiBaseResponse) => {
          this.userService.updatePhotoUser(file, success.respStatusMessage['checksum']);
          this.uploadFinished = true;
          this.formGroupImage.markAsPristine();
          this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true, null, 'success');
        },
        (error: ApiBaseResponse) => {
          this.formGroupImage.get('image').enable();
          this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        },
    );
  }

  valueSelect(prop: string): string {
    if (this.formGroup.get(prop).value) {
      if (this.formGroup.get(prop).value.label) {
        return this.formGroup.get(prop).value.label;
      } else {
        return this.formGroup.get(prop).value;
      }
    } else {
      return null;
    }
  }

  onSubmit() {
    const data: any = {
      name: this.formGroup.get('name').value,
      email: this.formGroup.get('email').value,
      address: this.formGroup.get('address').value,
      phoneNumber: this.formGroup.get('phoneNumber').value,
      mobileNumber: this.formGroup.get('mobileNumber').value,
      province: this.valueSelect('province'),
      city: this.valueSelect('city'),
      district: this.valueSelect('district'),
      subDistrict: this.valueSelect('subDistrict'),
    };
    (super.onSubmit(data, 'profile', 'change-profile') as Observable<ApiBaseResponse>)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response: ApiBaseResponse) => {
              if (response) {
                switch (response.respStatusCode) {
                  case ResponseCode.ERR_SCR0008.toString():
                    this.formGroup.controls['email'].setErrors({
                      'email': true,
                    });
                    break;
                  case ResponseCode.ERR_SCR0007A.toString():
                    this.formGroup.controls['phoneNumber'].setErrors({
                      'error.pattern.phoneNumber': true,
                    });
                    break;
                  case ResponseCode.ERR_SCR0007B.toString():
                    this.formGroup.controls['mobileNumber'].setErrors({
                      'error.pattern.mobileNumber': true,
                    });
                    break;
                  default:
                    break;
                }
              }
            });
  }

}
