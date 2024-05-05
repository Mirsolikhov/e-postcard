let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}
function myFunction() {
   // Get the snackbar DIV
   var x = document.getElementById("snackbar");
 
   // Add the "show" class to DIV
 x.className = "show";
 
   // After 3 seconds, remove the show class from DIV
 setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 }