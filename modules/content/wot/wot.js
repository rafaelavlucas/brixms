/*********************************/
// Wall of Text

function wot() {
    const wot = [{
            class: "",
            title: "Wall of Text",
            subtitle: "Subtitle if needed",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },
        {
            class: "neu-02",
            title: "Wall of Text with a very large and complex title",
            subtitle: "Very large and complex subtitle",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta02"
        },
        {
            class: "neu-08 center",
            title: "Wall of Text",
            subtitle: "With dark background and center alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },
        {
            class: "aside",
            title: "Wall of Text",
            subtitle: "Aside alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },
        {
            class: "aside neu-02",
            title: "Wall of Text with a very large and complex title",
            subtitle: "Aside alignment with larger subtitle",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta02"
        },

    ];

    wot.forEach(function (el) {
        let template = `
        <section class="wot ${el.class}">
        <div class="wot__wrapper">
            <div class="wot__heading anime">
                <h2 class="wot__title">${el.title}</h2>
                <h3 class="wot__subtitle">${el.subtitle}</h3>
            </div>
            <div class="wot__text anime">
                <p class="wot__description">${el.text}</p>
                <div class="ctaContainer anime"><a href="" class="cta ${el.ctaStyle}">${el.ctaText}</a></div>
            </div>
        </div>
    </section>`;

        document.querySelector('.module').insertAdjacentHTML("beforeend", template);
    })
};
wot();