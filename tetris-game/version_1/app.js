const gameArea = document.querySelector('.boxs');
const gameAreaMini = document.querySelector('.mini-boxs');

const scoreDisplay = document.querySelector('#score');
const startBtn = document.querySelector('#start-btn');
const width = 10; //# row === 10 box, width 10 for next row when moveDown
let nextRandom = 0;
let timerId = null;
let score = 0;
let isGameOver = false;

 //# The Tetrominoes
 const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
    ];
    
    const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
    ];
    
    const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
    ];
    
    const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
    ];
    
    const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
    ];
    
const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];
const colors = ['orange','red','yellow','greenyellow','blue'];

function createDiv(n){
    for (let i=0; i < n; i++){
        let newDiv = document.createElement('div');
        gameArea.appendChild(newDiv);
        if (i > (n-16)) {
            gameAreaMini.appendChild(newDiv);
        }        
    }
    for (let i=0; i < 10; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('taken');
        newDiv.classList.add('bar-footer');
        gameArea.appendChild(newDiv);
    }
    n = Array.from(document.querySelectorAll('.boxs div'));
    return n;
}

// document.addEventListener('DOMContentLoaded', createDiv);
let squares = createDiv(204); //# set boxs page hight
const getNumBoxs = squares.length;

let currentPosition = 4;
let currentRotate = 0;

let random = Math.floor(Math.random() * theTetrominoes.length);
let current = theTetrominoes[random][currentRotate]; //# the item
// console.log(current);

//# draw the Tetis
function draw() {
    current.forEach(i => {
        squares[currentPosition + i].classList.add('tetromino');
        squares[currentPosition + i].style.backgroundColor = colors[random];
    });   
}
// console.log(squares.length);
// draw();
function undraw(){
    current.forEach(i => {
        squares[currentPosition + i].classList.remove('tetromino');
        squares[currentPosition + i].style.backgroundColor = '';
    });
}

//# assign keyCodes to play
function control(e){
    if (isGameOver === false){
        if (e.keyCode === 37 || e.keyCode === 65){
            moveLeft();
        }
        if (e.keyCode === 38 || e.keyCode === 87){
            rotate();
        }
        if (e.keyCode === 39 || e.keyCode === 68){
            moveRight();
        }
        if (e.keyCode === 40 || e.keyCode === 83){
            moveDown();
        }
    }    
}
document.addEventListener('keydown',control);

function moveDown(){
    undraw();
    currentPosition += width;
    draw();
    freeze();
}

function freeze(){
    if (current.some(i => squares[currentPosition + i + width].classList.contains('taken'))){
        current.forEach(i => squares[currentPosition + i].classList.add('taken'));        

        //# start a new tetromino falling
        random = nextRandom;
        nextRandom = Math.floor(Math.random() * theTetrominoes.length);
        current = theTetrominoes[random][currentRotate];
        currentPosition = 4;
        draw();
        displayShape();
        addScore();
        gameOver();
    }
}

function moveLeft(){
    undraw();
    const isLeftEdge = current.some(i => (currentPosition + i) % width === 0);
    if (!isLeftEdge) currentPosition -= 1;

    if (current.some(i => squares[currentPosition + i].classList.contains('taken'))){
        currentPosition += 1;
    }
    draw();
}

function moveRight(){
    undraw();
    const isRightEdge = current.some(i => (currentPosition + i) % width === width - 1);
    if (!isRightEdge) currentPosition += 1;

    if (current.some(i => squares[currentPosition + i].classList.contains('taken'))){
        currentPosition -= 1;
    }
    draw();
}

//# FIX ROTATION OF TETROMINOS A THE EDGE, is near the left|right side.
function fixAtLeft(){
    return current.some(i => (currentPosition + i) % width === 0);
}
function fixAtRight(){
    return current.some(i => (currentPosition + i + 1) % width === 0);
}
function checkRotatedPosition(position){
    position = position || currentPosition;
    if ((position+1) % width < 4){
        if (fixAtRight()){
            currentPosition += 1;
            checkRotatedPosition(position);
        }
    } else { //# (position % width > 5)
        if (fixAtLeft()){
            currentPosition -= 1;
            checkRotatedPosition(position);
        }
    }
}

function rotate(){
    undraw();
    currentRotate++ ;
    if (currentRotate === current.length){
        currentRotate = 0;
    }

    current = theTetrominoes[random][currentRotate];
    checkRotatedPosition();
    draw();
}

//# show up, next tetromino in mini-grid display
const nextSquares = document.querySelectorAll('.mini-boxs div');
const displayWidth = 4; //# mini row === 4,
const displayIndex = 0;

//# the Tetrominos without rotations
const upNextTetrominoes = [
    [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
    [1, displayWidth+1, displayWidth+2, displayWidth*2+2], //zTetromino
    [displayWidth+1, displayWidth*2, displayWidth*2+1, displayWidth*2+2], //tTetromino
    [displayWidth+1, displayWidth+2, displayWidth*2+1, displayWidth*2+2], //oTetromino
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
    ];

function displayShape(){
    nextSquares.forEach(square => {
        square.classList.remove('tetromino');
        square.style.backgroundColor = '';
    });
    upNextTetrominoes[nextRandom].forEach(i => {
        nextSquares[displayIndex + i].classList.add('tetromino');
        nextSquares[displayIndex + i].style.backgroundColor = colors[nextRandom];
    });
}

startBtn.addEventListener('click', ()=> {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    } else {
        draw();
        timerId = setInterval(moveDown, 500);
        nextRandom = Math.floor(Math.random() * theTetrominoes.length);
        displayShape();
    }
});

//# Score
let base = 10;
let bonus = 15;
// console.log(getNumBoxs);
function addScore(){
    if (isGameOver === false) {        
        score += base;
        scoreDisplay.innerHTML = score; 
    }
}

//# game over
function gameOver(){
    let getTakenBonus = document.querySelectorAll('.taken');
    getTakenBonus = getTakenBonus.length - 10;
    console.log(`Bonus = ${getTakenBonus}`);
    score = score + (getTakenBonus * bonus);

    if (current.some(i => squares[currentPosition + i].classList.contains('taken'))){
        scoreDisplay.innerHTML = `${score} gameOver ☺`;
        clearInterval(timerId);
        isGameOver = true;
    }
}