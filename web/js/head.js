$(function () {
    $(".toggle").click(function () {
        console.log("토글 click")
        $(".headNav").slideToggle();
    });
});