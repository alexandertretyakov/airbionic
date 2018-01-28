window.addEventListener('load', function() {
    document.querySelector('.module--faq').addEventListener('click', function(event) {
        var el = event.target.parentNode;
        if (el.tagName === 'DT') {
            el.classList.toggle('open');
        }
    });
});