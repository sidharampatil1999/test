import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FetchDataService } from '../../Services/fetch-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.css'
})
export class GoBackButtonComponent implements OnInit, OnDestroy {

  //flag;
  currentStep: number;
  @ViewChild('goBackTemRef') goBack: ElementRef
  //subscription1: Subscription
  subscription2: Subscription

  constructor(private fetchService: FetchDataService) {

  }

  ngOnInit() {
    //this.subscription1 = this.fetchService.goBackBtnFlag.subscribe(val => {
    //  if (val != undefined) {
    //    this.flag = val
    //  }
    //})
    this.subscription2 = this.fetchService.currentStep.subscribe((val: number) => {
      this.currentStep = val;
    })
  }

  clickGoBack() {
    if (this.currentStep == 1 || this.currentStep == 2) {
      this.fetchService.currentStep.next(--this.currentStep);

    }
    else if (this.currentStep == 3) {
      this.fetchService.currentStep.next(1);
    }
  }

  ngOnDestroy() {
    //this.flag = false
    //this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();

  }
 

}
