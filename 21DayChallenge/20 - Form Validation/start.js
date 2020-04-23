(() => {
  // เริ่มเขียนโค้ด

  function displayError(elem , message){
    const smallElem = elem.parentElement.querySelector('small'); // ## query small from parentElement
    smallElem.innerText = message;
    elem.classList.add('invalid');
    form.classList.add('invalid');

  }

  function validateLength(elem,min,max){
    const val = elem.value;
    // console.log(val);

    if (val.length < min || val.length > max){
      const elemName = elem.getAttribute('name');
      displayError(elem,`${elemName} Length must be between ${min} and ${max}`);
    }
  }

  function resetState(elem){
    const smallElem = elem.parentElement.querySelector('small'); // ## query small from parentElement
    smallElem.innerText = '';
    elem.classList.remove('invalid');
    form.classList.remove('invalid');
  }

  function validateEmail(elem){
    const regex = /\S+@\S+\.\S+/;

    if (!regex.test(elem.value)){
      displayError(elem,'Email must be valid')
    }
  }

  function displaySuccess(){
    document.body.innerHTML = '';

    const pElem = document.createElement('p');
    pElem.innerHTML = "You have been Logged in successfuly!";
    pElem.classList.add('success');
    document.body.appendChild(pElem);

  }

  function validateForm (event){
    event.preventDefault(); // ## set prevent for font-end web

    const emailElem = document.getElementById('email');
    const passwordElem = document.getElementById('password');

    resetState(emailElem);
    resetState(passwordElem);

    validateLength(emailElem ,10 ,25);
    validateLength(passwordElem ,8 ,25);

    validateEmail(emailElem);

    const isValidForm = !form.classList.contains('invalid'); //## check class in small invalid?
    if (isValidForm){
      displaySuccess();
    }
  }

  function run(){
    const formElem = document.querySelector('form');
    formElem.addEventListener('submit',validateForm);
  }

  run();

})();
