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