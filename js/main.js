const pathAssets = "https://rafaelavlucas.github.io/brixms/assets";

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

function showGrid() {
    const gridBtn = document.querySelector('.showGrid'),
        grid = document.querySelector('.grid');

    gridBtn.addEventListener('click', gridOn);

    function gridOn() {
        if (grid.classList.contains('show')) {
            grid.classList.remove('show');
            gridBtn.innerHTML = "show grid";
        } else {
            grid.classList.add('show');
            gridBtn.innerHTML = "hide grid";
        }
    };
}


showGrid();