document.addEventListener("scroll", function(){
    const header = document.querySelector(".navi");

    if(window.scrollY > 480){
        header.classList.add("scrolled");
    }

    else {
        header.classList.remove("scrolled");
    }
});

