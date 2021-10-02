const planTabs = document.querySelector(".plan-taps") ;
planTabs.addEventListener("click",function(e){
if(e.target.classList.contains("plan-tap-item")&& !e.target.classList.contains("active"))
{
const target = e.target.getAttribute("data-target");
// console.log(target);
planTabs.querySelector(".active").classList.remove("active");
e.target.classList.add("active");
const planSection = document.querySelector(".plan-section");
planSection.querySelector(".plan-tap-content.active").classList.remove("active");
planSection.querySelector(target).classList.add("active");

}
})

AOS.init();
