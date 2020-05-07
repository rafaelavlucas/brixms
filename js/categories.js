const pathAssets = "https://rafaelavlucas.github.io/brixms/assets";


function getCategory() {
    const modulesCategories = [{
            name: "Navigation",
            icon: `${pathAssets}/modules/navigation.svg`,
            label: "navigation",
        },
        {
            name: "Headings",
            icon: `${pathAssets}/modules/headings.svg`,
            label: "headings",
        },
        {
            name: "Content",
            icon: `${pathAssets}/modules/content.svg`,
            label: "content",
        },
        {
            name: "Lists",
            icon: `${pathAssets}/modules/lists.svg`,
            label: "lists",
        },
        {
            name: "Related",
            icon: `${pathAssets}/modules/related.svg`,
            label: "related",
        },
        {
            name: "Functional",
            icon: `${pathAssets}/modules/functional.svg`,
            label: "functional",
        },
    ];

    modulesCategories.forEach(function (el) {
        let template = `
            <div class="categories__card" data-label="${el.label}">
                <figure class="categories__icon">
                    <img src="${el.icon}">
                </figure>
                <p class="categories__text">${el.name}</p>
            </div>`;


        document.querySelector('.categories__container').insertAdjacentHTML("beforeend", template)

        let template2 = `
            <div class="categories__modules" id="${el.label}">
            <h1 class="categories__title">${el.name}</h1>
            <div class="categories__modulesContent"></div>
             </div>`;

        document.querySelector('.categories__content').insertAdjacentHTML("beforeend", template2)


    });

}

function chooseCategory() {
    const card = document.querySelectorAll(".categories__card"),
        categories = document.querySelector(".categories"),
        modules = document.querySelectorAll(".categories__modules"),
        close = document.querySelector(".categories__closeIcon");

    card.forEach(function (el) {
        el.addEventListener("click", selectCategory)
    });

    close.addEventListener("click", closeSidebar);

    function selectCategory(e) {
        var cardTarget = e.currentTarget;
        var cardLabel = cardTarget.dataset.label;

        document.querySelector(".categories").classList.add("collapse");

        card.forEach(function (el) {
            el.classList.remove("selected");
        });

        modules.forEach(function (el) {
            el.classList.remove("active");
        });

        document.querySelector(".categories__content").style.display = "flex";

        cardTarget.classList.add("selected");

        document.querySelector("#" + cardLabel).classList.add("active");
        if (window.innerWidth <= 800) {
            categories.classList.add("close");
        }
    };

    function closeSidebar() {
        if (categories.classList.contains("close")) {
            categories.classList.remove("close");
        } else {
            categories.classList.add("close")
        }
    };
}

function populateCategory() {
    const modules = [{
            name: "Main Nav",
            type: "navigation",
            img: `${pathAssets}/modules/mainNav_thumb.png`,
            url: "modules/navigation/mainNav/mainNav.html"

        },
        {
            name: "Footer",
            type: "navigation",
            img: `${pathAssets}/modules/footer_thumb.png`,
            url: "modules/navigation/footer/footer.html"


        }, {
            name: "Simple Heading",
            type: "headings",
            img: `${pathAssets}/modules/simpleHeading_thumb.png`,
            url: "modules/headings/simpleHeading/simpleHeading.html"


        },
        {
            name: "Slider Heading",
            type: "headings",
            img: `${pathAssets}/modules/sliderHeading_thumb.png`,
            url: "modules/headings/sliderHeading/sliderHeading.html"


        },
        {
            name: "Wall of Text",
            type: "content",
            img: `${pathAssets}/modules/wot_thumb.png`,
            url: "modules/content/wot/wot.html"


        },
        {
            name: "Simple Media",
            type: "content",
            img: `${pathAssets}/modules/simpleMedia_thumb.png`,
            url: "modules/content/simpleMedia/simpleMedia.html"


        },
        {
            name: "CTA Block",
            type: "content",
            img: `${pathAssets}/modules/ctaBlock_thumb.png`,
            url: "modules/content/ctaBlock/ctaBlock.html"


        },
        {
            name: "CTA Block Dual",
            type: "content",
            img: `${pathAssets}/modules/ctaBlockDual_thumb.png`,
            url: "modules/content/ctaBlockDual/ctaBlockDual.html"


        },
        {
            name: "Content Media",
            type: "content",
            img: `${pathAssets}/modules/contentMedia_thumb.png`,
            url: "modules/content/contentMedia/contentMedia.html"


        },
        {
            name: "Info Icons",
            type: "content",
            img: `${pathAssets}/modules/infoIcons_thumb.png`,
            url: "modules/content/infoIcons/infoIcons.html"


        },
        {
            name: "Content Tabs",
            type: "content",
            img: `${pathAssets}/modules/contentTabs_thumb.png`,
            url: "modules/content/contentTabs/contentTabs.html"


        },
        {
            name: "Highlight Slider",
            type: "content",
            img: `${pathAssets}/modules/highlightSlider_thumb.png`,
            url: "modules/content/highlightSlider/highlightSlider.html"


        },
        {
            name: "Product Grid",
            type: "lists",
            img: `${pathAssets}/modules/productGrid_thumb.png`,
            url: "modules/lists/productGrid/productGrid.html"


        },
        {
            name: "Product Slider",
            type: "related",
            img: `${pathAssets}/modules/productSlider_thumb.png`,
            url: "modules/related/productSlider/productSlider.html"

        },

    ];


    modules.forEach(function (el) {

        let template = `
        <a class="categories__item" href="${el.url}" target="_blank">
            <figure class="categories__image">
                <img src="${el.img}">
            </figure>
            <p class="categories__itemTitle">${el.name}</p>
        </a>`;

        // Navigation
        if (el.type == "navigation") {
            document.querySelector("#navigation .categories__modulesContent").insertAdjacentHTML("beforeend", template);
        };

        // Headings
        if (el.type == "headings") {
            document.querySelector("#headings .categories__modulesContent").insertAdjacentHTML("beforeend", template);
        };

        // Content
        if (el.type == "content") {
            document.querySelector("#content .categories__modulesContent").insertAdjacentHTML("beforeend", template);
        };

        // Lists
        if (el.type == "lists") {
            document.querySelector("#lists .categories__modulesContent").insertAdjacentHTML("beforeend", template);
        };


        // Related
        if (el.type == "related") {
            document.querySelector("#related .categories__modulesContent").insertAdjacentHTML("beforeend", template);
        };

        // Functional
        if (el.type == "functional") {
            document.querySelector("#functional .categories__modulesContent").insertAdjacentHTML("beforeend", template);
        };


    });
};

getCategory();
chooseCategory();
populateCategory();

document.querySelector(".wrapper").style.height = window.innerHeight + "px";