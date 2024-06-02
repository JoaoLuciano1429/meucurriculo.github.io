function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

document.getElementById("ageDisplay").innerText = getAge("2003/09/06");

const certBtn = document.getElementById("viewCert");
const showingCert = document.querySelector(".certificates-modal");
const closeBtn = document.getElementById("closeCert");

certBtn.addEventListener("click", () => {
  showingCert.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  showingCert.classList.remove("show");
});

window.onscroll = function () {
  const toTopButton = document.getElementById("toTop");
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    toTopButton.classList.add("show");
  } else {
    toTopButton.classList.remove("show");
  }
};

console.info(
  "Caso não queira visualizar os certificados em forma de slides, acesse este link abaixo para download:"
);
console.log(
  "https://drive.google.com/drive/folders/177oecUc4tGtRGWiPhJdtzKi4ynWsw7bO?usp=sharing"
);

console.info(
  "Este site é hospedado pelo Github Pages, cujos arquivos fonte estão no repositório abaixo (Recomendado ler o README.md para informações sobre atualizações):"
);
console.log("https://github.com/JoaoLuciano1429/meucurriculo.github.io");
