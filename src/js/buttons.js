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
    const urakointiKorttiBtn = document.querySelector('#urakointiKortti');
    if(urakointiKorttiBtn){
        urakointiKorttiBtn.addEventListener('click', () => {
            window.location.href ='urakointi.html'
        });
    }
    const tyopaikatBtn= document.querySelector('#tyopaikatBtn');
    if(tyopaikatBtn) {
        tyopaikatBtn.addEventListener('click', () => {
            window.location.href= 'tyopaikat.html'
        });
    }
    const tarvikeMyyntiBtn= document.querySelector('#tarvikeMyyntiBtn');
    if (tarvikeMyyntiBtn){
        tarvikeMyyntiBtn.addEventListener('click', () => {
            window.location.href = 'tarvikemyynti.html'
        });
    }
    const kosteusvauriotBtn = document.querySelector('#kosteusvauriotBtn');
    if (kosteusvauriotBtn) {
        kosteusvauriotBtn.addEventListener('click',() => {
            window.location.href = 'kuivaustyot.html'
        });
    }
    const yhteystiedotBtn = document.querySelector('#yhteystiedotBtn');
    if (yhteystiedotBtn) {
        yhteystiedotBtn.addEventListener('click', () => {
            window.location.href = "yhteystiedot.html"
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