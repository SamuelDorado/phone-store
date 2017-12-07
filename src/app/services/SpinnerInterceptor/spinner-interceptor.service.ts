import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    private _loadingStatus: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

    get loadingStatus(): Observable<boolean> {
        return this._loadingStatus.asObservable();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this._loadingStatus.next(true)

        return next.handle(req).pipe(
            map(event => {
                return event;
            }),
            catchError(error => {
                return Observable.throw(error);
            }),
            finalize(() => {
                this._loadingStatus.next(false)
            })
        );
    }
}