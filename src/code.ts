import { Observable } from "rxjs";

// this is just one of a thousand ways to create an observable
var observable: Observable<string> = Observable.create((observer: any) => {
    try {
        observer.next("Hey guys!");
        observer.next("How are you?");
        observer.complete();
        observer.next("This will never be sent.");
    } catch (err) {
        observer.error(err);
    }
});

observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem("completed")
);

function addItem(val: any): void {
    var node: HTMLLIElement = document.createElement("li");
    var textnode: Text = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}