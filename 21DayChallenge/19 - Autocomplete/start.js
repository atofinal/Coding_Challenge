(() => {
  // เริ่มเขียนโค้ด
  const carBrands = [
    'Aston Martin',
    'Audi',
    'BMW',
    'Cadillac',
    'Chevrolet',
    'Datsun',
    'Ferrari',
    'Ford',
    'Toyota',
    'Hondar',
    'Maserati'
  ];

  const searchElem = document.querySelector('.search');

  function clearResult(){
    const ulElemRemove = document.querySelector('.results')
    if (ulElemRemove){
      document.body.removeChild(ulElemRemove);
    }
  }

  function selectCarBrand(event){
    searchElem.value = event.target.innerText;
    clearResult();
  }

  function onInput(event){   
    clearResult(); 
    const inputText = event.target.value.toLowerCase();    

    const matchedCarBrand = carBrands.filter(carBrand => carBrand.toLowerCase().startsWith(inputText));
    // console.log(matchedCarBrand);

    const ulElem = document.createElement('ul');    
    ulElem.classList.add('results');    

    matchedCarBrand.forEach(carBrand => {
      const liElem = document.createElement('li');
      liElem.innerText = carBrand;

      liElem.onclick = selectCarBrand;
      
      ulElem.appendChild(liElem);
    });
    // console.log(ulElem);
    document.body.appendChild(ulElem);

  }

  function run(){
    searchElem.addEventListener('input', onInput);
    document.addEventListener('click',clearResult);

  }
  run();

})();
