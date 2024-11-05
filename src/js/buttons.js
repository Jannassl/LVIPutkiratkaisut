document.addEventListener('DOMContentLoaded', () => {
    const etusivuBtn = document.querySelector('#etusivuBtn');
    if (etusivuBtn) {
        etusivuBtn.addEventListener('click', () => {
            window.location.href = 'etusivu.html';
        });
    }

    const yritysBtn = document.querySelector('#yritysBtn');
    if (yritysBtn) {
        yritysBtn.addEventListener('click', () => {
            window.location.href = 'yritys.html';
        });
    }

    const huoltoKorttiBtn = document.querySelector('#huoltoKortti');
    if (huoltoKorttiBtn) {
        huoltoKorttiBtn.addEventListener('click', () => {
            window.location.href = 'huoltotyot.html';
        });
    }
    const h1Button = document.querySelector('#h1Button');
    if (h1Button) {
        h1Button.addEventListener('click', () => {
           window.location.href = 'etusivu.html'
        });
    }

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
});