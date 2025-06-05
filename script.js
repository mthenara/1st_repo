console.log("Website berhasil dimuat !");

function sayHello() {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");

  if (name === "") {
    greeting.textContent = "Silakan masukkan nama terlebih dahulu.";
  } else {
    greeting.textContent = `Halo, ${name}! Selamat datang di website ini.`;
  }
}
