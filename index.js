document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript wird geladen!');
    const searchBox = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn && searchBox) {
        searchBtn.addEventListener('click', performSearch);
        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        function performSearch() {
            const searchTerm = searchBox.value.trim();
            if (searchTerm) {
                alert('Suche nach: ' + searchTerm);
            } else {
                alert('Bitte Suchbegriff eingeben');
            }
        }
    } else {
        console.log('Such-Elemente nicht gefunden');
    }
    initDropdowns();
});
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    console.log('Dropdowns gefunden:', dropdowns.length);
    if (dropdowns.length === 0) {
        console.log('Keine Dropdowns gefunden');
        return;
    }
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        if (!link) {
            console.log('Nav-Link nicht gefunden in Dropdown');
            return;
        }
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Dropdown geklickt');
                dropdowns.forEach(other => {
                    if (other !== dropdown && other.classList.contains('active')) {
                        other.classList.remove('active');
                    }
                });
                dropdown.classList.toggle('active');
            }
        });
    });
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

function initFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                flipCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('active');
                    }
                });
                card.classList.toggle('active');
            }
        });
    });
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !e.target.closest('.flip-card')) {
            flipCards.forEach(card => {
                card.classList.remove('active');
            });
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    initFlipCards();
});
