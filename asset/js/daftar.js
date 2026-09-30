const formDaftar = document.getElementById("formDaftar");

formDaftar.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Pendaftaran berhasil");
    window.location.href = "login.html";
});