import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class PhonesService {
    constructor(private http: HttpClient){}
    getPhoneList():Observable<any>{
        return this.http.get(`http://localhost:3000/phones`)
    }
}