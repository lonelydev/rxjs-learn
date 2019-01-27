import { Observable, Subscription } from "rxjs";

// this is just one of a thousand ways to create an observable
var observable: Observable<string> = Observable.create((observer: any) => {
    try {
        observer.next("Hey guys!");
        observer.next("How are you?");
        setInterval(() => {
            observer.next("I'm good!");
        }, 2000);
    } catch (err) {
        observer.error(err);
    }
});

var subscription1: Subscription = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem("completed")
);

var subscription2: Subscription = observable.subscribe(
    (x: any) => addItem(x)
);

setTimeout(()=> {
    subscription1.unsubscribe();
}, 6001);

function addItem(val: any): void {
    var node: HTMLLIElement = document.createElement("li");
    var textnode: Text = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}