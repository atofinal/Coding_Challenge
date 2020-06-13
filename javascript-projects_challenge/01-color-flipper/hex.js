const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const gradients = ['linear-gradient', 'radial-gradient'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color-hex');
const h2PageHex = document.querySelector('.top-menu');

btn.addEventListener('click', function(){    
    let numColor1 = '#';    
    let numColor2 = `#${hex[getRandNum()]}${hex[getRandNum()]}${hex[getRandNum()]}${hex[getRandNum()]}${hex[getRandNum()]}${hex[getRandNum()]}`;
    let randGradient = gradients[randomNumGradient()];
    let childGradient = '';
    let colorRand = '';

    for (let i=0; i<6; i++) {
        numColor1 += hex[getRandNum()];              
    }
    
    if (randGradient === 'linear-gradient') {
        childGradient = `${randomNumDeg()}deg`;
    } else {
        childGradient = 'circle';
    }
    
    colorRand = `${randGradient}(${childGradient},${numColor1}, ${numColor2})`;
    // console.log(colorRand);
    color.textContent = colorRand;
    document.body.style.background = colorRand;
    h2PageHex.style.color = numColor2;    
});

function getRandNum(){
    return Math.floor(Math.random() * hex.length);
}

function randomNumGradient() {
    return Math.floor(Math.random() * 2);
}

function randomNumDeg() {
    return Math.floor(Math.random() * 360);
}

