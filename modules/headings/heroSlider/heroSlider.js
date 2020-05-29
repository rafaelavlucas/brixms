/*********************************/
// Hero Slider

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
        title: "Hero Slider",
        subtitle: "subtitle or description"
    };

    let templateheroSlider = `
        <header class="heroSlider white">
            <div class="heroSlider__wrapper">
            <div class="heroSlider__text">
                <h2 class="heroSlider__title anime">${heading.title}</h2>
                <h3 class="heroSlider__subtitle anime">${heading.subtitle}</h3>
            </div>
            <div class="heroSlider__slider swiper-container">
                <div class="swiper-wrapper"></div>
                <div class="swiper-pagination"></div>
            </div>
            </div>
        </header>`;
    document.querySelector(".module").insertAdjacentHTML("beforeend", templateheroSlider);


    heroSliderItems.forEach(function (el) {
        let templateSlider = `
            <div class="swiper-slide">
                <figure class="heroSlider__image animeImg">
                    <img src="${pathAssets}/${el.img}" alt="${el.alt}">
                </figure>
            </div>`;
        document.querySelector(".heroSlider .swiper-wrapper").insertAdjacentHTML("beforeend", templateSlider);

    });

    var mySwiper = new Swiper('.heroSlider__slider.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 800,
        autoplay: true,
        delay: 2000,

        // If we need pagination
        pagination: {
            el: '.heroSlider .swiper-pagination',
            clickable: true,
        },
    });
};

heroSlider();