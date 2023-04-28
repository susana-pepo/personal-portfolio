
//mobile nav un-wrapp
const hamburger = document.querySelector(".nav_btn_mobile");
const navMenu = document.querySelector(".nav_sublist");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach( n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

//anchor links for smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=> {
     anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
     });
});

