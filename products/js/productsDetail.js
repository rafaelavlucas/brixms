pathAssets =
    "https://rafaelavlucas.github.io/template/assets";

/*********************************/
// Simple Heading

function templateSimpleHeading() {
    let templateHeading = ` 
    <figure class="simpleHeading__bgImage animeImg">
        <img src="${pathAssets}/${simpleHeading.img}" alt="${simpleHeading.alt}">
    </figure>
    <div class="simpleHeading__wrapper">
         <h2 class="simpleHeading__title anime">${simpleHeading.title}</h2>
        <h3 class="simpleHeading__subtitle anime">${simpleHeading.subtitle}</h3>
    </div>`;

    document.querySelector('.simpleHeading').insertAdjacentHTML("beforeend", templateHeading);
};
templateSimpleHeading();


/*********************************/
// Content Media - About

function templateAbout() {
    let templateAbout = `
    <figure class="contentMedia__image anime">
         <img src="${pathAssets}/${aboutProduct.img}" alt="Image">
    </figure>
     <div class="contentMedia__content">
        <h2 class="contentMedia__title anime">${aboutProduct.title}</h2>
        <p class="contentMedia__description anime">${aboutProduct.text}.</p>  
     </div>`;

    document.querySelector('.contentMedia__wrapper').insertAdjacentHTML("beforeend", templateAbout);
}
templateAbout();


/*********************************/
// Content Tabs 

function templateTabs() {
    // Content Tabs Content - Tasting Notes
    tastingNotes.forEach(function (el) {
        let template = `
        <div class="contentTabs__infoIcon infoIcon anime">
            <figure class="infoIcon__icon">
                <img src="${pathAssets}/${el.icon}" alt="${el.name}">
            </figure>
            <div class="infoIcon__text">
                <p class="infoIcon__title">${el.name}</p>
                p class="infoIcon__description">${el.text}</p>
            </div>
        </div>`;

        document.getElementById("tab1").insertAdjacentHTML("beforeend", template);
    });

    // Content Tabs Content - Specs
    specs.forEach(function (el) {
        let template = `
        <div class="contentTabs__infoIcon infoIcon anime">
            <figure class="infoIcon__icon">
                <img src="${pathAssets}/${el.icon}" alt="${el.name}">
            </figure>
            <div class="infoIcon__text">
                <p class="infoIcon__title">${el.name}</p>
                p class="infoIcon__description">${el.text}</p>
            </div>
        </div>`;

        document.getElementById("tab2").insertAdjacentHTML("beforeend", template);
    });

    // Content Tabs - Download Tech Sheet Link
    let templateLink = `
<div class="contentTabs__download anime">
    <a href="${techSheet.url}" class="ctaLink">
        <img class="ctaLink__icon" src="${pathAssets}/icons-black/icon-88.svg">
        <span class="ctaLink__text">Download wine file</span>
    </a>
</div>`;

    document.querySelector('.contentTabs__wrapper').insertAdjacentHTML("afterend", templateLink);

    // Content Tabs - Functionality
    const tabLink = document.querySelectorAll(".contentTabs__tabLink"),
        tabContent = document.querySelectorAll(".contentTabs__tabContent");

    tabLink.forEach(function (el) {
        el.addEventListener("click", openTabs);
    });

    function openTabs(e) {
        var tabTarget = e.currentTarget;
        var tabLabel = tabTarget.dataset.label;

        tabContent.forEach(function (el) {
            el.classList.remove("active");
        });

        tabLink.forEach(function (el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + tabLabel).classList.add("active");
        tabTarget.classList.add("active");

        getTabHeight();
    }
    // Content Tabs - Get tab Height to anime
    function getTabHeight() {
        document.querySelector(".contentTabs__content").style.height = document.querySelector(".contentTabs__tabContent.active").offsetHeight + "px";
    };
    getTabHeight();

}
templateTabs();


/*********************************/
// Info Icons - Food Pairing

function templateInfoIcons() {
    foodPairing.forEach(function (el) {
        let template = `
            <div class="infoIcons__infoIcon infoIcon vertical anime">
                <figure class="infoIcon__icon"><img src="${pathAssets}/${el.icon}" alt="${el.name}"></figure>
                <div class="infoIcon__text">
                    <p class="infoIcon__title">${el.name}</p>
                </div>
            </div>`;

        document.querySelector(".foodPairing .infoIcons__icons").insertAdjacentHTML("beforeend", template);

    });
}
templateInfoIcons();


/*********************************/
// Testimonials 
function templateTestimonials() {
    testimonials.forEach(function (el) {
        let templateTestimonials = `
            <div class="swiper-slide">
                <div class="highlightSlider__text">
                    <p class="highlightSlider__title anime">${el.name}</p>
                    <p class="highlightSlider__description anime">${el.text}</p>
                </div>
            </div>`;

        const testimonialsContent = document.querySelector('.highlightSlider.testimonials');

        if (testimonialsContent) {
            document.querySelector(".highlightSlider.testimonials .swiper-wrapper").insertAdjacentHTML("beforeend", templateTestimonials);
        };

    });

    var mySwiper = new Swiper('.testimonials .highlightSlider__slider.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 500,

        // If we need pagination
        pagination: {
            el: '.highlightSlider .swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.highlightSlider .swiper-button-next',
            prevEl: '.highlightSlider .swiper-button-prev',
        },
    });
}
templateTestimonials();