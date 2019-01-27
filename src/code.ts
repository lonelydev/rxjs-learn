import { Observable } from "rxjs";

// this is just one of a thousand ways to create an observable
var observable = Observable.create((observer:any) => {
    observer.next("Hey guys!");
});

observable.subscribe((x:any) => addItem(x));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}