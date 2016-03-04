﻿$(function() {
    $(window).load(function() {
        $(".loading").delay(500).fadeOut();
    });
    var progress = 0;
    $("img").load(function() {
        progress += 100 / $("img").length;
        var percent = Math.round(progress) + "%";
        $(".txt").text(percent);
        $(".bar").css("width", percent);
    });
});