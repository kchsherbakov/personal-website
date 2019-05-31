const VIEWPORT_WIDTH_MEDIUM = 768;
const VIEWPORT_WIDTH_LARGE = 992;

// Fire parallax initialization on page load
window.addEventListener('load', initParallaxScene);
window.addEventListener('onresize', initParallaxScene);

document.getElementById('menu-toggle').addEventListener('click', function () {
    let page = document.getElementsByClassName('page-home')[0];
    page.classList.toggle('menu_open');
});

document.getElementsByClassName('menu__nav')[0].addEventListener('click', function () {
    let page = document.getElementsByClassName('page-home')[0];
    page.classList.remove('menu_open');
});

function initParallaxScene() {
    let scene = document.getElementById('scene');
    let layers = document.getElementsByClassName('layer');
    let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewportWidth < VIEWPORT_WIDTH_MEDIUM) {
        layers[0].setAttribute('data-depth', '0.1');
        layers[1].setAttribute('data-depth', '0.6');
        scene.setAttribute('data-scalar-y', '20.0');
    } else if (viewportWidth >= VIEWPORT_WIDTH_MEDIUM && viewportWidth < VIEWPORT_WIDTH_LARGE) {
        layers[0].setAttribute('data-depth', '0.1');
        layers[1].setAttribute('data-depth', '0.4');
    } else {
        layers[0].setAttribute('data-depth', '0.1');
        layers[1].setAttribute('data-depth', '0.2');
    }

    let parallaxInstance = new Parallax(scene);
}