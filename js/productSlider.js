pathAssets =
    "https://rafaelavlucas.github.io/brixms/assets";


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