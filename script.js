console.log("Website berhasil dimuat !");

function sayHello() {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");

  if (name === "") {
    greeting.textContent = "Silakan masukkan nama terlebih dahulu.";
  } else {
    // Tampilkan sapaan
    greeting.textContent = `Halo, ${name}! Selamat datang di website ini.`;

    // Simpan nama ke localStorage
    localStorage.setItem("namaPengguna", name);
  }
}

// Saat halaman dimuat, cek apakah nama sudah tersimpan
window.onload = function () {
  const savedName = localStorage.getItem("namaPengguna");
  const greeting = document.getElementById("greeting");

  if (savedName) {
    greeting.textContent = `Halo kembali, ${savedName}! Senang melihatmu lagi.`;
    document.getElementById("nameInput").value = savedName;
  }
};
/*function resetName() {
  localStorage.removeItem("namaPengguna");
  document.getElementById("greeting").textContent = "Nama telah dihapus.";
  document.getElementById("nameInput").value = "";
}*/

function goToPage2() {
  console.log("Tombol ke halaman 2 diklik!");
  window.location.href = "page2.html";
}

