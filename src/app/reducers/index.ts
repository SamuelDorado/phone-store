import { Phone } from "../model/Phone";
import * as fromPhones from './phones';

export interface State {
    phoneList: Phone[];
}


export const reducers = {
    phones: fromPhones.reducer
};

export const getPhoneList = (state: State) => state.phoneList;