import { ReplaySubject, Subscription } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { PhonesDispatcher } from "./phones.dispatcher";
import { Phone } from "./types/Phone";
import { PhoneStoreEvent, GetPhoneListEvent } from './types/PhoneStoreEvents';
import { PhonesService } from './phones.service';

@Injectable()
export class PhonesStore{
    state: ReplaySubject<any> = new ReplaySubject<any>(1);
    
    constructor(private eventBus: PhonesDispatcher,
                private service : PhonesService){
        this.eventBus.subscribe((event: GetPhoneListEvent)=>{
                this.state.next(this.service.getPhoneList())
        })
    }
}