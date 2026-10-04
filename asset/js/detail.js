document.addEventListener('DOMContentLoaded', () => {
    const insurance = document.getElementById('addonInsurance');
    const totalPrice = document.getElementById('totalPriceDisplay');
    const modalTotal = document.getElementById('modalTotalDisplay');
    const modal = document.getElementById('checkoutModal');

    insurance?.addEventListener('change', () => {
      const total = insurance.checked ? 'Rp 3.040.000' : 'Rp 2.995.000';
      if (totalPrice) totalPrice.textContent = total;
      if (modalTotal) modalTotal.textContent = total;
    });

    document.getElementById('btnProceedPayment')?.addEventListener('click', () => {
      modal?.classList.add('active');
    });

    document.getElementById('btnCloseModal')?.addEventListener('click', () => {
        modal?.classList.remove('active');
    });

    document.getElementById('btnConfirmPay')?.addEventListener('click', () => {
      alert('Pesanan Anda sedang diproses ke pembayaran, silakan lanjutkan ke halaman pembayaran.');
      modal?.classList.remove('active');
    });
});
