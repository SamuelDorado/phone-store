import { Phone } from '../model/Phone';
import { Action } from '@ngrx/store';
export const PHONES_UPDATE = "[Phone] UpdateAll";
export const PHONES_UPDATED = "[Phone] UpdatedAll";

export class PhonesUpdateAction implements Action {
    type = PHONES_UPDATE;
}
export class PhonesUpdatedAction implements Action {
    type = PHONES_UPDATED;
    constructor(public payload: Phone[]) {}
}