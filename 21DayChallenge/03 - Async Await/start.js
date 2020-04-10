(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  // 2. Callback
  // 3. Promise

  // 4. Async/Await
function simulateAsyncApi(text ,timeout){
  return new Promise((resolve ,reject) => {
    setTimeout(() => {      
      console.log(text);
      resolve();
    },timeout);
  })
}
async function run(){
  try {
    await simulateAsyncApi('A',1000);
    await simulateAsyncApi('B',500);
    await simulateAsyncApi('C',100);
    await simulateAsyncApi('D',50);
    document.getElementById("test").textContent = "ABCD";

  } catch(error){
    console.error(error);
  }
}
run();

})();
