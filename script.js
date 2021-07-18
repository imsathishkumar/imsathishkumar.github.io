const menuButton = document.getElementById('menu-btn');
const closeButton = document.getElementById('close-btn');
const sideBar = document.getElementById('sidebar');

const links = sideBar.querySelectorAll('a');

function openSideBar(){
    sideBar.classList.remove('-mr-80');
    closeButton.classList.remove('hidden');
    menuButton.classList.add('hidden');
}

function closeSideBar(){
    sideBar.classList.add('-mr-80');
    closeButton.classList.add('hidden');
    menuButton.classList.remove('hidden');
}

menuButton.addEventListener('click',openSideBar);
closeButton.addEventListener('click',closeSideBar);
links.forEach(link => {
    link.addEventListener('click',closeSideBar);
})
