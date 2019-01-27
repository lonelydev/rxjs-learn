import { Observable } from "rxjs";

// this is just one of a thousand ways to create an observable
var observable: Observable<string> = Observable.create((observer:any) => {
    observer.next("Hey guys!");
});

observable.subscribe((x:any) => addItem(x));

function addItem(val:any): void {
    var node: HTMLLIElement = document.createElement("li");
    var textnode: Text = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}