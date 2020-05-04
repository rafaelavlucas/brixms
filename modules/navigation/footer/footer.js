/*********************************/
// Footer


function footer() {

    const footer = {
        name: "Brand Name",
        text: "All Rights Reserved",
        link1: "Privacy Policy",
        link1url: "#",
        link2: "Cookie Policy",
        link2url: "#"
    };

    const day = new Date(),
        year = day.getFullYear();

    let templateFooter = `
        <p class="footer__text">${year} © ${footer.name} —  ${footer.text}</p>
        <div class="footer__links">
            <a href="${footer.link1url}" class="footer__link hiperlink">${footer.link1}</a>
            <a href="${footer.link2url}" class="footer__link hiperlink">${footer.link2}</a>
        </div>`;

    document.querySelector('.footer').insertAdjacentHTML('beforeend', templateFooter);
};

footer();