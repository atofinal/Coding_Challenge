(() => {
  // เริ่มเขียนโค้ด
  const Second = 1000;
  const Minute = Second * 60;
  const Hour = Minute * 60;
  const Day = Hour * 24;

  function setElementInnerText(id,text){
    const element = document.getElementById(id);
    element.innerText = text;

  }

  function CountDown(){
    const now = new Date().getTime();
    const newYear = new Date('December 31, 2020 23:59:59').getTime();
    const unixYearLeft = newYear - now;

    setElementInnerText('days', Math.floor(unixYearLeft / Day));
    setElementInnerText('hours', Math.floor(unixYearLeft % Day / Hour));
    setElementInnerText('minutes', Math.floor(unixYearLeft % Hour / Minute));
    setElementInnerText('seconds', Math.floor(unixYearLeft % Minute / Second));

    console.log("unixYearLeft= " + unixYearLeft + "-" + String(unixYearLeft).length + "  ,newYear= " + newYear + "-" + String(newYear).length);

  }


  function run(){
    CountDown();
    setInterval(CountDown, Second);

  }

  run();

})();
