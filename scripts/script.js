$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = $(this).data('include') + '.html'
        $(this).load(file)
    })
})

function openMenu() {
    document.getElementById("mobile-nav").style.height = "100%";
}

function closeNav() {
    document.getElementById("mobile-nav").style.height = "0%";
}
