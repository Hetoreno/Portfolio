/* rellax JS */
var rellax = new Rellax('.rellax',{
  center:true
});

/* Mobile Nav scroll */
const mobileNav = document.querySelector(".mobile-nav");

window.addEventListener("scroll",()=>{
    if (window.pageYOffset > 400){
      mobileNav.classList.add("active");
    } else {
      mobileNav.classList.remove("active");
    }
})
