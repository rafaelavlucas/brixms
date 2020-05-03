/*********************************/

function contentTabs() {

    const tastingNotes = [{
            name: "Topic 1",
            icon: `${pathAssets}/icons-brand/bra007.svg`,
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
        },
        {
            name: "Topic 2",
            icon: `${pathAssets}/icons-brand/bra007.svg`,
            text: "Far far away, behind the world mountains",
        },
        {
            name: "Topic 3",
            icon: `${pathAssets}/icons-brand/bra007.svg`,
            text: "Far far away, behind the world mountains, far from the countries.",
        }
    ];

    const specs = [{
            name: "Topic 4",
            icon: `${pathAssets}/icons-brand/bra007.svg`,
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia.",
        },
        {
            name: "Topic 5",
            icon: `${pathAssets}/icons-brand/bra007.svg`,
            text: "Far far away, behind the world mountains, far from the countries.",
        },
        {
            name: "Topic 6",
            icon: `${pathAssets}/icons-brand/bra007.svg`,
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres",
        }
    ];
    const techSheet = {
        url: "google.com",
    };

    function templateContentTabs() {
        let template = `
            <section class="contentTabs neu-02">
                <div class="contentTabs__wrapper">
                    <div class="contentTabs__tabList anime">
                        <div class="contentTabs__tabLink active" data-label="tab1">Tasting Notes</div>
                        <div class="contentTabs__tabLink" data-label="tab2">Technical Information</div>
                    </div>
                    <div class="contentTabs__content">
                        <div class="contentTabs__tabContent active" id="tab1"></div>
                        <div class="contentTabs__tabContent" id="tab2"></div>
                    </div>
                </div>
            </section>`;
        document.querySelector('.module').insertAdjacentHTML("beforeend", template);
    }

    function templateTabsItem() {

        // Tasting Notes
        tastingNotes.forEach(function (el) {
            let template = `
                <div class="contentTabs__infoIcon infoIcon anime">
                    <figure class="infoIcon__icon">
                        <img src="${el.icon}" alt="${el.name}">
                    </figure>
                    <div class="infoIcon__text">
                        <p class="infoIcon__title">${el.name}</p>
                        <p class="infoIcon__description">${el.text}</p>
                    </div>
                </div>`;

            document.getElementById("tab1").insertAdjacentHTML("beforeend", template);
        });

        // Specs
        specs.forEach(function (el) {
            let template = `
                <div class="contentTabs__infoIcon infoIcon anime">
                    <figure class="infoIcon__icon">
                        <img src="${el.icon}" alt="${el.name}">
                    </figure>
                    <div class="infoIcon__text">
                        <p class="infoIcon__title">${el.name}</p>
                        <p class="infoIcon__description">${el.text}</p>
                    </div>
                </div>`;

            document.getElementById("tab2").insertAdjacentHTML("beforeend", template);
        });

        // Download Tech Sheet Link
        let template = `
            <div class="contentTabs__download anime">
                <a href="${techSheet.url}" class="ctaLink">
                    <img class="ctaLink__icon" src="${pathAssets}/icons-black/icon-88.svg">
                    <span class="ctaLink__text">Download wine file</span>
                </a>
            </div>`;

        document.querySelector('.contentTabs__wrapper').insertAdjacentHTML("afterend", template);
    }
    // Functionality
    function tabsFuncionality() {

        const tabLink = document.querySelectorAll(".contentTabs__tabLink"),
            tabContent = document.querySelectorAll(".contentTabs__tabContent");

        tabLink.forEach(function (el) {
            el.addEventListener("click", openTabs);
        });

        function openTabs(e) {
            var tabTarget = e.currentTarget;
            var tabLabel = tabTarget.dataset.label;

            tabContent.forEach(function (el) {
                el.classList.remove("active");
            });

            tabLink.forEach(function (el) {
                el.classList.remove("active");
            });

            document.querySelector("#" + tabLabel).classList.add("active");
            tabTarget.classList.add("active");

            getTabHeight();
        }

    };

    // Get tab Height to anime
    function getTabHeight() {
        document.querySelector(".contentTabs__content").style.height = document.querySelector(".contentTabs__tabContent.active").offsetHeight + "px";
    };

    templateContentTabs();
    templateTabsItem();
    tabsFuncionality();
    getTabHeight();
}

contentTabs();
/*********************************/
// Content Tabs  - General
function contentTabs2() {

    const content = [{
            name: "Title 1",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
            class: "active",
            id: "item1"
        },
        {
            name: "Title 2",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
            class: "",
            id: "item2"
        },
    ];


    function templateContentTabs() {
        let template = `
            <section class="contentTabs version2 dark neu-08">
                <div class="contentTabs__wrapper">
                    <div class="contentTabs__tabList anime">
                        <div class="contentTabs__tabLink active" data-tag="item1">Tab 1</div>
                        <div class="contentTabs__tabLink" data-tag="item2">Tab 2</div>
                    </div>
                    <div class="contentTabs__content">
                    </div>
                </div>
            </section>`;
        document.querySelector('.module2').insertAdjacentHTML("beforeend", template);
    }

    function templateTabsItem() {

        // Content
        content.forEach(function (el) {
            let template = `
            <div class="contentTabs__tabContent ${el.class}" id="${el.id}">
                <div class="contentTabs__infoIcon infoIcon anime">
                    <div class="infoIcon__text">
                        <p class="infoIcon__title">${el.name}</p>
                        <p class="infoIcon__description">${el.text}</p>
                    </div>
                </div>
                </div>`;

            document.querySelector(".module2 .contentTabs__content").insertAdjacentHTML("beforeend", template);
        });

    };
    // Functionality
    function tabsFuncionality() {

        const tabLink = document.querySelectorAll(".version2 .contentTabs__tabLink"),
            tabContent = document.querySelectorAll(".version2 .contentTabs__tabContent");

        tabLink.forEach(function (el) {
            el.addEventListener("click", openTabs);
        });

        function openTabs(e) {
            var tabTarget = e.currentTarget;
            var tabTag = tabTarget.dataset.tag;

            tabContent.forEach(function (el) {
                el.classList.remove("active");
            });

            tabLink.forEach(function (el) {
                el.classList.remove("active");
            });

            document.querySelector("#" + tabTag).classList.add("active");
            tabTarget.classList.add("active");

            getTabHeight();
        }
    };

    // Get tab Height to anime
    function getTabHeight() {
        document.querySelector(".version2 .contentTabs__content").style.height = document.querySelector(".version2 .contentTabs__tabContent.active").offsetHeight + "px";
    };

    templateContentTabs();
    templateTabsItem();
    tabsFuncionality();
    getTabHeight();
}

contentTabs2();