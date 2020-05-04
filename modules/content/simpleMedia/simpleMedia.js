/*********************************/
// Simple Media


function simpleMedia() {

    const simpleMedia = [{
            img: `${pathAssets}/images/img02.jpg`,
            alt: "image alt",
            class: "",
            text: ""
        },
        {
            img: `${pathAssets}/images/img10.jpg`,
            alt: "image alt",
            class: "video",
            text: ""
        },
        {
            img: `${pathAssets}/images/img04.jpg`,
            alt: "image alt",
            class: "map",
            text: "View"
        },
    ];

    simpleMedia.forEach(function (el) {
        let template = `
            <section class="simpleMedia ${el.class}">
                <div class="simpleMedia__element">${el.text}</div>
                <figure class="simpleMedia__image">
                    <img src="${el.img}" alt="${el.alt}">
                </figure>
            </section>`;
        document.querySelector('.module').insertAdjacentHTML('beforeend', template);
    });

};

simpleMedia();


/*********************************/
//Spacing
document.querySelectorAll(".simpleMedia").forEach(function (el) {
    let template = `<div class="spacing"></div>`;
    el.insertAdjacentHTML("afterend", template);
});