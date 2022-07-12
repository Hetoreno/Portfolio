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

//Work Experience modal
const learnMoreBtn = document.querySelectorAll(".modalBtn");

learnMoreBtn.forEach(event =>{
  event.addEventListener("click", ()=>{

    //displaying modals
    const modal = event.nextElementSibling;
    modal.classList.add("show");
    const shown = document.querySelector(".show");

    shown.style.transition = "all 0.4s";
    
  })
})

//closing modals
const closeBtn = document.querySelectorAll(".close");
    closeBtn.forEach(closing=>{
      closing.addEventListener("click",()=>{
        closing.closest(".modalContainer").classList.remove("show");
      })
    })