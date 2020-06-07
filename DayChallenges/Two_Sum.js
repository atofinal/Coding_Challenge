// ## facebook.com/PasaComputer
/*
 * โจทย์ Two Sum
 * - ฟังก์ชันรับค่าอาเรย์ numbers และตัวเลข value 
 * - หาตัวเลข 2 ตัวที่บวกกันแล้วมีค่าเท่ากับ value ที่รับเข้ามา 
 * - ถ้าพบให้รีเทิร์น index ของตัวเลขทั้ง 2 ตัวนั้นออกมา แต่ถ้าไม่พบให้รีเทิร์น -1
 */

function twoSum(numbers, value) {
    // เริ่มเขียน
    for (let i = 0; i < numbers.length; i++) {
      for (let x = i+1; x < numbers.length; x++) {
        if (numbers[i] + numbers[x] === value) {             
          return [i,x];
        }
      }
    }
    return -1;  
  }
  
  // twoSum([1, 0, 5, 2], 6) // รีเทิร์น [0, 2] เพราะว่า 1 + 5 ได้ 6
  // twoSum([5, -3, 7, 10], 4) // รีเทิร์น [1, 2] เพราะว่า -3 + 7 ได้ 4
  // twoSum([1, 3, 2], 6) // รีเทิร์น -1 เพราะว่าไม่มีเลขใดบวกกันได้ 6
  
  console.log(twoSum([1, 0, 5, 2], 6));
  console.log(twoSum([5, -3, 7, 10], 4));
  console.log(twoSum([1, 3, 2], 6));