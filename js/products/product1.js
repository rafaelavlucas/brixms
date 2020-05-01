// Product Content
const tastingNotes = [{
        name: "Colour",
        icon: "assets/icons-black/icon-2.svg",
        text: "cenas",
    },
    {
        name: "Aroma",
        icon: "assets/icons-black/icon-27.svg",
        text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres",
    },
    {
        name: "Palate",
        icon: "assets/icons-black/icon-28.svg",
        text: "cenas3",
    }
];

const specs = [{
        name: "Grapes",
        icon: "assets/icons-black/icon-32.svg",
        text: "cenas<br>cenas2<br>cenas3",
    },
    {
        name: "Specs",
        icon: "assets/icons-black/icon-35.svg",
        text: "cenas2",
    },
    {
        name: "Life",
        icon: "assets/icons-black/icon-40.svg",
        text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres",
    }
];

tastingNotes.forEach(function (el) {
    let template = `
        <div class="infoIcon">
        <figure class="infoIcon__icon"><img src="${el.icon}" alt="${el.name}"></figure>
        <div class="infoIcon__text">
        <p class="infoIcon__title">${el.name}</p>
        <p class="infoIcon__description">${el.text}</p>
        </div>
        </div>`;

    document.getElementById("tab1").insertAdjacentHTML("beforeend", template);

});

specs.forEach(function (el) {
    let template = `
        <div class="infoIcon">
        <figure class="infoIcon__icon"><img src="${el.icon}" alt="${el.name}"></figure>
        <div class="infoIcon__text">
        <p class="infoIcon__title">${el.name}</p>
        <p class="infoIcon__description">${el.text}</p>
        </div>
        </div>`;

    document.getElementById("tab2").insertAdjacentHTML("beforeend", template);

});

let template2 = `
<div class="contentTabs__download anime">
<a href="" class="ctaLink"><img class="ctaLink__icon" src="assets/icons-black/icon-28.svg"><span class="ctaLink__text">Download wine file</span></a>
</div>`;

document.querySelector('.contentTabs__wrapper').insertAdjacentHTML("afterend", template2);


// Content Tabs
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

function getTabHeight() {
    document.querySelector(".contentTabs__content").style.height = document.querySelector(".contentTabs__tabContent.active").offsetHeight + "px";
};
getTabHeight();