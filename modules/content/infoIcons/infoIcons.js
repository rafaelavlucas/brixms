/*********************************/
// Info Icons - Food Pairing

function infoIconsFood() {
    const infoIcons = {
        title: "Info Icons",
        subtitle: "with Photo background",
        img: `${pathAssets}/images/img09.jpg`,
        alt: "alt"
    };

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

    function templateInfoIcons() {
        let template = `
            <div class="infoIcons__wrapper">
                <figure class="infoIcons__bgImage animeImg">
                    <img src="${infoIcons.img}" alt="${infoIcons.alt}">
                </figure>
                <div class="infoIcons__content">
                    <div class="infoIcons__heading">
                        <h3 class="infoIcons__title anime">${infoIcons.title}</h3>
                        <h4 class="infoIcons__subtitle anime">${infoIcons.subtitle}</h4>
                    </div>
                    <div class="infoIcons__icons">
                    </div>
                </div>
            </div>`;

        document.querySelector(".foodPairing.infoIcons").insertAdjacentHTML("beforeend", template);
    };

    function templateIconsItem() {
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
    }

    templateInfoIcons()
    templateIconsItem();
};
infoIconsFood();

/*********************************/
// Info Icons - Default

function infoIconsDefault() {
    const infoIcons = {
        title: "Info Icons",
        subtitle: "with dark background",
        alt: "alt"
    };

    const infoItems = [{
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
    ];

    function templateInfoIcons() {
        let template = `
            <div class="infoIcons__wrapper">
                <div class="infoIcons__content">
                    <div class="infoIcons__heading">
                        <h3 class="infoIcons__title anime">${infoIcons.title}</h3>
                        <h4 class="infoIcons__subtitle anime">${infoIcons.subtitle}</h4>
                    </div>
                    <div class="infoIcons__icons">
                    </div>
                </div>
            </div>`;

        document.querySelector(".default.infoIcons").insertAdjacentHTML("beforeend", template);


    };

    function templateIconsItem() {
        infoItems.forEach(function (el) {
            let template = `
                <div class="infoIcons__infoIcon infoIcon vertical anime">
                    <figure class="infoIcon__icon">
                        <img src="${el.icon}" alt="${el.name}">
                    </figure>
                    <div class="infoIcon__text">
                        <p class="infoIcon__title">${el.name}</p>
                    </div>
                </div>`;

            document.querySelector(".default .infoIcons__icons").insertAdjacentHTML("beforeend", template);
        });
    }

    templateInfoIcons()
    templateIconsItem();

};
infoIconsDefault();

/*********************************/
// Info Icons - Default 2

function infoIconsDefault2() {
    const infoIcons = {
        title: "Info Icons",
        subtitle: "with light background"
    };

    const infoItems = [{
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
        },
    ];

    function templateInfoIcons() {
        let template = `
            <div class="infoIcons__wrapper">
                <div class="infoIcons__content">
                    <div class="infoIcons__heading">
                        <h3 class="infoIcons__title anime">${infoIcons.title}</h3>
                        <h4 class="infoIcons__subtitle anime">${infoIcons.subtitle}</h4>
                    </div>
                    <div class="infoIcons__icons">
                    </div>
                </div>
            </div>`;

        document.querySelector(".default2.infoIcons").insertAdjacentHTML("beforeend", template);


    };

    function templateIconsItem() {
        infoItems.forEach(function (el) {
            let template = `
                <div class="infoIcons__infoIcon infoIcon vertical anime">
                    <figure class="infoIcon__icon">
                        <img src="${el.icon}" alt="${el.name}">
                    </figure>
                    <div class="infoIcon__text">
                        <p class="infoIcon__title">${el.name}</p>
                    </div>
                </div>`;

            document.querySelector(".default2 .infoIcons__icons").insertAdjacentHTML("beforeend", template);
        });
    }

    templateInfoIcons()
    templateIconsItem();

};
infoIconsDefault2();