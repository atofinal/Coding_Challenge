// ## facebook.com/JSKhamKham/

// โจทย์!!!! ประจำวันอาทิตย์
// จงเขียน Function หาจำนวนครั้ง ของตัวอักษร ที่ถูก repeat ในคำนั้นๆ
// กติกา
// 1. Input ที่ให้ไป จะอยู่ในรูปของ String (ไม่มีช่องว่าง)
// 2. Input ที่ส่งไปมีค่าทุกครั้ง ไม่จำเป็นต้องดัก "", null, undefined
// 3. Output จะอยู่ในรูปแบบของ Array ที่ประกอบไปด้วย ตัวอักษร ที่ถูก repeat และ จำนวนครั้ง


function countStr(str) {    
	let n = str.length;
	let count = 0;
    let newStr = '';
	for (let i=0; i<=n; i++) {
		let left = str.slice(0,i);
		let right = str.slice(i,i*2);       
		if (left.length !== 0 && left === right){
			count = i;
			break;
		} else {
            count = str.length;
            newStr = str;
        }    
	}
    let numDup = str.length / count;
    newStr = count < 1 ? newStr : str.slice(0,count);		
	return [newStr,numDup];
}

console.log(countStr('ababab'));		// ["ab", 3]		
console.log(countStr('abcde'));			// ["abcde", 1]	
console.log(countStr('abababab'));		// ["ab", 4]		
console.log(countStr('abcabcabc'));		// ["abc", 3]		
console.log(countStr('a'));				// ["a", 1]
console.log(countStr('aa'));			// ["a", 2]	
console.log(countStr('babababababa'));	// ["ba", 6]			
