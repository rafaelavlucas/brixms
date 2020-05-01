const sliderHeadingContent = [{
        img: "assets/images/img01.jpg",
        alt: "teste",
    },
    {
        img: "assets/images/img02.jpg",
        alt: "teste",
    },
    {
        img: "assets/images/img03.jpg",
        alt: "teste",
    },

];

sliderHeadingContent.forEach(function (el) {
    let templateSlider = `
<div class="swiper-slide anime"><img src="${el.img}" alt="${el.alt}"></div>
`;
    document.querySelector(".sliderHeading .swiper-wrapper").insertAdjacentHTML("beforeend", templateSlider);

});

var mySwiper = new Swiper('.sliderHeading__slider.swiper-container', {
    // Optional parameters
    loop: true,
    speed: 500,

    // If we need pagination
    pagination: {
        el: '.sliderHeading .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.sliderHeading .swiper-button-next',
        prevEl: '.sliderHeading .swiper-button-prev',
    },
});