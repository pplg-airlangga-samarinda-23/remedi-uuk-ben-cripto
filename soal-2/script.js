document.querySelector("button").addEventListener("click", function() {
    // Mengambil nilai tinggi badan dari input siswa
    const siswa1 = parseFloat(document.getElementById("siswa1").value);
    const siswa2 = parseFloat(document.getElementById("siswa2").value);
    const siswa3 = parseFloat(document.getElementById("siswa3").value);
    const siswa4 = parseFloat(document.getElementById("siswa4").value);
    const siswa5 = parseFloat(document.getElementById("siswa5").value);

    // Memastikan semua input memiliki angka yang valid
    if (isNaN(siswa1) || isNaN(siswa2) || isNaN(siswa3) || isNaN(siswa4) || isNaN(siswa5)) {
        alert("Harap masukkan angka yang valid pada semua input.");
        return;
    }

    // Menghitung rata-rata tinggi badan
    const totalTinggi = siswa1 + siswa2 + siswa3 + siswa4 + siswa5;
    const rataRata = totalTinggi / 5;

    // Menampilkan hasil rata-rata pada input hasil
    document.getElementById("hasil").value = rataRata.toFixed(2);
});
