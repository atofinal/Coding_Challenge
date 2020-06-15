//using selectors inside the element
// traversing the dom

const tagArticles = document.querySelectorAll('.question');

tagArticles.forEach(function(content){
    const btn = content.querySelector('.question-btn');

    btn.addEventListener('click', function(){

        tagArticles.forEach(function(item){
            if (item !== content) {
                item.classList.remove('show-text');
            }
        });

        content.classList.toggle('show-text');
    });

});