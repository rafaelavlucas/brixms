/*********************************/
// CTA Block

function ctaBlock() {
    const ctaBlock = [{
            class: "neu-02",
            img: "",
            title: "CTA Block with light background",
            subtitle: "Subtitle if needed",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },
        {
            class: "neu-08",
            img: "",
            title: "CTA Block with dark background",
            subtitle: "Very large and complex subtitle",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },
        {
            class: "neu-08",
            img: `${pathAssets}/images/img09.jpg`,
            title: "CTA Block with background image",
            subtitle: "Subtitle if needed",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta02"
        }

    ];

    ctaBlock.forEach(function (el) {
        let template = `
        <section class="ctaBlock ${el.class}">
        <div class="ctaBlock__wrapper">
            <figure class="ctaBlock__bgImage animeImg">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="ctaBlock__content">
            <div class="ctaBlock__text">
                <h2 class="ctaBlock__title anime">${el.title}</h2>
                <h3 class="ctaBlock__subtitle anime">${el.subtitle}</h3>
                <p class="ctaBlock__description anime">${el.text}</p>
                <div class="ctaContainer anime"><a href="" class="cta ${el.ctaStyle}">${el.ctaText}</a></div>
                </div>
            </div>
        </div>
    </section>`;

        document.querySelector('.module').insertAdjacentHTML("beforeend", template);

    });

    const module = document.querySelectorAll(".ctaBlock");
    module.forEach(function (el) {
        const image = el.querySelector(".ctaBlock__bgImage img");
        if (!image.getAttribute('src')) {
            image.closest("figure").style.display = "none";
        }
    });

};
ctaBlock();

/*********************************/
//Spacing
document.querySelectorAll(".ctaBlock").forEach(function (el) {
    let template = `<div class="spacing"></div>`;
    el.insertAdjacentHTML("afterend", template);
});