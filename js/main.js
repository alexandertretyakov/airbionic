window.addEventListener('load', function() {
    var click = document.querySelectorAll('dt');
    var body = document.querySelectorAll('dd');

    click[0].addEventListener('click', function () {
        body[0].classList.toggle('open')
    });

    click[1].addEventListener('click', function () {
        body[1].classList.toggle('open')
    });

    click[2].addEventListener('click', function () {
        body[2].classList.toggle('open')
    });

    click[3].addEventListener('click', function () {
        body[3].classList.toggle('open')
    });
});
