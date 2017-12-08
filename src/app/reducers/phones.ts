import { ActionReducer, Action } from '@ngrx/store';
import * as phones from '../actions/phones';

export function reducer(state = [], action: phones.PhonesUpdatedAction) {
    switch (action.type) {
        case phones.PHONES_UPDATED:
            return action.payload;
        default:
            return state;
    }
}