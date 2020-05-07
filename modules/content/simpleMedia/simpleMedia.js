/*********************************/
// Simple Media


function simpleMedia() {

    const simpleMedia = [{
            img: `${pathAssets}/images/img02.jpg`,
            alt: "image alt",
            class: "",
            text: "",
            video: "",
            type: "section",
            url: ""
        },
        {
            img: `${pathAssets}/images/img10.jpg`,
            alt: "image alt",
            class: "video",
            text: "",
            video: "https://player.vimeo.com/video/277650563",
            type: "section",
            url: ""
        },
        {
            img: `${pathAssets}/images/img04.jpg`,
            alt: "image alt",
            class: "map",
            text: "View",
            video: "",
            type: "a",
            url: "https://www.google.com"
        },
    ];

    simpleMedia.forEach(function (el) {
        let template = `
            <${el.type} class="simpleMedia ${el.class}" data-video="${el.video}" href="${el.url}" target="_blank">
                <div class="simpleMedia__element">${el.text}</div>
                <figure class="simpleMedia__image">
                    <img src="${el.img}" alt="${el.alt}">
                </figure>
            </${el.type}>`;
        document.querySelector('.module').insertAdjacentHTML('beforeend', template);
    });

};

function openModalVideo() {
    const videoItem = document.querySelectorAll('.simpleMedia.video'),
        modalVideo = document.querySelector('.modal.video'),
        iconCloseVideo = document.querySelector('.modal__icon'),
        videoFrame = document.querySelector('.video .modal__video iframe');

    videoItem.forEach(function (el) {
        el.addEventListener("click", openVideo);
    })

    iconCloseVideo.addEventListener("click", closeVideo);


    function openVideo(e) {
        const videoSrc = e.currentTarget.dataset.video;
        videoFrame.src = videoSrc;
        modalVideo.classList.add('open');
        document.querySelector('body').style.overflow = "hidden";
    }

    function closeVideo() {
        modalVideo.classList.remove('open');
        videoFrame.src = "";
        document.querySelector('body').style.overflow = "initial";
    }
}


simpleMedia();
openModalVideo();


/*********************************/
//Spacing
document.querySelectorAll(".simpleMedia").forEach(function (el) {
    let template = `<div class="spacing"></div>`;
    el.insertAdjacentHTML("afterend", template);
});