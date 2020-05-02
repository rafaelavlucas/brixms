// Content Tabs Content - Tasting Notes
tastingNotes.forEach(function (el) {
    let template = `
        <div class="contentTabs__infoIcon infoIcon anime">
        <figure class="infoIcon__icon"><img src="${el.icon}" alt="${el.name}"></figure>
        <div class="infoIcon__text">
        <p class="infoIcon__title">${el.name}</p>
        <p class="infoIcon__description">${el.text}</p>
        </div>
        </div>`;

    document.getElementById("tab1").insertAdjacentHTML("beforeend", template);
});

// Content Tabs Content - Specs
specs.forEach(function (el) {
    let template = `
        <div class="contentTabs__infoIcon infoIcon anime">
        <figure class="infoIcon__icon"><img src="${el.icon}" alt="${el.name}"></figure>
        <div class="infoIcon__text">
        <p class="infoIcon__title">${el.name}</p>
        <p class="infoIcon__description">${el.text}</p>
        </div>
        </div>`;

    document.getElementById("tab2").insertAdjacentHTML("beforeend", template);

});

// Content Tabs - Download Tech Sheet Link
let templateLink = `
<div class="contentTabs__download anime">
    <a href="${techSheet.url}" class="ctaLink">
        <img class="ctaLink__icon" src="/../assets/icons-black/icon-88.svg">
        <span class="ctaLink__text">Download wine file</span>
    </a>
</div>`;

document.querySelector('.contentTabs__wrapper').insertAdjacentHTML("afterend", templateLink);

// Content Tabs - Functionality
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


// Info Icons - Food Pairing

foodPairing.forEach(function (el) {
    let template = `
        <div class="infoIcons__infoIcon infoIcon vertical anime">
            <figure class="infoIcon__icon"><img src="${el.icon}" alt="${el.name}"></figure>
            <div class="infoIcon__text">
                <p class="infoIcon__title">${el.name}</p>
            </div>
        </div>`;

    document.querySelector(".foodPairing .infoIcons__icons").insertAdjacentHTML("beforeend", template);

});