window.addEventListener("load", event => {

    // Anime Modules
    let delay = 1;
    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animeModules');
                entry.target.style.transitionDelay = `${delay}` * 0.2 + "s";
                delay++;
            }
        });
    });

    function animeModules() {
        document.querySelectorAll('section').forEach(el => observer.observe(el))
        document.querySelectorAll('header').forEach(el => observer.observe(el))
    }

    animeModules();


    // Content Tabs
    const tabLink = document.querySelectorAll(".contentTabs__tabLink"),
        tabContent = document.querySelectorAll(".contentTabs__content");

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
        document.querySelector(".contentTabs__tabContent").style.height = document.querySelector(".contentTabs__content.active").offsetHeight + "px";
    };
    getTabHeight();

});