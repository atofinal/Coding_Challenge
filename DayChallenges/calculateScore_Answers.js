// /* //## facebook.com/PasaComputer
//  * โจทย์ PasaComputer Challenge #6
//  * - คำนวณคะแนนที่นักเรียนจะได้รับหลังจากทำโจทย์วิชาต่างๆ
//  * - รีเทิร์นเป็นตัวเลขคะแนนที่นักเรียนตอบถูก (1 ข้อ = 1 คะแนน)
//  */

const courses = [{ 
    name: 'English', 
    exercises: [{
         question: 'What ____ you do yesterday?',
      choices: [{
        name: 'do'
      }, {
        name: 'did',
        correct: true
      }]
    }, {
         question: 'Have you ever ____ to Bangkok?',
      choices: [{
        name: 'been',
        correct: true
      }, {
        name: 'went'
      }]  
    }] 
  }];
  
  function calculateScore(studentAnswers) {
    // เริ่มเขียน 
    let trueChoice = [];  
    let point = 0; 
    let [choice] = courses;  
    trueChoice = choice.exercises.map(x => x.choices
             .filter(i => i.name && i.correct)
             .map(c => c.name)).flat();
    // console.log(trueChoice);
    
    // //## style_01
    // for (let x of choice.exercises) {
    //   let [test] = x.choices.filter(i => i.name && i.correct);
    //   trueChoice.push(test.name);    
    // }
    // console.log(trueChoice);
    
    const [{course,answers}] = studentAnswers;  
    // console.log(course,answers);
    point = answers.reduce((a,b,i) => {
        if (b === trueChoice[i]) (a++);
        return a;
      },0)  
      return point;
}

let ans01 = calculateScore([{ course: 'English', answers: ["do", "been"] }]); // รีเทิร์น 1
let ans02 = calculateScore([{ course: 'English', answers: ["did", "been"] }]); // รีเทิร์น 2

console.log(`Score = ${ans01}`);
console.log(`Score = ${ans02}`);