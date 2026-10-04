document.addEventListener('DOMContentLoaded', () => {
  const insurance = document.getElementById('addonBreakfast');
  const totalPrice = document.getElementById('totalPriceDisplay');
  const modalTotal = document.getElementById('modalTotalDisplay');
  const modal = document.getElementById('checkoutModal');

  if (insurance && totalPrice) {
    const basePriceText = totalPrice.textContent.trim();
    const baseNum = parseInt(basePriceText.replace(/[^0-9]/g, ''), 10) || 0;
    const addonNum = 150000;

    insurance.addEventListener('change', () => {
      const currentNum = insurance.checked ? (baseNum + addonNum) : baseNum;
      const formatted = 'IDR ' + currentNum.toLocaleString('id-ID');
      if (totalPrice) totalPrice.textContent = formatted;
      if (modalTotal) modalTotal.textContent = formatted;
    });
  }

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
