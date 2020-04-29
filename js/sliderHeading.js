const sliderHeadingContent = ["assets/images/img01.jpg", "../assets/images/img02.jpg", "assets/images/img03.jpg", "../assets/images/img04.jpg", "assets/images/img05.jpg", ]

sliderHeadingContent.forEach(function (el) {
    let templateSlider = `
<div class="swiper-slide"><img src="${el}"></div>
`;
    document.querySelector(".sliderHeading .swiper-wrapper").insertAdjacentHTML("beforeend", templateSlider);

});

var mySwiper = new Swiper('.sliderHeading__slider.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});