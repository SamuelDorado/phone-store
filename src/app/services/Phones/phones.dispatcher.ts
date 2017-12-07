import { Injectable } from '@angular/core';
import { PhoneStoreEvent } from "./types/PhoneStoreEvents";
import Dispatcher from '../types/Dispatcher';
@Injectable()
export class PhonesDispatcher extends Dispatcher<PhoneStoreEvent> {
}