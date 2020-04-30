window.addEventListener("load", event => {

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animeModules')
            }
        });
    });

    function animeModules() {
        document.querySelectorAll('section').forEach(el => observer.observe(el))
        document.querySelectorAll('header').forEach(el => observer.observe(el))
    }
    window.addEventListener('scroll', function () {
        animeModules();
    })
    animeModules();

});