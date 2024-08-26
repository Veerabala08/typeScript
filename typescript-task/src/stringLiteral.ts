let click:'click' = 'click';

// let click = 'double click'; // compiler error  // 

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error

// If you use the string literal types in multiple places, they will be verbose.
// To avoid this, you can use the type aliases. For example:

type MyMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent1: MyMouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error

let anotherEvent: MyMouseEvent;

