pathAssets = "https://rafaelavlucas.github.io/brixms/assets";

// Main Nav 
const mainNav = document.querySelector('.mainNav');

const navLinks = [{
    name: "Link 1",
    url: "#"
}, {
    name: "Link 2",
    url: "#"
}, {
    name: "Link 3",
    url: "#"
}];

let templateNav = `
<div class="mainNav__logo">
    <img src="${pathAssets}/images/logo-white.svg" alt="Logo">
</div>
<div class="mainNav__icon"><span></span></div>
<div class="mainNav__wrapper">
<div class="mainNav__links">
</div>
</div>`;

mainNav.insertAdjacentHTML('beforeend', templateNav);

navLinks.forEach(function (el) {
    let template = `
    <a class="mainNav__linkItem" href="${el.url}">${el.name}</a>`;
    document.querySelector('.mainNav__links').insertAdjacentHTML('beforeend', template);
});

const logo = document.querySelector(".mainNav__logo img");

if (mainNav.classList.contains("navDark")) {
    logo.src = `${pathAssets}/images/logo.svg`;
};
// Sticky Nav Bar
window.onscroll = function () {
    getSticky();
}

function getSticky() {
    if (window.pageYOffset >= 72) {
        mainNav.classList.add("navSticky");
        logo.src = `${pathAssets}/images/logo.svg`;
    } else {
        if (mainNav.classList.contains("navDark")) {
            mainNav.classList.remove("navSticky");

        } else {
            mainNav.classList.remove("navSticky");
            logo.src = `${pathAssets}/images/logo-white.svg`;
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
        if (window.innerWidth < 799) {
            setTimeout(() => {
                document.querySelector('.mainNav .mainNav__wrapper').style.height = "auto";
            }, 600);
        }

    } else {
        mainNav.classList.add('navOpen');
        document.querySelector('body').style.overflowY = "hidden";
        if (window.innerWidth < 799) {
            document.querySelector('.mainNav.navOpen .mainNav__wrapper').style.height = window.innerHeight + "px";
        }

    }
}


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