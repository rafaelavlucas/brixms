/*********************************/
// Info Icons - Food Pairing

function infoIcons() {

    const infoIcons = [{
            title: "Info Icons",
            subtitle: "with Photo background",
            img: `${pathAssets}/images/img09.jpg`,
            alt: "alt",
            class: "foodPairing neu-08"
        },
        {
            title: "Info Icons",
            subtitle: "with dark background",
            img: "",
            alt: "",
            class: "icons1 neu-08"
        },
        {
            title: "Info Icons",
            subtitle: "with light background",
            img: "",
            alt: "",
            class: "icons2 neu-02"
        }
    ];
    const foodPairing = [{
            name: "Info Icon 1",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        },
        {
            name: "Info Icon 2 with long text",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        },
        {
            name: "Info Icon 3",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        },
        {
            name: "Info Icon 4",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        },
        {
            name: "Info Icon 5 with long text",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        },
        {
            name: "Info Icon 6",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        }
    ];

    const icons1 = [{
            name: "Info Icon 1",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        },
        {
            name: "Info Icon 2 with long text",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        },
        {
            name: "Info Icon 3",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        },
        {
            name: "Info Icon 4",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        },
        {
            name: "Info Icon 5 with long text",
            icon: `${pathAssets}/icons-brand/bra007w.svg`
        }
    ];

    const icons2 = [{
            name: "Info Icon 1",
            icon: `${pathAssets}/icons-brand/bra007.svg`
        },
        {
            name: "Info Icon 2 with long text",
            icon: `${pathAssets}/icons-brand/bra007.svg`
        },
        {
            name: "Info Icon 3",
            icon: `${pathAssets}/icons-brand/bra007.svg`
        },
        {
            name: "Info Icon 4",
            icon: `${pathAssets}/icons-brand/bra007.svg`
        }
    ];


    infoIcons.forEach(function (el) {
        let template = `
            <section class="infoIcons ${el.class}">
                <div class="infoIcons__wrapper">
                    <figure class="infoIcons__bgImage animeImg">
                        <img src="${el.img}" alt="${el.alt}">
                    </figure>
                    <div class="infoIcons__content">
                        <div class="infoIcons__heading">
                            <h3 class="infoIcons__title anime">${el.title}</h3>
                            <h4 class="infoIcons__subtitle anime">${el.subtitle}</h4>
                        </div>
                        <div class="infoIcons__icons">
                        </div>
                    </div>
                </div>
            </section>`;

        document.querySelector(".module").insertAdjacentHTML("beforeend", template);
    });

    foodPairing.forEach(function (el) {
        let template = `
                <div class="infoIcons__infoIcon infoIcon vertical anime">
                    <figure class="infoIcon__icon">
                        <img src="${el.icon}" alt="${el.name}">
                    </figure>
                    <div class="infoIcon__text">
                        <p class="infoIcon__title">${el.name}</p>
                    </div>
                </div>`;

        document.querySelector(".foodPairing .infoIcons__icons").insertAdjacentHTML("beforeend", template);
    });

    icons1.forEach(function (el) {
        let template = `
                <div class="infoIcons__infoIcon infoIcon vertical anime">
                    <figure class="infoIcon__icon">
                        <img src="${el.icon}" alt="${el.name}">
                    </figure>
                    <div class="infoIcon__text">
                        <p class="infoIcon__title">${el.name}</p>
                    </div>
                </div>`;

        document.querySelector(".icons1 .infoIcons__icons").insertAdjacentHTML("beforeend", template);
    });

    icons2.forEach(function (el) {
        let template = `
                <div class="infoIcons__infoIcon infoIcon vertical anime">
                    <figure class="infoIcon__icon">
                        <img src="${el.icon}" alt="${el.name}">
                    </figure>
                    <div class="infoIcon__text">
                        <p class="infoIcon__title">${el.name}</p>
                    </div>
                </div>`;

        document.querySelector(".icons2 .infoIcons__icons").insertAdjacentHTML("beforeend", template);
    });

    const module = document.querySelectorAll(".infoIcons");
    module.forEach(function (el) {
        const image = el.querySelectorAll("figure img");
        image.forEach(function (el) {
            if (!el.getAttribute('src')) {
                el.closest("figure").style.display = "none";
            }
            if (el.getAttribute('src')) {
                el.closest(".infoIcons__wrapper").style.background = "transparent";
            }
        })
    });
};
infoIcons();


/*********************************/
//Spacing
document.querySelectorAll(".infoIcons").forEach(function (el) {
    let template = `<div class="spacing"></div>`;
    el.insertAdjacentHTML("afterend", template);
});