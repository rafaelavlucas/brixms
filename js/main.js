window.addEventListener("load", event => {
    const section = document.querySelectorAll('section'),
        header = document.querySelectorAll('header');

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.intersectionRatio > 0) {
                section.forEach(function (el) {
                    el.classList.add("animeModules")
                });
                header.forEach(function (el) {
                    el.classList.add("animeModules")
                })
            }

        });
    });

    window.addEventListener('scroll', function () {
        document.querySelectorAll('section').forEach(el => observer.observe(el))
        document.querySelectorAll('header').forEach(el => observer.observe(el))
    })

});