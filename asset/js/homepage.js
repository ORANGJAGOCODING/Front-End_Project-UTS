function salinKode(idElement, tombol) {
    const code = document.getElementById(idElement).innerText;

    navigator.clipboard.writeText(code).then(() => {
        const teksAsli = tombol.innerText;

        tombol.innerText = 'Tersalin!';
        tombol.classList.add('copied');

        setTimeout(() => {
        tombol.innerText = teksAsli;
        tombol.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin:', err);
    });
}

document.getElementById('linkPaketHome').addEventListener('click', (event) => {
    event.preventDefault();

    const destinasiPaket = localStorage.getItem('destinasiPaket');

    if (destinasiPaket) {
      window.location.href = 'pages/paket/paket.html';
    } else {
      window.location.href = 'pages/paket/explore.html';
    }
  });