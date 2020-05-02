window.addEventListener("load", event => {

    // Anime Modules
    let delay = 1;
    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animeModules');
                //entry.target.style.transitionDelay = `${delay}` * 0.2 + "s";
                //delay++;
            }
        });
    });

    function animeModules() {
        document.querySelectorAll('section').forEach(el => observer.observe(el))
        document.querySelectorAll('header').forEach(el => observer.observe(el))
    }

    animeModules();


});


//show Grid 

const gridBtn = document.querySelector('.showGrid'),
    grid = document.querySelector('.grid');

gridBtn.addEventListener('click', showGrid);

function showGrid() {
    if (grid.classList.contains('show')) {
        grid.classList.remove('show');
        gridBtn.innerHTML = "show grid";
    } else {
        grid.classList.add('show');
        gridBtn.innerHTML = "hide grid";
    }
};