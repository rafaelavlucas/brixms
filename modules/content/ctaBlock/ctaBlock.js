/*********************************/
// CTA Block

function ctaBlock() {
    const ctaBlock = [{
            class: "neu-08",
            img: null,
            title: "CTA Block",
            subtitle: "Subtitle if needed",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },
        {
            class: "neu-08",
            img: null,
            title: "CTA Block with a very large and complex title",
            subtitle: "Very large and complex subtitle",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta02"
        },
        {
            class: "neu-02",
            img: `${pathAssets}/images/img08.jpg`,
            title: "CTA Block",
            subtitle: "With dark background and center alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta02"
        },
        {
            class: "neu-08",
            img: `${pathAssets}/images/img01.jpg`,
            title: "CTA Block",
            subtitle: "Subtitle if needed",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta02"
        },
        {
            class: "neu-08",
            img: `${pathAssets}/images/img09.jpg`,
            title: "CTA Block with a very large and complex title",
            subtitle: "Subtitle if needed",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta02"
        },

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
        console.log(image)
        if (!image.src) {
            image.style.display = "none"
        }
    });


};
ctaBlock();