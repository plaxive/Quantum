

const proLink = document.querySelector(".promotion");
const navTag = document.querySelector("nav");
const closeLink = document.getElementById("close_btn");

closeLink.addEventListener("click", function close() {
  proLink.style.display = "none";
  navTag.style.margin = "0.5rem 0"
});


const hide= document.querySelector("hideIcon");
function opennav() {
  const open = document.querySelector(".side_bar");
  
  open.style.display = "flex";
} 
function close_nav() {
  const close = document.querySelector(".side_bar");
  
  close.style.display = "none"
  
}


const navBar = document.querySelector("nav");
const navLinks = document.querySelectorAll("li")
window.addEventListener("scroll", () =>{
  if (window.scrollY > 0) {
    navBar.style.background = "#7F00FF";
    navLinks.style.color = "#7F00FF";
  }
  else{
    navBar.style.background = "hsl(0, 0%, 19%)"
  }
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("active").style.display = "flex";
  } else {
    document.getElementById("active").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

