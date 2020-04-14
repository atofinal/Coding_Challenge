(() => {
  // เริ่มเขียนโค้ด
  let draggingElem;

  function onDragStart(){
    draggingElem = this;
    // console.log(this);
  }

  function onDrop(){
    // console.log('Drop');
    this.append(draggingElem);
    draggingElem = null;
  }
  function onDragOver(){
    event.preventDefault();
  }
  function onDragEnter(){
    event.preventDefault();
  }

  function run(){
    const taskElem = Array.from(document.querySelectorAll('.task'));
    const dropZoneElem = Array.from(document.querySelectorAll('.drop-zone'));
    // console.log(taskElem);
    // console.log(dropZoneElem);

    taskElem.forEach((taskElem) => {
      taskElem.addEventListener('dragstart',onDragStart);
    });

    dropZoneElem.forEach((dropZoneElem) => {
      dropZoneElem.addEventListener('drop',onDrop); //## need 2event dragOver and dragEnter to wrok!!

      dropZoneElem.addEventListener('dragover',onDragOver);
      dropZoneElem.addEventListener('dragenter',onDragEnter);
    });

  }
  run();

})();
