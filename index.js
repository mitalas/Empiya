// declare variables
let menu = document.getElementById('menu');
let nav = document.getElementById('navbar');
const searchbox = document.getElementById('search-box');
const btn = document.getElementById('btn');
const navbar = document.querySelector('.nav');

window.onload = () =>{
 navbar.style.background = '#030303d0'
 nav.classList.remove('active');
searchbox.classList.remove('active');
}


menu.onclick = () =>{
 menu.classList.toggle('fa-times');
 nav.classList.toggle('active');
 searchbox.classList.remove('active');
}

btn.onclick = () =>{
 searchbox.classList.toggle('active');
 menu.classList.remove('fa-times');
 nav.classList.remove('active');
}

window.onscroll = () =>{
 navbar.style.background = 'none'
 nav.classList.remove('active');
searchbox.classList.remove('active');
}
