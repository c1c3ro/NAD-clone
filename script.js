window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.backgroundColor = "#4b0412";
        document.getElementById("navbar-logo").src = "https://cdn.nad-edu.com.br/wp-content/uploads/2020/02/logo_oficial_branca_compress.png"
        document.getElementById("navbar-toggle").style.color = "#fff";
        if (screen.availWidth > 992){
            console.log(screen.availWidth);
            const fakeImages = document.querySelectorAll(".nav-link");
            for (const fakeImage of fakeImages) {
                fakeImage.classList.add('scroll');
            }
        }
        
    } else {
        document.getElementById("header").style.backgroundColor = "#fff";
        document.getElementById("navbar-logo").src = "https://cdn.nad-edu.com.br/wp-content/uploads/2021/07/Logo-vermelha-230x90.png"
        document.getElementById("navbar-toggle").style.color = "#4b0412";
        console.log(document.querySelectorAll(".nav-item"));
        if (screen.availWidth > 992){
            console.log(screen.availWidth);
            const fakeImages = document.querySelectorAll(".nav-link");
            for (const fakeImage of fakeImages) {
                fakeImage.classList.remove('scroll');
            }
        }
    }
}