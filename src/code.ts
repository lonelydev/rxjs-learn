import { Observable } from "rxjs";

// this is just one of a thousand ways to create an observable
var observable = Observable.create((observer:any) => {
    observer.next("Hey guys!");
});
