/*********************************/
// Content Media

function contentMedia() {
    const contentMedia = [{
            class: "",
            img: `${pathAssets}/images/img01.jpg`,
            alt: "image alt",
            title: "Content Media",
            subtitle: "With left alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },
        {
            class: "right neu-02",
            img: `${pathAssets}/images/img02.jpg`,
            alt: "image alt",
            title: "Content Media with a very large and complex title",
            subtitle: "With left alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },
        {
            class: "vertical",
            img: `${pathAssets}/images/img12.jpg`,
            alt: "image alt",
            title: "Content Media",
            subtitle: "With left and vertical alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta02"
        },
        {
            class: "vertical right neu-08",
            img: `${pathAssets}/images/img12.jpg`,
            alt: "image alt",
            title: "Far far away, behind the world",
            subtitle: "With right and vertical alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },

    ];

    contentMedia.forEach(function (el) {
        let template = `
        <section class="contentMedia ${el.class}">
        <div class="contentMedia__wrapper">
            <figure class="contentMedia__image anime">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="contentMedia__content">
                <h2 class="contentMedia__title anime">${el.title}</h2>
                <h3 class="contentMedia__subtitle anime">${el.subtitle}</h3>
                <p class="contentMedia__description anime">${el.text}</p> 
                <div class="ctaContainer anime">
                    <a href="" class="cta ${el.ctaStyle}">${el.ctaText}</a>
                </div>
            </div> 
         </div>
         </section>`;

        document.querySelector('.module').insertAdjacentHTML("beforeend", template);
    })
};
contentMedia();