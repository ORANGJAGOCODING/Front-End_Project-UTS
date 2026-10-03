document.addEventListener("DOMContentLoaded", function () {

    const isLogin = localStorage.getItem("isLogin");
    const user = localStorage.getItem("user");
    const namaUser = document.getElementById("namaUser");
    const emailUser = document.getElementById("emailUser");

    if (isLogin === "true" && user) {
        const users = JSON.parse(user);
        namaUser.textContent = users.username;
        emailUser.textContent = users.email;
    } else {
        window.location.href = "../auth/login.html";
    }

    if (logoutProfil) {
        logoutProfil.addEventListener('click', (event) => {
            event.preventDefault();    
            const konfirmasi = confirm("Apakah Anda yakin ingin keluar?");
            if (konfirmasi) {
                localStorage.removeItem("isLogin");
                window.location.reload();
            }
        });
    }
});