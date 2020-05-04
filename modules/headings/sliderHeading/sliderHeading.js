/*********************************/
// Slider Heading

function sliderHeading() {

    const sliderHeadingItems = [{
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

    let templateSliderHeading = `
        <header class="sliderHeading white">
            <div class="sliderHeading__wrapper">
            <div class="sliderHeading__text">
                <h2 class="sliderHeading__title anime">${heading.title}</h2>
                <h3 class="sliderHeading__subtitle anime">${heading.subtitle}</h3>
                <div class="sliderHeading__arrows anime">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div class="sliderHeading__slider swiper-container">
                <div class="swiper-wrapper"></div>
                <div class="swiper-pagination"></div>
            </div>
            </div>
        </header>`;
    document.querySelector(".module").insertAdjacentHTML("beforeend", templateSliderHeading);


    sliderHeadingItems.forEach(function (el) {
        let templateSlider = `
            <div class="swiper-slide">
                <figure class="sliderHeading__image anime">
                    <img src="${pathAssets}/${el.img}" alt="${el.alt}">
                </figure>
            </div>`;
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
};

sliderHeading();