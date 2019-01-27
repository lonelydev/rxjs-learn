import { Observable, Subscription } from "rxjs";
import { share } from "rxjs/operators";
// this is just one of a thousand ways to create an observable
var observable: Observable<any> = Observable.create((observer: any) => {
    try {
        let i: number = 1;
        observer.next("Hey guys!");
        observer.next("How are you?");
        setInterval(() => {
            observer.next("I'm good!" + i++);
        }, 2000);
    } catch (err) {
        observer.error(err);
    }
});//.pipe(share());

var subscription1: Subscription = observable.subscribe(
    (x: any) => addItem("Subscriber 1:" + x),
    (error: any) => addItem(error),
    () => addItem("completed")
);

setTimeout(() => {
    var subscription2: Subscription = observable.subscribe(
        (x: any) => {
            addItem("Subscriber 2:" + x);
        }
    );
}, 2000);

function addItem(val: any): void {
    var node: HTMLLIElement = document.createElement("li");
    var textnode: Text = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}