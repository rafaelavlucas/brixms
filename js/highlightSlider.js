const highlightSliderContent = [{
        img: "assets/images/img01.jpg",
        title: "Far far away, behind the world mountains",
        description: "Far far away, behind the world mountains, far from the countries",
    },
    {
        img: "assets/images/img02.jpg",
        title: "Far far away, behind the world mountains",
        description: "Far far away, behind the world mountains, far from the countries",
    },
];

highlightSliderContent.forEach(function (el) {
    let templateSlider2 = `
<div class="swiper-slide">
<div class="highlightSlider__text">
<h4 class="highlightSlider__title">${el.title}</h4>
<p class="highlightSlider__description">${el.description}</p>
</div>
<figure class="highlightSlider__image"><img src="${el.img}"></figure>

</div>
`;
    document.querySelector(".highlightSlider .swiper-wrapper").insertAdjacentHTML("beforeend", templateSlider2);

});

var mySwiper = new Swiper('.highlightSlider__slider.swiper-container', {
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