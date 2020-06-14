
const menuToggleBtn = document.querySelector('.sidebar-toggle');
const slideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

menuToggleBtn.addEventListener('click', function(){
    slideBar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    slideBar.classList.remove('show-sidebar');
});