// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

const dateId = document.getElementById('date');
dateId.innerHTML = new Date().getFullYear(); // show year on footer

const menuNavToggle = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

menuNavToggle.addEventListener('click', function(){
    const linksHeight = links.getBoundingClientRect().height; //#!** getBoundingClientRect() use in Local only
    // console.log(linksHeight);    
    const displayMenuHeight = linksContainer.getBoundingClientRect().height;
    if (displayMenuHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0; //# hide Menu link
    }
    // console.log(linksContainer.getBoundingClientRect());
});

const navbar = document.getElementById('nav');
const btnTopLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    // console.log(scrollHeight);
    if (scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        btnTopLink.classList.add('show-link');
    } else {
        btnTopLink.classList.remove('show-link');
    }
    // console.log(navHeight);
});

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // # navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1); //# cut '#'        
        const element = document.getElementById(id);
        // console.log(id);
        // console.log(element);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        // console.log(fixedNav);
        if (!fixedNav) {
            position = position - navHeight;
        }
        const heightNavHeader = (navHeight > containerHeight)? navHeight - containerHeight : navHeight;
        // console.log(heightNavHeader);
        if (navHeight > heightNavHeader) {
            position = position + containerHeight;            
        }
        // console.log(position);
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0; //# hide Menu link

    });

});