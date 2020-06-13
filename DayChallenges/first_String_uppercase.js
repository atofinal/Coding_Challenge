// /* ## facebook.com/PasaComputer
//  * โจทย์ 
//  * เขียนฟังก์ชันที่รับข้อความ str เข้ามา และแปลงค่าข้อความ
//  * ให้แต่ละคำนั้นมีตัวอักษรแรกขึ้นต้นด้วยตัวใหญ่ และตัวอักษรอื่นๆ 
//  * จะต้องเป็นตัวเล็ก จากนั้นรีเทิร์นข้อความที่แปลงออกมา
//  */


function capitalize(str) {
    // เริ่มเขียน

    // /** # ---------  style 01 */
    const convertStr =  str.split(' ').map(i => i.toLowerCase().replace(/^\w/i, v => v.toUpperCase()));
    return convertStr.join(' ');


    // /** # ---------  style 02 */
    // const arrStr = str.split(' ');
    // const strLower = arrStr.map(i => i.toLowerCase());    
    // const strUpper = strLower.map(item => item.replace(/\w/i, v => v.toUpperCase()));
    // return strUpper.join(' ');
  }
  
//   capitalize('๋JavaScript is AWESOME!'); // รีเทิร์น Javascript Is Awesome!
//   capitalize('learn programming'); // รีเทิร์น Learn Programming

  console.log(capitalize('๋JavaScript is AWESOME!')); // หน้าคำจาวามีสละ  ๋ ภาษาไทยซ่อนอยู่ 
  console.log(capitalize('learn programming'));