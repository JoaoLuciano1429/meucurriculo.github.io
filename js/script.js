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
const showingCert = document.querySelector("superbody");
const closeBtn = document.getElementById("closeCert");

certBtn.addEventListener("click", () => {
  showingCert.classList.add("showCert");
  closeBtn.classList.add("showCert");
});

closeBtn.addEventListener("click", () => {
  showingCert.classList.remove("showCert");
  closeBtn.classList.remove("showCert");
});

alert(
  `Note que em alguns dispostivos de telas de tamanhos diferentes essa página pode ser exibida de forma inviável.
  \nSugestão: Acesse esse site em um computador para uma melhor experiência.
  
  Para informações adicionais, acesse o console do navegador estando nesta página.`
);

console.info(
  "Caso não queira visualizar os certificados em forma de slides, acesse este link abaixo para download:"
);
console.log(
  "https://drive.google.com/drive/folders/177oecUc4tGtRGWiPhJdtzKi4ynWsw7bO?usp=sharing"
);
