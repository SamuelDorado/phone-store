import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpinnerInterceptor } from '../../services/spinner-interceptor.service';

@Component({
  selector: 'mm-spinner',
  styleUrls: ['./spinner.component.css'],
  template: `<div *ngIf="showLoading" class="ui active dimmer">
                <div class="ui massive text loader">Loading</div>
            </div>`
})
export class SpinnerComponent implements OnDestroy {
  subscription: Subscription;
  showLoading: boolean;;
  constructor(private service: SpinnerInterceptor) { 
    this.subscription = this.service.loadingStatus
    .subscribe(loadingStatus => {
        this.showLoading = loadingStatus;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
