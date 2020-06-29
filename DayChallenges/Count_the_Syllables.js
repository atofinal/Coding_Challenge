// Count the Syllables ## https://edabit.com/challenge/

// Test.assertEquals(countSyllables("Hehehehehehe"), 6)
// Test.assertEquals(countSyllables("bobobobobobobobo"), 8)
// Test.assertEquals(countSyllables("NANANANA"), 4)
// Test.assertEquals(countSyllables("lelelele"), 4)
// Test.assertEquals(countSyllables("momomomomomomomomo"), 9)
// Test.assertEquals(countSyllables("WiWiWiWiWiWiWiWiWiWi"), 10)
// Test.assertEquals(countSyllables("RURURURURURUrurururuRURU"), 12)
// Test.assertEquals(countSyllables("go"), 1)
// Test.assertEquals(countSyllables("dede"), 2)
// console.log(countSyllables("hellohellohellohellohello")); // 5
// console.log(countSyllables("worldworldworldworldworldworldworldworldworld")); // 9

function countSyllables(str) {
	str = str.toLowerCase();
	let n = str.length;
	let x = Math.floor(n/2);
	let count = 0;	
	for (let i=0; i<=x; i++) { //##style02-----> (let i=x; i>0; i--) 
		let left = str.slice(0,i);
		let right = str.slice(i,i*2);
		if ( (n % i === 0) && ( left === right ) ){
			count = i;
			i = x;	//##style02-----> i = 0; 
		}
		// console.log(n,x,i,left,right);
	}	
	return count === 0 ? (n > 1)? 1:0 : str.length / count;
}

console.log(countSyllables("Hehehehehehe"));
console.log(countSyllables("bobobobobobobobo"));
console.log(countSyllables("NANANANA"));
console.log(countSyllables("lelelele"));
console.log(countSyllables("momomomomomomomomo"));
console.log(countSyllables("WiWiWiWiWiWiWiWiWiWi"));
console.log(countSyllables("RURURURURURUrurururuRURU"));
console.log(countSyllables("go"));
console.log(countSyllables("dede"));
console.log(countSyllables("hellohellohellohellohello"));
console.log(countSyllables("worldworldworldworldworldworldworldworldworld"));
