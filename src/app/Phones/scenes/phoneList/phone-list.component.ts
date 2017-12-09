import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Phone } from '../../../services/Phones/types/Phone';
import { PhonesStore } from '../../../services/Phones/phones.store';
import { PhonesDispatcher } from '../../../services/Phones/phones.dispatcher';
import { GetPhoneListEvent } from '../../../services/Phones/types/PhoneStoreEvents';


@Component({
    selector:'mm-phone-list',
    styleUrls:['phone-list.component.css'],
    template:`
    <article>
        <section class="phone-list--container">
            <ng-container *ngFor="let phone of phoneList|async">
                <mm-phone-detail [phone]="phone"></mm-phone-detail> 
            </ng-container>
        </section>
    </article>`
})
export class PhoneListComponent implements OnInit ,OnDestroy{
    phoneList: Phone[];
    subscription : Subscription;
    constructor(private store: PhonesStore,
                private eventBus : PhonesDispatcher){
       this.subscription = this.store.state.subscribe((phoneList:Phone[])=>{
            this.phoneList =phoneList ;
        })
    }
    ngOnInit(){
        this.eventBus.dispatch(new GetPhoneListEvent());
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}