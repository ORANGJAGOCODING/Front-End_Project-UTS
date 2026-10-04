document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('checkoutModal');
    document.getElementById('btnProceedPayment')?.addEventListener('click', () => {
        modal?.classList.add('active');
    });

    document.getElementById('btnCloseModal')?.addEventListener('click', () => {
        modal?.classList.remove('active');
    });

    document.getElementById('btnConfirmPay')?.addEventListener('click', () => {
        alert('Pesanan Anda sedang diproses ke pembayaran, silakan lanjutkan ke halaman pembayaran.');
        window.location.href = '../tiket/pembayaran.html';
    });
});

function updateDisplay() {
    const destinasiPaket = localStorage.getItem('destinasiPaket') || 'Singapore';
    document.querySelectorAll('.labelDestinasi').forEach(element=> {
        element.textContent = destinasiPaket;
    })

    const kotaAsalPaket = localStorage.getItem('kotaAsalPaket') || 'Jakarta';
    document.querySelectorAll('.labelAsal').forEach(element=> {
        element.textContent = kotaAsalPaket;
    })
}

updateDisplay();