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

// Função para definir o cursor baseado no dia
function setCursorBasedOnDay() {
  const body = document.body;
  const date = new Date();
  const dayOfWeek = date.getDay();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Janeiro é 0

  // Limpa qualquer cursor anteriormente definido
  body.className = "";

  // Define o cursor com base no dia da semana
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    // Segunda a sexta
    body.classList.add("cursor-yellow-dino-default");
  } else if (dayOfWeek === 6 || dayOfWeek === 0) {
    // Sábado e domingo
    body.classList.add("cursor-blue-dino-default");
  }

  // Verifica se é Natal (25 de dezembro)
  if (day === 25 && month === 12) {
    body.classList.add("cursor-christmas-default");
  }

  // Exemplo de como mudar cursores específicos ao interagir com elementos
  const pointerElements = document.querySelectorAll(".pointer");
  pointerElements.forEach((element) => {
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      element.classList.add("cursor-yellow-dino-pointer");
    } else if (dayOfWeek === 6 || dayOfWeek === 0) {
      element.classList.add("cursor-blue-dino-pointer");
    }
    if (day === 25 && month === 12) {
      element.classList.add("cursor-christmas-pointer");
    }
  });

  const waitElements = document.querySelectorAll(".wait");
  waitElements.forEach((element) => {
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      element.classList.add("cursor-yellow-dino-wait");
    } else if (dayOfWeek === 6 || dayOfWeek === 0) {
      element.classList.add("cursor-blue-dino-wait");
    }
    if (day === 25 && month === 12) {
      element.classList.add("cursor-christmas-wait");
    }
  });

  const progressElements = document.querySelectorAll(".progress");
  progressElements.forEach((element) => {
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      element.classList.add("cursor-yellow-dino-progress");
    } else if (dayOfWeek === 6 || dayOfWeek === 0) {
      element.classList.add("cursor-blue-dino-progress");
    }
    if (day === 25 && month === 12) {
      element.classList.add("cursor-christmas-progress");
    }
  });

  const notAllowedElements = document.querySelectorAll(".not-allowed");
  notAllowedElements.forEach((element) => {
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      element.classList.add("cursor-yellow-dino-not-allowed");
    } else if (dayOfWeek === 6 || dayOfWeek === 0) {
      element.classList.add("cursor-blue-dino-not-allowed");
    }
    if (day === 25 && month === 12) {
      element.classList.add("cursor-christmas-not-allowed");
    }
  });

  const textElement = document.querySelector(".text");

  if (day === 25 && month === 12)
    textElement.classList.add("cursor-christmas-text");
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", setCursorBasedOnDay);
