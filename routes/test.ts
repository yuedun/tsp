import * as EventEmitter from 'events';

let emitter = new EventEmitter();

emitter.on('myEvent', function sth () {
  emitter.on('myEvent', sth);
  console.log('hi');
  
});

emitter.emit('myEvent');

function inArray(arr:number[],element:number){
  for (var i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return true;
        }
    }
    return false;
}

console.log(">>>>",inArray.call(Array, [1,2,3,4], 6))
