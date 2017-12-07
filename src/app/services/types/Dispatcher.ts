import {Subject} from 'rxjs'
export default class Dispatcher<T> extends Subject<T> {
    dispatch(event: T){
        this.next(event)
    }
}