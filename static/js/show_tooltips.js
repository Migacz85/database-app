$(function () {
    $('[data-toggle="tooltip"], .tooltip').tooltip();
    $('[data-toggle="tooltip"], .tooltip').tooltip("show");
    $("button").click(function () {
        $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
    });
    $(".card-header").click(function () {
        $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
    });
    $(".card-body").click(function () {
        $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
    });
});