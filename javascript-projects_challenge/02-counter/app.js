let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const marginL = document.querySelector('.mLeft');

btns.forEach(function (btnClass) {

    btnClass.addEventListener('click', function(e){
        const btnCureent = e.currentTarget.classList;
        if (btnCureent.contains('decrease')) { 
            count--;
        } else if (btnCureent.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

        if (count > 0) {
            value.style.color = 'green';
            marginL.style['margin-left'] = `${count}rem`;
        } else if (count < 0) {
            value.style.color = 'red';
            marginL.style['margin-left'] = `${count}rem`;
        } else {
            value.style.color = 'black';
            marginL.style['margin-left'] = `0px`;
        }

    });
    
});