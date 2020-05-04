/*********************************/
// Product Grid

function productGrid() {

    const productGrid = [{
            title: "Premium Selection",
            subtitle: "subtitle",
            class: "premium",
        },
        {
            title: "Young Selection",
            subtitle: "subtitle",
            class: "young neu-02",
        }
    ];

    const products = [{
            img: `${pathAssets}/images/img12.jpg`,
            title: "product 1",
            subtitle: "subtitle",
            url: "#",
            premium: true,
            young: false,
        },
        {
            img: `${pathAssets}/images/img13.jpg`,
            title: "product 2",
            subtitle: "subtitle",
            url: "#",
            premium: true,
            young: false,
        },
        {
            img: `${pathAssets}/images/img14.jpg`,
            title: "product 3",
            subtitle: "subtitle",
            url: "#",
            premium: true,
            young: false,
        },
        {
            img: `${pathAssets}/images/img15.jpg`,
            title: "product 4",
            subtitle: "subtitle",
            url: "#",
            premium: true,
            young: false,
        },
        {
            img: `${pathAssets}/images/img16.jpg`,
            title: "product 5",
            subtitle: "subtitle",
            url: "#",
            premium: false,
            young: true,
        },
        {
            img: `${pathAssets}/images/img17.jpg`,
            title: "product 6",
            subtitle: "subtitle",
            url: "#",
            premium: false,
            young: true,
        },
        {
            img: `${pathAssets}/images/img18.jpg`,
            title: "product 7",
            subtitle: "subtitle",
            url: "#",
            premium: false,
            young: true,
        },
    ];

    productGrid.forEach(function (el) {
        let template = `
        <section class="productGrid ${el.class}">
            <div class="productGrid__wrapper">
                <div class="productGrid__heading">
                    <h3 class="productGrid__title anime">${el.title}</h3>
                    <h4 class="productGrid__subtitle anime">${el.subtitle}</h4>
                </div>
                <div class="productGrid__content"></div>
            </div>
        </section>`;
        document.querySelector(".module").insertAdjacentHTML("beforeend", template);
    });

    products.forEach(function (el) {
        let templateProducts = `
            <div class="productGrid__product anime">
                <div class="productGrid__card">
                    <figure class="productGrid__image">
                        <img src="${el.img}" alt="${el.title}">
                    </figure>
                    <div class="productGrid__text">
                        <h4 class="productGrid__productTitle">${el.title}</h4>
                        <h5 class="productGrid__productSubtitle">${el.subtitle}</h5>
                        <div class="ctaContainer">
                            <a href="${el.url}" class="cta cta01">view details</a>
                        </div>
                    </div>
                </div>
            </div>`;

        if (el.premium) {
            document.querySelector(".premium .productGrid__content").insertAdjacentHTML("beforeend", templateProducts);
        };

        if (el.young) {
            document.querySelector(".young .productGrid__content").insertAdjacentHTML("beforeend", templateProducts);
        };

    });
};

productGrid()