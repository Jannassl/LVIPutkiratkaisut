const etusivuBtn = document.querySelector('#etusivuBtn');

etusivuBtn.addEventListener('click', () => {
    window.location.href = 'etusivu.html';
});

const yritysBtn = document.querySelector('#yritysBtn');

yritysBtn.addEventListener('click', () => {
    window.location.href = 'yritys.html'
});

document.getElementById('hamburgerMenu').addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdownMenu = document.getElementById('hamburgerDropdownMenu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('hamburgerDropdownMenu');
    const isClickInside = dropdownMenu.contains(event.target) || document.getElementById('hamburgerMenu').contains(event.target);

    if (!isClickInside) {
        dropdownMenu.style.display = 'none';
    }
});