/*********************************/
// Main Nav

function mainNav() {
    const mainNav = document.querySelector('.mainNav');
    let templateNav = `
        <div class="mainNav__logo">
        <img src="${pathAssets}/images/logo-white.svg" alt="Logo">
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

    document.querySelector('.mainNav').insertAdjacentHTML('beforeend', templateNav);

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

    /*********************************/
    //// Only for preview purposes
    //// Delete when implement Module
    /*********************************/

    const btn = document.querySelector('.changeDark');
    btn.addEventListener("click", changeNav);

    function changeNav() {
        if (!mainNav.classList.contains("navSticky")) {
            if (!mainNav.classList.contains("navDark")) {
                btn.innerText = "change to white"
                mainNav.classList.add("navDark");
                logo.src = `${pathAssets}/images/logo.svg`;
                document.querySelector(".background").style.backgroundColor = "white";

            } else {
                btn.innerText = "change to dark"
                mainNav.classList.remove("navDark");
                logo.src = `${pathAssets}/images/logo-white.svg`;
                document.querySelector(".background").style.backgroundColor = "#7F8088";
            };
        };
    };
}

mainNav();