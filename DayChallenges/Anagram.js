// ## facebook.com/PasaComputer
// /*
//  * โจทย์ Anagram ซึ่งเป็นชื่อเรียกคำที่สลับการเรียงตัวอักษรแล้วทำให้เกิดคำใหม่
//  * สร้างฟังก์ชัน isAnagram(strA, strB) เพื่อตรวจสอบคำที่รับ
//  * เข้ามาในฟังก์ชันว่าคำทั้ง 2 คำเป็น Anagram หรือไม่
//  */


function isAnagram(strA, strB) {
    // เริ่มเขียน
    const strA_arr = strA.split('').sort();
    const strB_arr = strB.split('').sort();

    // if (strA.length === strB.length) {
    //         // // ##style# try first
    //         // for (let i=0; i < strA_arr.length; i++) {
    //         //     if (strA_arr[i] !== strB_arr[i]) {
    //         //         return false;
    //         //     }
    //         // }
    //         // return true;

    //         // ##style# try second
    //         return strA_arr.toString() === strB_arr.toString();

    // } else {
    //     return false;
    // }

    // ##style# รีโค้ดรอบสาม เพื่อเก็บรูปแบบไว้ดูในภาคหน้า
    const checkAnagram = strA.length === strB.length && strA_arr.every((item,index) => item === strB_arr[index]);
    return checkAnagram;
}
  
  isAnagram('node', 'deno'); // รีเทิร์น true
  isAnagram('debit card', 'bad credit'); // รีเทิร์น true
  
  isAnagram('coding', 'coffee'); // รีเทิร์น false
  isAnagram('java', 'javascript'); // รีเทิร์น false

  console.log(isAnagram('node', 'deno'))
  console.log(isAnagram('debit card', 'bad credit'))
  console.log(isAnagram('coding', 'coffee'))
  console.log(isAnagram('java', 'javascript'))