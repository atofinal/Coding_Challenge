//## performance Loop
const mil = 1000000;
const arr = Array(mil);

console.time('time');

for (let i = 0; i < mil.length; i++) {} //# time: 0.055908203125ms

// for (const v of arr) {}  //# time: 48.009033203125ms

// for (v in arr) {}  //# time: 2.54296875ms

// arr.forEach(v => null)  //# time: 4.708984375ms

console.timeEnd('time')
