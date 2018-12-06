
function openNav() {
    document.getElementById("mySidenav").style.visibility = 'visible';
    document.querySelector('.sidenav').classList.remove('slideOutRight');
    document.querySelector('.sidenav').classList.add('slideInRight');
}

function closeNav() {
    document.querySelector('.sidenav').classList.remove('slideInRight');
    document.querySelector('.sidenav').classList.add('slideOutRight');
    document.getElementById("mySidenav").style.visibility = 'hidden';
}
