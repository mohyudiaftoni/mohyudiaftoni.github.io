const homeCLik = document.querySelector(".home");
const imageProfil = document.querySelector(".imgProfil");
const animasiNama = document.querySelector(".animasi-nama");

homeCLik.addEventListener("click", (event) => {
  imageProfil.classList.add("animate__animated", "animate__backInDown", "animate__delay-1s");
  animasiNama.classList.add("animate__animated", "animate__backInLeft", "animate__delay-1s");
});
