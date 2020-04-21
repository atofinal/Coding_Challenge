(() => {
  // เริ่มเขียนโค้ด

  // ##  1. Class vs Prototype 
  class Person {

  }
  const surasak = new Person();
  console.log(surasak);


  // ##  2. What's prototype?
  const name = "Surasak";  
  console.log(name.__proto__); // ## show method in proto
  console.log(name);

  const arr = [];
  console.log(arr.__proto__);


  // ##  3. Prototype chain
  const name03 = "ato";
  console.log(name03.__proto__);

  console.log(name03.toLocaleString());


  // ##  4. Extend a prototype
  const name04 = "GOoD";
  function sayHello(val){
    console.log(`Hello ${val}`);
  }
  String.prototype.sayHello = sayHello;
  console.log(name04.__proto__);
  name04.sayHello('Earth');

})();
