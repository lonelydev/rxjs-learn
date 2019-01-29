import { AsyncSubject, Subscription } from "rxjs";

/***
 * Subject is an observable that is also able to emit a value
 * Replay maximum 30 events in 200 milliseconds
 */
var subject1: AsyncSubject<any> = new AsyncSubject();

subject1.subscribe(
    data => addItem("1:" + data),
    err => addItem(err),
    () => addItem("1 completed")
);

let seed: number = 1;
var intNumber: number = setInterval(() => subject1.next(seed++), 100);

setTimeout(() => {
    var observer2: Subscription = subject1.subscribe(
        data => addItem("2:" + data)
    );
    subject1.complete();
}, 600);

function addItem(val: any): void {
    var node: HTMLLIElement = document.createElement("li");
    var textnode: Text = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}