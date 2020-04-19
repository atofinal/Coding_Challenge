(() => {
  // เริ่มเขียนโค้ด
  let utterance = new SpeechSynthesisUtterance('ภาษาไทย')
  utterance.lang = 'th-TH'
  speechSynthesis.speak(utterance)  

  const getVoices = () => {
    return new Promise(resolve => {
      let voices = speechSynthesis.getVoices()
      if (voices.length) {
        resolve(voices)
        return
      }
      speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices()
        resolve(voices)
      }
    })
  }  

  
  const printVoicesList = async () => {
    ;(await getVoices()).forEach(voice => {
      console.log(voice.name, voice.lang)
    })
  }
  
  printVoicesList()


  const message = new SpeechSynthesisUtterance();

  function onVoiceschanged(){
    const voices = speechSynthesis.getVoices();
    // console.log(voices);
    const thVoice = voices.find(voice => voice.lang === 'th-TH');
    message.voice = thVoice;

  }  

  function onClick(event){
    // console.log(event.target);
    message.text = event.target.getAttribute('alt');
    speechSynthesis.speak(message);

  }

  function run(){
    speechSynthesis.addEventListener('voiceschanged',onVoiceschanged);

    const imgElems = Array.from(document.querySelectorAll('img'));

    imgElems.forEach(imgElem => imgElem.addEventListener('click',onClick));

  }

  run();

  


})();
