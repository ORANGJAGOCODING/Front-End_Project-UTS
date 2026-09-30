const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dataUser = localStorage.getItem("user");

    if (dataUser === null) {
        alert("Akun belum terdaftar");
        return;
    }

    const user = JSON.parse(dataUser);
    if (email === user.email && password === user.password) {
        localStorage.setItem("isLogin", "true");
        alert("Login berhasil");
        window.location.href = "../../index.html";
    } else {
        alert("Email atau password salah");
    }
});