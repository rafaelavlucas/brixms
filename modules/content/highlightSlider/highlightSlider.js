/*********************************/
// Highlight Slider -  Photos
function sliderPhotos() {
    const sliderItems = [{
            img: `${pathAssets}/images/img08.jpg`,
            alt: "teste",
            title: "Highlight Slider",
            description: "Far far away, behind the world mountains, far from the countries",
        },
        {
            img: `${pathAssets}/images/img10.jpg`,
            alt: "teste",
            title: "Far far away, behind the world mountains",
            description: "Far far away, behind the world mountains, far from the countries",
        },
        {
            img: `${pathAssets}/images/img11.jpg`,
            alt: "teste",
            title: "Far far away, behind the world mountains",
            description: "Far far away, behind the world mountains, far from the countries",
        },
    ];

    function templateModule() {
        let template = `
            <div class="highlightSlider__wrapper">
                <div class="highlightSlider__slider swiper-container">
                    <div class="swiper-wrapper">
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>`;
        document.querySelector(".highlightSlider.photos").insertAdjacentHTML("beforeend", template);
    }

    function templateItem() {
        sliderItems.forEach(function (el) {
            let templateSlider2 = `
                <div class="swiper-slide">
                    <div class="highlightSlider__text">
                    <h4 class="highlightSlider__subtitle anime">${el.title}</h4>
                    <p class="highlightSlider__description anime">${el.description}</p>
                </div>
                <figure class="highlightSlider__image animeImg">
                <img src="${el.img}" alt="${el.alt}"></figure>
                </div>`;
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
    }

    templateModule();
    templateItem();
}

sliderPhotos();

/*********************************/
// Highlight Slider -  Testimonials 

function sliderTestimonials() {
    const testimonials = {
        title: "What Our Clients Think",
        img: "images/img07.jpg",
        alt: "teste"
    }

    const quotes = [{
            name: "John doe",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics",
        },
        {
            name: "Maria doe",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by the",
        }
    ];

    function templateModule() {
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

    function templateQuotes() {
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
    };

    templateModule();
    templateQuotes();
}

sliderTestimonials();