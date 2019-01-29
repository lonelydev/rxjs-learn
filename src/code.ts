import { BehaviorSubject, Subscription } from "rxjs";

/***
 * Subject is an observable that is also able to emit a value
 */
var subject1: BehaviorSubject<any> = new BehaviorSubject("First");

subject1.subscribe(
    data => addItem("Observer1:" + data),
    err => addItem(err),
    () => addItem("Observer1 completed")
);

subject1.next("The first thing has been sent");
subject1.next("...Observer 2 is about to subscribe.");
/**
 * observer2 will not receive first thing as it is created 
 * after the first thing was sent.
 */
var observer2: Subscription = subject1.subscribe(
    data => addItem("Observer2:" + data)
);

subject1.next("The second thing has been sent");
subject1.next("A third thing has been sent");

observer2.unsubscribe();

subject1.next("A final thing has been sent");

function addItem(val: any): void {
    var node: HTMLLIElement = document.createElement("li");
    var textnode: Text = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}