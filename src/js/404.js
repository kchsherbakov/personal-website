// Fire parallax initialization on page load
window.addEventListener('load', initParallaxScene, false);

// document.getElementById('menu-toggle').addEventListener('click', function () {
//     let page = document.getElementsByClassName('page-home')[0];
//     page.classList.toggle('menu_open');
// });
//
// document.getElementsByClassName('menu__nav')[0].addEventListener('click', function () {
//     let page = document.getElementsByClassName('page-home')[0];
//     page.classList.remove('menu_open');
// });

function initParallaxScene() {
    let scene = document.getElementById('scene');
    let parallaxInstance = new Parallax(scene, {
        selector: '.layer'
    });
    // parallaxInstance.selector = 'div.app';
    parallaxInstance.onReady(window.alert('asdasd'));
}