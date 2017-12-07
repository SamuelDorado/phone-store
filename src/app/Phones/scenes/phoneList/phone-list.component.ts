import { Component, OnInit } from '@angular/core';
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
export class PhoneListComponent implements OnInit {
    phoneList: Array<Phone>;
    constructor(private store: PhonesStore,
                private eventBus : PhonesDispatcher){
        this.store.state.subscribe((phoneList:Array<Phone>)=>{
            this.phoneList =phoneList ;
        })
    }
    ngOnInit(){
        this.eventBus.dispatch(new GetPhoneListEvent())
    }
}