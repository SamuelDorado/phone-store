import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Phone } from '../../../model/Phone';
import { PhonesUpdateAction } from '../../../actions/phones';


@Component({
    selector:'mm-phone-list',
    styleUrls:['phone-list.component.css'],
    template:`
    <article>
        <section class="phone-list--container">
            <ng-container *ngFor="let phone of (phoneList|async)">
                <mm-phone-detail [phone]="phone"></mm-phone-detail> 
            </ng-container>
        </section>
    </article>`
})
export class PhoneListComponent implements OnInit {
    phoneList: Observable<Phone[]>;
    constructor(public store: Store<fromRoot.State>){
        this.phoneList = store.select(fromRoot.getPhoneList);
    }
    ngOnInit() {
        this.store.dispatch(new PhonesUpdateAction());
    }
}