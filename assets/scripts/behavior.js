$(document).ready(function() {
    console.log('test');

    // jquery for tabs functionality - will need to have this populate with some form of 'data', recipes/ingredients?
    $("#ingredients").on('mouseover', function () {
        $("#ingredients").addClass("is-active")
    })
    $("#ingredients").on('mouseleave', function () {
        $("#ingredients").removeClass("is-active")
    })
    $("#recipes").on('mouseover', function () {
        $("#recipes").addClass("is-active")
    })
    $("#recipes").on('mouseleave', function () {
        $("#recipes").removeClass("is-active")
    })

    $("#drinks").on('mouseover', function () {
        $("#drinks").addClass("is-active")
    })
    $("#drinks").on('mouseleave', function () {
        $("#drinks").removeClass("is-active")
    })
    $("#steps").on('mouseover', function () {
        $("#steps").addClass("is-active")
    })
    $("#steps").on('mouseleave', function () {
        $("#steps").removeClass("is-active")
    })
})