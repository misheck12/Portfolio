function menuFunction() {
    const links = document.getElementById('mobile-menu-container');
    if (links.style.display === 'block') {
    links.style.display = 'none';
    } else {
    links.style.display = 'block';

}

}

document.querySelector('.active-close').addEventListener('click', menuFunction);