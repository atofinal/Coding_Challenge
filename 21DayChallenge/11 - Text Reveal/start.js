(() => {
  // เริ่มเขียนโค้ด

  function onScroll(){
    const sectionElems = Array.from(document.querySelectorAll('section'));

    sectionElems.forEach((sectionElem) => {
      const imgElem = sectionElem.querySelector('img');
      const textElem = sectionElem.querySelector('.text');

      const scrollPostition = window.pageYOffset;
      // console.log(scrollPostition);
      const revealPostion = imgElem.offsetTop + (imgElem.offsetHeight / 10);

      if(scrollPostition >= revealPostion){
        textElem.classList.add('reveal');
      }

    });

  }

  function run(){
    document.addEventListener('scroll',onScroll);
  }
  run();

})();
