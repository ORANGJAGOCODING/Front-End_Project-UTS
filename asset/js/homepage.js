const profil = document.getElementById('profil');
const profilDropdown = document.getElementById('profilDropdown');

    profil.addEventListener('click', (event) => {
      event.stopPropagation();
      profilDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
      if (!profilDropdown.contains(event.target) && !profil.contains(event.target)) {
        profilDropdown.classList.remove('show');
      }
    });