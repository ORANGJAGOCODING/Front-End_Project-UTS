const btnKirim = document.getElementById("btnKirim");
const reviewList = document.getElementById("reviewList");

btnKirim.addEventListener("click", function() {
    const nama = document.getElementById("nama").value.trim();
    const rating = document.getElementById("rating").value;
    const ulasan = document.getElementById("ulasan").value.trim();

    if (nama === "" || ulasan === "") {
        alert("Nama dan ulasan harus diisi");
        return;
    }

    let bintang = "";

    if (rating === "5") {
        bintang = "★★★★★";
    } else if (rating === "4") {
        bintang = "★★★★☆";
    } else if (rating === "3") {
        bintang = "★★★☆☆";
    } else if (rating === "2") {
        bintang = "★★☆☆☆";
    } else {
        bintang = "★☆☆☆☆";
    }

    const reviewBaru = document.createElement("div");
    reviewBaru.classList.add("review-card");

    reviewBaru.innerHTML = `
        <p class="review-star">${bintang}</p>
        <p class="review-text">"${ulasan}"</p>
        <h4 class="review-name">${nama}</h4>
    `;

    reviewList.prepend(reviewBaru);

    document.getElementById("nama").value = "";
    document.getElementById("ulasan").value = "";

    alert("Ulasan berhasil dikirim");
});