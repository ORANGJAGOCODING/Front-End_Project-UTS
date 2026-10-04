document.querySelectorAll('.explore-item-button').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const exploreItem = event.currentTarget.closest('.explore-item');
        const destinasiPaket = exploreItem.querySelector('h2').textContent;

        localStorage.setItem('destinasiPaket', destinasiPaket);

        window.location.href = event.currentTarget.href;
    });
});