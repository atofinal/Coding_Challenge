(() => {
  // เริ่มเขียนโค้ด

  // ### 1. NaN
  if (NaN * 1 === NaN) {
    console.log('Equal');
  } else {
    console.log('NaN === NaN , Not Equal');
  }

  const result = 1 / 'hello';
  if (Number.isNaN(result)) {
    console.log (' result = 1 / "hello" , Equal to NaN');
  }


  // ### 2. Type Coercion
  if (1 < 2 < 3){console.log('Inside, true > 1 = true');}
  if (3 > 2 > 1){
    console.log('Inside');
  } else {
    console.log(' 3 > 2 = true, true > 1 = false ');
  }

  console.log(2 - '1');
  console.log(2 + '1');
  console.log(2 + Number.parseInt('1',10));


  // ### 3. Interpreter & Compiler
  function getPerson(){
    return {
      name: 'surasak'
    };
  }
  console.log(getPerson());


  // ### 4. Checking Object Type
  const person = {};
  if (typeof person === 'object' && person !== null){
    console.log('Yes, object');
  }



})();
