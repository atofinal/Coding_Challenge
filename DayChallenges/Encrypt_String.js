// ## facebook.com/JSKhamKham/
// Encrypt this!
//  กติกา
// 1. input เป็น string [a-zA-Z] แต่ละคำถูกแบ่งออกโดยช่องว่าง
// 2. ตัวอักษรแรกของคำนั้นๆ ให้เป็นตัว พิมพ์ใหญ่เสมอ
// 3. ตัวอักษรที่สองของคำนั้นๆ ให้สลับตำแหน่งกับตัวสุดท้ายของคำ
// ตัวอย่าง
// encryptThis("Hello") === "Holle"
// encryptThis("good") === "Gdoo"
// encryptThis("hello world") === "Holle Wdrlo"


function encryptThis(str) {
    const arrStr = str.split(' ');
    let newStr = [];
    for (let i=0; i<arrStr.length; i++) {
      let upperStr = arrStr[i].replace(/^\w/i,arrStr[i].substr(0,1).toUpperCase());
      let [str2, strLast] = [upperStr.substr(1,1), upperStr.substr(-1,1)];
      let convertSec = upperStr.replace(upperStr.substr(-1,1), str2);
      let convertLast = convertSec.replace(convertSec.substr(1,1), strLast);
      newStr.push(convertLast);
    }  
    return newStr.join(' ');
  }
  
  console.log(encryptThis("Hello")); //=== "Holle"
  console.log(encryptThis("good")); //=== "Gdoo"
  console.log(encryptThis("hello world")); //=== "Holle Wdrlo"