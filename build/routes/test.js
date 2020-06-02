"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
let emitter = new events_1.EventEmitter();
emitter.on('myEvent', function sth() {
    emitter.on('myEvent', sth);
    console.log('hi');
});
emitter.emit('myEvent');
function inArray(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return true;
        }
    }
    return false;
}
console.log(">>>>", inArray.call(Array, [1, 2, 3, 4], 6));
//# sourceMappingURL=test.js.map