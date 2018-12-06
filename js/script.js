
function openNav() {
    document.getElementById("mySidenav").style.visibility = 'visible';
    document.querySelector('body').style.position = 'fixed';
    document.querySelector('.sidenav').classList.remove('slideOutRight');
    document.querySelector('.sidenav').classList.add('slideInRight');
    document.querySelector('.links-items').classList.add('active-border'); 

}

function closeNav() {
    document.querySelector('.sidenav').classList.remove('slideInRight');
    document.querySelector('.sidenav').classList.add('slideOutRight');
    document.querySelector('body').style.position = 'relative';
    document.getElementById("mySidenav").style.visibility = 'hidden';
}
