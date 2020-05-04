/*********************************/
// CTA Block

function simpleHeading() {
    const simpleHeading = [{
            title: "Simple Heading",
            subtitle: "",
            description: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
            img: `${pathAssets}/images/img10.jpg`,
            alt: "alt image",
            class: "neu-08"
        },
        {
            title: "Simple Heading",
            subtitle: "subtitle",
            description: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
            img: "",

            alt: "alt image",
            class: "neu-02"
        }, {
            title: "Simple Heading",
            subtitle: "subtitle",
            description: "",
            img: "",
            alt: "alt image",
            class: "neu-08"
        },

    ];

    simpleHeading.forEach(function (el) {
        let template = `
        <section class="simpleHeading ${el.class}">
        <figure class="simpleHeading__bgImage animeImg">
            <img src="${el.img}" alt="${el.alt}">
        </figure>
        <div class="simpleHeading__wrapper">
            <h2 class="simpleHeading__title anime">${el.title}</h2>
            <h3 class="simpleHeading__subtitle anime">${el.subtitle}</h3>
            <p class="simpleHeading__description anime">${el.description}</p>
        </div>
        </section>`;

        document.querySelector('.module').insertAdjacentHTML("beforeend", template);

    });

    const module = document.querySelectorAll(".simpleHeading");
    module.forEach(function (el) {
        const image = el.querySelector(".simpleHeading__bgImage img");
        if (!image.getAttribute('src')) {
            image.closest("figure").style.display = "none";
        }
    });

    if (document.querySelector('.simpleHeading__subtitle').innerHTML == "") {
        document.querySelector('.simpleHeading__subtitle').style.display = "none";
    };

    if (document.querySelector('.simpleHeading__description').innerHTML == "") {
        document.querySelector('.simpleHeading__description').style.display = "none";
    };

};
simpleHeading();

/*********************************/
//Spacing
document.querySelectorAll(".simpleHeading").forEach(function (el) {
    let template = `<div class="spacing"></div>`;
    el.insertAdjacentHTML("afterend", template);
});