(() => {
  // เริ่มเขียนโค้ด

  // ## 1. Lexical scope & Dynamic scope
  // function printName(){
  //   console.log(this);
  // }
  // printName();



  // ## 2. How to know what is "this"?
  // function printName(){
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  // }
  //   //// ## 2.1 Invoker object
  //   const surasak = {name:'ato',printName};
  //   const sound = {name:'song',printName};

  //   surasak.printName();
  //   sound.printName();

  //   //// ## 2.2 Global object (window, global)
  //   name = "Global name";
  //   printName();

  //   //// ## 2.3 Constructor function
  //   function Person(name){
  //     this.name = name;
  //     this.printName = printName;
  //   }

  //   const myName = new Person('Surasak');
  //   myName.printName();

  // ## 3. call(), apply(), and bind()
  function printName(nationality,city){
    console.log(this);
    console.log(`My name is ${this.name}, @ ${nationality} and living in ${city}`);
  }

  function Person(name,nationality,city){
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName(this.nationality,this.city);
    printName.call(this,this.nationality,this.city);
    printName.apply(this,[this.nationality,this.city]);

    const printSurasak = printName.bind(this);
    printSurasak(this.nationality,this.city);
  }

  const name3 = new Person('surasak','thai','bangkok');


})();
