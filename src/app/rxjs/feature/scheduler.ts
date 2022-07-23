import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

export function fct1() {

    var observable = 
        new Observable (
            function subscribe(subscriber) {
                subscriber.next("My First Observable");
                subscriber.next("Testing Observable");
                subscriber.complete();
            }
        )
        .pipe(
            observeOn(asyncScheduler)
        )
    ;
        
    console.log("Observable Created");
    
    observable.subscribe(
        x => console.log(x),
        e => console.log(e),
        () => console.log("Observable is complete")
    );

    console.log('Observable Subscribed');
}