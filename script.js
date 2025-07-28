
function cekJawaban(jawaban) {
    let hasil = document.getElementById("hasil");
    if (jawaban === "C") {
        hasil.innerText = "Benar! Jakarta adalah ibu kota Indonesia.";
        hasil.style.color = "green";
    } else {
        hasil.innerText = "Salah. Coba lagi!";
        hasil.style.color = "red";
    }
}
