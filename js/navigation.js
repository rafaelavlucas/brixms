// Main Nav 

const
    mainNav = document.querySelector('.mainNav'),
    templateNav = `
<div class="mainNav__logo">
    <img src="assets/images/logo-white.svg" alt="Logo">
</div>
<div class="mainNav__icon"><span></span></div>
<div class="mainNav__wrapper">
<div class="mainNav__links">
    <a class="mainNav__linkItem" href="">Link</a>
    <a class="mainNav__linkItem" href="">Link</a>
    <a class="mainNav__linkItem" href="">Link</a>
    <a class="mainNav__linkItem" href="">Link</a>
</div>
</div>`;

mainNav.insertAdjacentHTML('beforeend', templateNav);

const logo = document.querySelector(".mainNav__logo img");

if (mainNav.classList.contains("navDark")) {
    logo.src = "assets/images/logo.svg"
};
// Sticky Nav Bar
window.onscroll = function () {

    if (window.pageYOffset >= 72) {
        mainNav.classList.add("navSticky");
        logo.src = "assets/images/logo.svg"
    } else {
        if (mainNav.classList.contains("navDark")) {
            mainNav.classList.remove("navSticky");

        } else {
            mainNav.classList.remove("navSticky");
            logo.src = "assets/images/logo-white.svg"
        }
    };
}


// Open Menu Mobile
const iconNav = document.querySelector('.mainNav__icon');
iconNav.addEventListener('click', openNavMobile);

function openNavMobile() {
    if (mainNav.classList.contains('navOpen')) {
        mainNav.classList.remove('navOpen');
    } else {
        mainNav.classList.add('navOpen');
    }
}



// Footer
const footer = document.querySelector('.footer'),
    templateFooter = `<p>teste</p>`;

footer.insertAdjacentHTML('beforeend', templateFooter);