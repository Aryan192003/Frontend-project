const nav = document.querySelector(".primary-navigation");
const navtoggle = document.querySelector(".mobile-nav-toggle");

navtoggle.addEventListener("click", ()=> {

    const visiblity = nav.getAttribute("data-visible");

    if (visiblity=="false") {
        nav.setAttribute("data-visible",true);
    }
    else{
        nav.setAttribute("data-visible",false);
    }
    
})