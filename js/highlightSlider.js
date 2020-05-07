pathAssets =
    "https://rafaelavlucas.github.io/brixms/assets";

const highlightSliderContent = [{
        img: "images/img08.jpg",
        alt: "teste",
        title: "Highlight Slider",
        description: "Far far away, behind the world mountains, far from the countries",
    },
    {
        img: "images/img10.jpg",
        alt: "teste",
        title: "Far far away, behind the world mountains",
        description: "Far far away, behind the world mountains, far from the countries",
    },
    {
        img: "images/img11.jpg",
        alt: "teste",
        title: "Far far away, behind the world mountains",
        description: "Far far away, behind the world mountains, far from the countries",
    },
];

highlightSliderContent.forEach(function (el) {
    let templateSlider2 = `
<div class="swiper-slide">
<div class="highlightSlider__text">
<h4 class="highlightSlider__subtitle anime">${el.title}</h4>
<p class="highlightSlider__description anime">${el.description}</p>
</div>
<figure class="highlightSlider__image animeImg"><img src="${pathAssets}/${el.img}" alt="${el.alt}"></figure>

</div>
`;
    document.querySelector(".highlightSlider.photos .swiper-wrapper").insertAdjacentHTML("beforeend", templateSlider2);

});

var mySwiper = new Swiper('.highlightSlider__slider.swiper-container', {
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