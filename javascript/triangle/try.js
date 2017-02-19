// function OuterFunc() {
//   var name = 'Mozilla';
//
//   function innerFunc() {
//     alert(name);
//   }
//   return innerFunc;
// }

// var myFunc = OuterFunc();

// myFunc();

// function makeAdder(x) {
//   return function(y){
//     return x + y;
//   };
// }
//
// var add5 = makeAdder(5);
//
// console.log(add5(25));
// console.log(makeAdder(10)(50));


// ### private methods ### ///

var counter = (function(){
  var privateCounter = 0;
  var changeBy = function (value){
    privateCounter += value;
  }

  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }

  };




})();

console.log(counter.value());
counter.increment();
console.log(counter.value());
console.log(counter);
