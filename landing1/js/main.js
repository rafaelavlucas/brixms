const pathAssets = "https://rafaelavlucas.github.io/brixms/assets";

window.addEventListener("load", event => {
    // Anime Modules
    let delay = 1;
    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animeModules');
                //entry.target.style.transitionDelay = `${delay}` * 0.2 + "s";
                //delay++;
            }
        });
    });

    function animeModules() {
        document.querySelectorAll('section').forEach(el => observer.observe(el))
        document.querySelectorAll('header').forEach(el => observer.observe(el))
    }

    animeModules();
});


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
}

mainNav();

/*********************************/
// Footer


function footer() {

    const footer = {
        name: "Brand Name",
        text: "All Rights Reserved",
        link1: "Privacy Policy",
        link1url: "#",
        link2: "Cookie Policy",
        link2url: "#"
    };

    const day = new Date(),
        year = day.getFullYear();

    let templateFooter = `
        <p class="footer__text">${year} © ${footer.name} —  ${footer.text}</p>
        <div class="footer__links">
            <a href="${footer.link1url}" class="footer__link hiperlink">${footer.link1}</a>
            <a href="${footer.link2url}" class="footer__link hiperlink">${footer.link2}</a>
        </div>`;

    document.querySelector('.footer').insertAdjacentHTML('beforeend', templateFooter);
};

footer();

/*********************************/
// Slider Heading

function heroSlider() {

    const heroSliderItems = [{
            img: "images/img09.jpg",
            alt: "teste",
        },
        {
            img: "images/img11.jpg",
            alt: "teste",
        },
        {
            img: "images/img10.jpg",
            alt: "teste",
        },

    ];

    const heading = {
        title: "Slider Heading",
        subtitle: "subtitle or description"
    };

    let templateheroSlider = `
        
            <div class="heroSlider__wrapper">
            <div class="heroSlider__text">
                <h2 class="heroSlider__title anime">${heading.title}</h2>
                <h3 class="heroSlider__subtitle anime">${heading.subtitle}</h3>
                <div class="heroSlider__arrows anime">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div class="heroSlider__slider swiper-container">
                <div class="swiper-wrapper"></div>
                <div class="swiper-pagination"></div>
            </div>
            </div>`;
    document.querySelector(".heroSlider").insertAdjacentHTML("beforeend", templateheroSlider);


    heroSliderItems.forEach(function (el) {
        let templateSlider = `
            <div class="swiper-slide">
                <figure class="heroSlider__image anime">
                    <img src="${pathAssets}/${el.img}" alt="${el.alt}">
                </figure>
            </div>`;
        document.querySelector(".heroSlider .swiper-wrapper").insertAdjacentHTML("beforeend", templateSlider);

    });

    var mySwiper = new Swiper('.heroSlider__slider.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 500,

        // If we need pagination
        pagination: {
            el: '.heroSlider .swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.heroSlider .swiper-button-next',
            prevEl: '.heroSlider .swiper-button-prev',
        },
    });
};

heroSlider();

/*********************************/
// Wall of Text

function wot() {
    const wot = [{
        title: "Wall of Text",
        subtitle: "Subtitle if needed",
        text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        ctaText: "button",
        ctaStyle: "cta01"
    }];

    wot.forEach(function (el) {
        let template = `
    
        <div class="wot__wrapper">
            <div class="wot__heading anime">
                <h2 class="wot__title">${el.title}</h2>
                <h3 class="wot__subtitle">${el.subtitle}</h3>
            </div>
            <div class="wot__text anime">
                <p class="wot__description">${el.text}</p>
                <div class="ctaContainer anime"><a href="" class="cta ${el.ctaStyle}">${el.ctaText}</a></div>
            </div>
        </div>`;

        document.querySelector('.wot').insertAdjacentHTML("beforeend", template);
    })
};

wot();

/*********************************/
// Content Media

function contentMedia() {
    const contentMedia = [{
            img: `${pathAssets}/images/img01.jpg`,
            alt: "image alt",
            title: "Content Media",
            subtitle: "With left alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },


    ];

    contentMedia.forEach(function (el) {
        let template = `

        <div class="contentMedia__wrapper">
            <figure class="contentMedia__image anime">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="contentMedia__content">
                <h2 class="contentMedia__title anime">${el.title}</h2>
                <h3 class="contentMedia__subtitle anime">${el.subtitle}</h3>
                <p class="contentMedia__description anime">${el.text}</p> 
                <div class="ctaContainer anime">
                    <a href="" class="cta ${el.ctaStyle}">${el.ctaText}</a>
                </div>
            </div> 
         </div>`;

        document.querySelector('.contentMedia.one').insertAdjacentHTML("beforeend", template);
    })
};
contentMedia();


/*********************************/
// Content Media

function contentMedia2() {
    const contentMedia = [{
            img: `${pathAssets}/images/img01.jpg`,
            alt: "image alt",
            title: "Content Media",
            subtitle: "With left alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },


    ];

    contentMedia.forEach(function (el) {
        let template = `

        <div class="contentMedia__wrapper">
            <figure class="contentMedia__image anime">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="contentMedia__content">
                <h2 class="contentMedia__title anime">${el.title}</h2>
                <h3 class="contentMedia__subtitle anime">${el.subtitle}</h3>
                <p class="contentMedia__description anime">${el.text}</p> 
                <div class="ctaContainer anime">
                    <a href="" class="cta ${el.ctaStyle}">${el.ctaText}</a>
                </div>
            </div> 
         </div>`;

        document.querySelector('.contentMedia.two').insertAdjacentHTML("beforeend", template);
    })
};
contentMedia2();

/*********************************/
// Product Slider

function productSlider() {
    const products = [{
            img: `${pathAssets}/images/img12.jpg`,
            title: "product 1",
            subtitle: "subtitle",
            url: "#",
            premium: true,
            young: false,
            bio: false,

        },
        {
            img: `${pathAssets}/images/img13.jpg`,
            title: "product 2",
            subtitle: "subtitle",
            url: "#",
            premium: true,
            young: false,
            bio: false,
        },
        {
            img: `${pathAssets}/images/img14.jpg`,
            title: "product 3",
            subtitle: "subtitle",
            url: "#",
            premium: false,
            young: false,
            bio: true,
        },
        {
            img: `${pathAssets}/images/img15.jpg`,
            title: "product 4",
            subtitle: "subtitle",
            url: "#",
            premium: false,
            young: true,
            bio: false,
        },
        {
            img: `${pathAssets}/images/img16.jpg`,
            title: "product 5",
            subtitle: "subtitle",
            url: "#",
            premium: false,
            young: true,
            bio: false,
        },
        {
            img: `${pathAssets}/images/img17.jpg`,
            title: "product 6",
            subtitle: "subtitle",
            url: "#",
            premium: false,
            young: true,
            bio: false,
        },
    ];

    const productSlider = {
        title: "Our Products",
        subtitle: "subtitle",
        button: "View all",
        url: "#"
    };

    // Module Template

    function templateProductSlider() {
        let template = `
            <div class="productSlider__wrapper">
                <div class="productSlider__heading">
                    <h3 class="productSlider__title anime">${productSlider.title}</h3>
                    <h4 class="productSlider__subtitle anime">${productSlider.subtitle}</h4>
                </div>
                <div class="productSlider__sliderContainer">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-pagination"></div>

                    <div class="productSlider__slider swiper-container">
                        <div class="swiper-wrapper">
                        </div>
                    </div>
                </div>
                <div class="ctaContainer anime">
                    <a href="${productSlider.url}" class="cta cta02">${productSlider.button}</a>
                </div>
            </div>`;
        document.querySelector(".productSlider").insertAdjacentHTML("beforeend", template);
    };

    templateProductSlider();

    // Slider
    products.forEach(function (el) {
        let templateSlider = `
        <div class="swiper-slide anime">
            <a class="productSlider__card" href="${el.url}">
                <figure class="productSlider__image">
                    <img src="${el.img}" alt="${el.alt}">
                </figure>
                <div class="productSlider__text">
                    <h4 class="productSlider__productTitle">${el.title}</h4>
                    <h5 class="productSlider__productSubtitle">${el.subtitle}</h5>
                    <p class="productSlider__link">see details</p>
                </div>
            </a>
        </div>`;
        document.querySelector(".productSlider .swiper-wrapper").insertAdjacentHTML("beforeend", templateSlider);
    });

    var mySwiper = new Swiper('.productSlider__slider.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 500,
        slidesPerView: 4,
        spaceBetween: 32,
        breakpoints: {
            1023: {
                slidesPerView: 4,
            },
            799: {
                spaceBetween: 24,
                slidesPerView: 3,
            },
            511: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            0: {
                spaceBetween: 24,
                slidesPerView: 1,
            }

        },

        // If we need pagination
        pagination: {
            el: '.productSlider .swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.productSlider .swiper-button-next',
            prevEl: '.productSlider .swiper-button-prev',
        },
    });
};
productSlider();

/*********************************/
// CTA Block

function ctaBlock() {
    const ctaBlock = [{
        img: `${pathAssets}/images/img12.jpg`,
        title: "CTA Block with light background",
        subtitle: "Subtitle if needed",
        text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        ctaText: "button",
        ctaStyle: "cta01"
    }];

    ctaBlock.forEach(function (el) {
        let template = `
        <div class="ctaBlock__wrapper">
            <figure class="ctaBlock__bgImage animeImg">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="ctaBlock__content">
            <div class="ctaBlock__text">
                <h2 class="ctaBlock__title anime">${el.title}</h2>
                <h3 class="ctaBlock__subtitle anime">${el.subtitle}</h3>
                <p class="ctaBlock__description anime">${el.text}</p>
                <div class="ctaContainer anime"><a href="" class="cta ${el.ctaStyle}">${el.ctaText}</a></div>
                </div>
            </div>
        </div>`;

        document.querySelector('.ctaBlock.one').insertAdjacentHTML("beforeend", template);

    });


};
ctaBlock();

/*********************************/
// CTA Block

function ctaBlock2() {
    const ctaBlock = [{
        title: "CTA Block with light background",
        subtitle: "Subtitle if needed",
        text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        ctaText: "button",
        ctaStyle: "cta01"
    }];

    ctaBlock.forEach(function (el) {
        let template = `
        <div class="ctaBlock__wrapper">
            <div class="ctaBlock__content">
            <div class="heroSlider__text">
                <h2 class="heroSlider__title anime">${heading.title}</h2>
                <h3 class="heroSlider__subtitle anime">${heading.subtitle}</h3>
                <div class="heroSlider__arrows anime">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            </div>
        </div>`;

        document.querySelector('.ctaBlock.two').insertAdjacentHTML("beforeend", template);

    });


};
ctaBlock2();