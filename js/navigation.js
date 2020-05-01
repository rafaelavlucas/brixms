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
    getSticky();

}

function getSticky() {
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

getSticky();

// Open Menu Mobile
const iconNav = document.querySelector('.mainNav__icon');
iconNav.addEventListener('click', openNavMobile);

function openNavMobile() {
    if (mainNav.classList.contains('navOpen')) {
        mainNav.classList.remove('navOpen');
        document.querySelector('body').style.overflowY = "initial";
    } else {
        mainNav.classList.add('navOpen');
        document.querySelector('body').style.overflowY = "hidden";

    }
}

document.querySelector('.mainNav__wrapper').style.height = window.innerHeight + "px";


// Footer
const footer = document.querySelector('.footer'),
    templateFooter = `
    <p class="footer__text">teste</p>
    <div class="footer__links">
    <a href="" class="footer__link hiperlink">Link</a>
    <a href="" class="footer__link hiperlink">Link</a>
    </div>
    `;

footer.insertAdjacentHTML('beforeend', templateFooter);