function updateDisplay() {
    const destinasiPaket = localStorage.getItem('destinasiPaket') || 'Singapore';
    document.querySelectorAll('.labelDestinasi').forEach(element=> {
        element.textContent = destinasiPaket;
    })

    const asal = document.getElementById('kotaAsal');
    const asalDefault = asal ? asal.value : 'Jakarta';
    const kotaAsal = localStorage.getItem('asal') || asalDefault;
    
    document.querySelectorAll('.labelAsal').forEach(element => {
        element.textContent = kotaAsal;
    })
}

updateDisplay();

const btnCari = document.getElementById('btnCari');
if (btnCari) {
    btnCari.addEventListener('click', () => {
        const asal = document.getElementById('kotaAsal');
        const pilihanAsal = asal.value;
        localStorage.setItem('kotaAsalPaket', pilihanAsal)
        updateDisplay();
    });
}

window.addEventListener('pageshow', () => {
    updateDisplay();
})

document.getElementById('kembali').addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('destinasiPaket');
    localStorage.removeItem('kotaAsalPaket');
    window.location.href = event.currentTarget.href;
});