const menuBtn = document.querySelector('menu-btn');
const closeBtn = document.querySelector('close-btn');
const menu = document .querySelector('nav .container ul');

//add event lister//
menuBtn.addEventListener('click',() => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})