import { Component, Input } from '@angular/core';
import { Phone } from '../../../model/Phone';


@Component({
    selector:'mm-phone-detail',
    templateUrl:'./phone-detail.component.html'
})
export class PhoneDetailComponent  {
    @Input() phone: Phone;
    constructor(){}
}