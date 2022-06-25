import { of, Observable, Observer } from 'rxjs';
import { StringObserver } from './observer';
import { subscribeStringGenerator } from './observable1';

export function  basic2(): void {
    
  var observer = new StringObserver("obs.app1.basic2");

  var observable: Observable<string> = of<string[]>("stream1", "stream2");

  observable.subscribe(observer);
}

export function basic3(): void {

  var observable = new Observable<string>(subscribeStringGenerator);
  //var observable : Observable<number> = Observable.create(this.subscribe);
  
  var observer = new StringObserver("obs.app1.basic3");

  observable.subscribe(observer);

}
  