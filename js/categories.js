const pathAssets = "https://rafaelavlucas.github.io/template/assets";

//Modules Categories

const modulesCategories = [{
        name: "Navigation",
        icon: `${pathAssets}/icons-brand/bra007.svg`,
        label: "navigation",
    },
    {
        name: "Headings",
        icon: `${pathAssets}/icons-brand/bra007.svg`,
        label: "headings",
    },
    {
        name: "Content",
        icon: `${pathAssets}/icons-brand/bra007.svg`,
        label: "content",
    },
    {
        name: "Lists",
        icon: `${pathAssets}/icons-brand/bra007.svg`,
        label: "lists",
    },
    {
        name: "Related",
        icon: `${pathAssets}/icons-brand/bra007.svg`,
        label: "related",
    },
    {
        name: "Functional",
        icon: `${pathAssets}/icons-brand/bra007.svg`,
        label: "functional",
    },
];


modulesCategories.forEach(function (el) {
    let template = `
    <div class="categories__card" data-label="${el.label}">
        <figure class="categories__icon"><img src="${el.icon}"></figure>
        <p class="categories__text">${el.name}</p>
        </div>`;


    document.querySelector('.categories__container').insertAdjacentHTML("beforeend", template)

});

const card = document.querySelectorAll(".categories__card"),
    categories = document.querySelector(".categories"),
    tabLink = document.querySelectorAll(".contentTabs__tabLink"),
    modules = document.querySelectorAll(".categories__modules"),
    close = document.querySelector(".categories__closeIcon");

card.forEach(function (el) {
    el.addEventListener("click", chooseCategory)
});

close.addEventListener("click", closeCategories);

function chooseCategory(e) {
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
    cardTarget.classList.add("active");
};

function closeCategories() {
    if (categories.classList.contains("close")) {
        categories.classList.remove("close");
    } else {
        categories.classList.add("close")
    }
};

if (window.innerWidth <= 800) {
    categories.classList.add("close");
}