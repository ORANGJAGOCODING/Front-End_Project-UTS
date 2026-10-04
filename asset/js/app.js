document.addEventListener("DOMContentLoaded", () => {
    const profil = document.getElementById('profil');
    const profilDropdown = document.getElementById('profilDropdown');
    const inbox = document.getElementById('inbox');
    const login = document.getElementById('login');
    const daftar = document.getElementById('daftar');
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin === "true") {
        profil.classList.add('show');
        inbox.classList.add('show');
        login.classList.add('hide');
        daftar.classList.add('hide');
    } else {
        profil.classList.remove('show');
        inbox.classList.remove('show');
        login.classList.remove('hide');
        daftar.classList.remove('hide');
    }

    if (logout) {
        logout.addEventListener('click', (event) => {
            event.preventDefault();    
            const konfirmasi = confirm("Apakah Anda yakin ingin keluar?");
            if (konfirmasi) {
                localStorage.removeItem("isLogin");
                window.location.reload();
            }
        });
    }

    if (profil && profilDropdown) {
        profil.addEventListener('click', (event) => {
            event.stopPropagation();
            profilDropdown.classList.toggle('show');
        });

        document.addEventListener('click', (event) => {
            if (!profilDropdown.contains(event.target) && !profil.contains(event.target)) {
                profilDropdown.classList.remove('show');
            }
        });
    }
});

document.getElementById('linkPaket').addEventListener('click', (event) => {
    event.preventDefault();
    const destinasiPaket = localStorage.getItem('destinasiPaket');

    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        if (destinasiPaket) {
        window.location.href = '../paket/paket.html';
        } else {
        window.location.href = '../paket/explore.html';
        }
    } else {
        if (destinasiPaket) {
        window.location.href = 'pages/paket/paket.html';
        } else {
        window.location.href = 'pages/paket/explore.html';
        }
    }
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};