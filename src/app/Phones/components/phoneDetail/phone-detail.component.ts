import { Component, Input } from '@angular/core';

import { Phone } from '../../../services/Phones/types/Phone';
@Component({
    selector:'mm-phone-detail',
    templateUrl:'./phone-detail.component.html'
})
export class PhoneDetailComponent  {
    @Input() phone: Phone;
    constructor(){}
}