function scrollFunction() {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("#header").css("background-color", "#4b0412");
        $("#navbar-logo").attr("src", "https://cdn.nad-edu.com.br/wp-content/uploads/2020/02/logo_oficial_branca_compress.png");
        $("#navbar-toggle").css("color", "#fff");
        if (screen.availWidth > 992){
            $(".nav-link").addClass("scroll");
        }
    } else {
        $("#header").css("background-color", "#fff");
        $("#navbar-logo").attr("src", "https://cdn.nad-edu.com.br/wp-content/uploads/2021/07/Logo-vermelha-230x90.png");
        $("#navbar-toggle").css("color", "#4b0412");
        if (screen.availWidth > 992){
            $(".nav-link").removeClass("scroll");
        }
    }
}

$(function() {
    window.onscroll = function() {scrollFunction()};
});
