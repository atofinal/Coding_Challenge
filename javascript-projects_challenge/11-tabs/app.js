const btnContainer = document.querySelector('.btn-container');
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

btnContainer.addEventListener('click', function(e){
    const dataId = e.target.dataset.id;
    // console.log(id);
    
    if (dataId){
        //# remove class active all buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
        });
        //# button active
        e.target.classList.add('active');  

        //# remove class active all content
        contents.forEach(function(content){
            content.classList.remove('active');
        });
        //# content active
        const element = document.getElementById(dataId);
        element.classList.add('active');
    }
    
});