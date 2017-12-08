import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

import * as phones from '../actions/phones';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { PhonesService } from '../services/phones.service';
import { Phone } from '../model/Phone';
import { PhonesUpdatedAction } from '../actions/phones';

@Injectable()
export class PhoneEffects {
    @Effect()
    update$: Observable<Action> = this.actions
        .ofType(phones.PHONES_UPDATE)
        .switchMap(() =>
            this.phonesService
            .getPhoneList()
            .map((data: Phone[]) => new PhonesUpdatedAction(data))
        );

    constructor(
        private phonesService: PhonesService,
        private actions: Actions
    ) {}
}