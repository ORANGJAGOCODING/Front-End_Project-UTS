const formLogin = document.getElementById("formLogin");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerText = "👁";
    } else {
        passwordInput.type = "password";
        togglePassword.innerText = "👁";
    }
});

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dataUser = localStorage.getItem("user");

    if (dataUser === null) {
        tampilToast("Akun belum terdaftar", "error");
        return;
    }

    const user = JSON.parse(dataUser);

    if (email === user.email && password === user.password) {
        localStorage.setItem("isLogin", "true");
        tampilToast("Login berhasil", "success");

        setTimeout(function() {
            window.location.href = "../../index.html";
        }, 1500);
    } else {
        tampilToast("Email atau password salah", "error");
    }
});

function tampilToast(pesan, tipe) {
    const toast = document.getElementById("toast");
    toast.innerText = pesan;
    toast.classList.remove("success", "error");
    toast.classList.add(tipe);
    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 2000);
}