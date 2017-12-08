import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class PhonesService {
    constructor(private http: HttpClient){}
    getPhoneList(){
        return this.http.get(`http://localhost:3000/phones`)
    }
}