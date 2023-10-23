$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = '../partials/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})

function openMenu() {
    // var x = document.getElementById("header-nav");
    // if (x.className === "header__nav") {
    //     x.className += " responsive";
    // } else {
    //     x.className = "header__nav";
    // }
    document.getElementById("mobile-nav").style.height = "100%";
}

function closeNav() {
    document.getElementById("mobile-nav").style.height = "0%";
}
