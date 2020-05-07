pathAssets =
    "https://rafaelavlucas.github.io/brixms/assets";

/*********************************/
// Simple Heading

function templateSimpleHeading() {
    let template = ` 
        <figure class="simpleHeading__bgImage animeImg">
            <img src="${pathAssets}/${simpleHeading.img}" alt="${simpleHeading.alt}">
        </figure>
        <div class="simpleHeading__wrapper">
            <h2 class="simpleHeading__title anime">${simpleHeading.title}</h2>
            <h3 class="simpleHeading__subtitle anime">${simpleHeading.subtitle}</h3>
        </div>`;

    document.querySelector('.simpleHeading').insertAdjacentHTML("beforeend", template);

    if (document.querySelector('.simpleHeading__subtitle').innerHTML == "") {
        document.querySelector('.simpleHeading__subtitle').style.display = "none";
    };
};
templateSimpleHeading();

/*********************************/
// Content Media - Detail Intro

function templateDetail() {
    let template = `
    <div class="contentMedia__wrapper">
        <figure class="contentMedia__image anime">
            <img src="${pathAssets}/${detailIntro.img}" alt="${detailIntro.alt}">
        </figure>
        <div class="contentMedia__content">
            <p class="contentMedia__subtitle anime">${detailIntro.text}.</p> 
        </div> 
     </div>`;

    document.querySelector('.contentMedia.detail').insertAdjacentHTML("beforeend", template);
}
templateDetail();


/*********************************/
// Content Media - About

function templateAbout() {
    let template = `
    <div class="contentMedia__wrapper">
        <figure class="contentMedia__image anime">
            <img src="${pathAssets}/${aboutProduct.img}" alt="${aboutProduct.alt}">
        </figure>
        <div class="contentMedia__content">
            <h2 class="contentMedia__title anime">${aboutProduct.title}</h2>
            <p class="contentMedia__description anime">${aboutProduct.text}.</p> 
        </div> 
     </div>`;

    document.querySelector('.contentMedia.product').insertAdjacentHTML("beforeend", template);
}
templateAbout();


/*********************************/
// Content Tabs  - Tasting Notes and Specifications

function templateContentTabs() {
    let template = `
        <div class="contentTabs__wrapper">
            <div class="contentTabs__tabList anime">
                <div class="contentTabs__tabLink active" data-label="tab1">Tasting Notes</div>
                <div class="contentTabs__tabLink" data-label="tab2">Technical Information</div>
            </div>
            <div class="contentTabs__content">
                <div class="contentTabs__tabContent active" id="tab1"></div>
                <div class="contentTabs__tabContent" id="tab2"></div>
            </div>
        </div>`;
    document.querySelector('.contentTabs').insertAdjacentHTML("beforeend", template);
}

function templateTabsItem() {

    // Tasting Notes
    tastingNotes.forEach(function (el) {
        let template = `
            <div class="contentTabs__infoIcon infoIcon anime">
                <figure class="infoIcon__icon">
                    <img src="${pathAssets}/${el.icon}" alt="${el.name}">
                </figure>
                <div class="infoIcon__text">
                    <p class="infoIcon__title">${el.name}</p>
                    <p class="infoIcon__description">${el.text}</p>
                </div>
            </div>`;

        document.getElementById("tab1").insertAdjacentHTML("beforeend", template);
    });

    // Specs
    specs.forEach(function (el) {
        let template = `
            <div class="contentTabs__infoIcon infoIcon anime">
                <figure class="infoIcon__icon">
                    <img src="${pathAssets}/${el.icon}" alt="${el.name}">
                </figure>
                <div class="infoIcon__text">
                    <p class="infoIcon__title">${el.name}</p>
                    <p class="infoIcon__description">${el.text}</p>
                </div>
            </div>`;

        document.getElementById("tab2").insertAdjacentHTML("beforeend", template);
    });

    // Download Tech Sheet Link
    let template = `
        <div class="contentTabs__download anime">
            <a href="${techSheet.url}" class="ctaLink">
                <img class="ctaLink__icon" src="${pathAssets}/icons-black/icon-88.svg">
                <span class="ctaLink__text">Download wine file</span>
            </a>
        </div>`;

    document.querySelector('.contentTabs__wrapper').insertAdjacentHTML("afterend", template);
}
// Functionality
function tabsFuncionality() {

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

};

// Get tab Height to anime
function getTabHeight() {
    document.querySelector(".contentTabs__content").style.height = document.querySelector(".contentTabs__tabContent.active").offsetHeight + "px";
};

templateContentTabs();
templateTabsItem();
tabsFuncionality();
getTabHeight();

/*********************************/
// Info Icons - Food Pairing

function templateInfoIcons() {
    let template = `
        <div class="infoIcons__wrapper">
            <figure class="infoIcons__bgImage animeImg">
                <img src="${pathAssets}/${infoIcons.img}" alt="${infoIcons.alt}">
            </figure>
            <div class="infoIcons__content">
                <div class="infoIcons__heading">
                    <h3 class="infoIcons__title anime">${infoIcons.title}</h3>
                    <h4 class="infoIcons__subtitle anime">${infoIcons.subtitle}</h4>
                </div>
                <div class="infoIcons__icons">
                </div>
            </div>
        </div>`;

    document.querySelector(".foodPairing.infoIcons").insertAdjacentHTML("beforeend", template);
};

function templateIconsItem() {
    foodPairing.forEach(function (el) {
        let template = `
            <div class="infoIcons__infoIcon infoIcon vertical anime">
                <figure class="infoIcon__icon">
                    <img src="${pathAssets}/${el.icon}" alt="${el.name}">
                </figure>
                <div class="infoIcon__text">
                    <p class="infoIcon__title">${el.name}</p>
                </div>
            </div>`;

        document.querySelector(".foodPairing .infoIcons__icons").insertAdjacentHTML("beforeend", template);
    });
}

templateInfoIcons()
templateIconsItem();

/*********************************/
// Wall of text -  Recipe

function recipeTemplate() {
    let template = `
        <div class="wot__wrapper">
            <div class="wot__heading anime">
                <h2 class="wot__title">${recipe.title}</h2>
                <h3 class="wot__subtitle">${recipe.subtitle}</h3>
            </div>
            <div class="wot__text anime">
                <p class="wot__description">${recipe.text}</p>
            </div>
        </div>`;
    document.querySelector('.recipe.wot').insertAdjacentHTML("beforeend", template);
};

recipeTemplate();

/*********************************/
// Highlight Slider -  Testimonials 

function templateTestimonials() {
    let template = `
        <figure class="highlightSlider__bgImage animeImg">
            <img src="${pathAssets}/${testimonials.img}" alt="${testimonials.alt}">
        </figure>
        <div class="highlightSlider__wrapper">
            <div class="highlightSlider__heading">
                <h3 class="highlightSlider__title">${testimonials.title}</h3>
            </div>
            <div class="highlightSlider__slider swiper-container">
                <div class="swiper-wrapper"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>`;
    document.querySelector('.highlightSlider.testimonials').insertAdjacentHTML("beforeend", template);
};

function templateQuotesItem() {
    quotes.forEach(function (el) {
        let template = `
            <div class="swiper-slide">
            <div class="highlightSlider__content">
                <div class="highlightSlider__text">
                    <p class="highlightSlider__subtitle anime">${el.text}</p>
                    <p class="highlightSlider__description anime">${el.name}</p>
                    </div>
                </div>
            </div>`;
        document.querySelector(".highlightSlider.testimonials .swiper-wrapper").insertAdjacentHTML("beforeend", template);

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
templateQuotesItem();