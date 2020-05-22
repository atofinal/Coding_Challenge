// /* ## facebook.com/PasaComputer
//  * โจทย์ Palindrome ซึ่งเป็นชื่อเรียกตัวอักษรที่อ่านเหมือนกัน ทั้งจากหน้ามาหลัง และหลังมาหน้า
//  * - สร้างฟังก์ชัน isPalindrome(str) เพื่อใช้ตรวจสอบตัวอักษรว่าเป็น Palindrome หรือไม่
//  * - ⚠️ ตัวอักษรเล็กและใหญ่ ถือว่าเป็นตัวอักษรเดียวกัน
//  */

function isPalindrome(str) {
    // เริ่มเขียน
    const strLower = str.toLowerCase();
    const strReverse = str.split('').reverse().join('').toLowerCase();
    // return strLower === strReverse ? true : false ;
    return !!(strLower === strReverse);
}
  
isPalindrome('civic'); // รีเทิร์น true
isPalindrome('Level'); // รีเทิร์น true

isPalindrome('travel'); // รีเทิร์น false
isPalindrome('node'); // รีเทิร์น false


// let log = console.log;
// log(isPalindrome('civic')); // รีเทิร์น true
// log(isPalindrome('Level')); // รีเทิร์น true

// log(isPalindrome('travel')); // รีเทิร์น false
// log(isPalindrome('node')); // รีเทิร์น false