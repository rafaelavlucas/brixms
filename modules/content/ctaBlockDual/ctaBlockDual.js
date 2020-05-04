/*********************************/
// CTA Block Dual

function ctaBlockDual() {
    const ctaBlockDual = [{
            class: "neu-08",
            img: "",
            title: "CTA Block Dual",
            subtitle: "with dark background",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01",
            class2: "neu-07",
            img2: "",
            title2: "CTA Block Dual",
            subtitle2: "with dark background",
            text2: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText2: "button",
            ctaStyle2: "cta01"
        },
        {
            class: "neu-02",
            img: "",
            title: "CTA Block Dual with light background",
            subtitle: "Subtitle if needed",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta02",
            class2: "neu-03",
            img2: "",
            title2: "CTA Block Dual with light background",
            subtitle2: "Subtitle if needed",
            text2: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText2: "button",
            ctaStyle2: "cta02"
        },
        {
            class: "neu-08",
            img: `${pathAssets}/images/img01.jpg`,
            title: "CTA Block Dual",
            subtitle: "with photo background",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01",
            class2: "neu-08",
            img2: `${pathAssets}/images/img02.jpg`,
            title2: "CTA Block Dual",
            subtitle2: "with photo background",
            text2: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText2: "button",
            ctaStyle2: "cta01"
        }

    ];

    ctaBlockDual.forEach(function (el) {
        let template = `
        <section class="ctaBlock dual">
        <div class="ctaBlock__wrapper anime ${el.class}">
            <figure class="ctaBlock__bgImage">
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
        <div class="ctaBlock__wrapper anime ${el.class2}">
            <figure class="ctaBlock__bgImage">
                <img src="${el.img2}" alt="${el.alt2}">
            </figure>
            <div class="ctaBlock__content">
            <div class="ctaBlock__text">
                <h2 class="ctaBlock__title anime">${el.title2}</h2>
                <h3 class="ctaBlock__subtitle anime">${el.subtitle2}</h3>
                <p class="ctaBlock__description anime">${el.text2}</p>
                <div class="ctaContainer anime"><a href="" class="cta ${el.ctaStyle2}">${el.ctaText2}</a></div>
                </div>
            </div>
        </div>
    </section>`;

        document.querySelector('.module').insertAdjacentHTML("beforeend", template);

    });

    const module = document.querySelectorAll(".ctaBlock");
    module.forEach(function (el) {
        const image = el.querySelectorAll(".ctaBlock__bgImage img");
        image.forEach(function (el) {
            if (!el.getAttribute('src')) {
                el.closest("figure").style.display = "none";
            }
            if (el.getAttribute('src')) {
                el.closest(".ctaBlock__wrapper").style.background = "transparent";
            }
        })
    });

};
ctaBlockDual();

/*********************************/
//Spacing
document.querySelectorAll(".ctaBlock").forEach(function (el) {
    let template = `<div class="spacing"></div>`;
    el.insertAdjacentHTML("afterend", template);
});