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
  "Caso não queira visualizar os certificados em forma de slides, acesse este link abaixo para download:",
);
console.log(
  "https://drive.google.com/drive/folders/177oecUc4tGtRGWiPhJdtzKi4ynWsw7bO?usp=sharing",
);

console.info(
  "Este site é hospedado pelo Github Pages, cujos arquivos fonte estão no repositório abaixo (Recomendado ler o README.md para informações sobre atualizações):",
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

  // Verifica se é 23 de junho (Aniversário do Sonic)
  if (day === 23 && month === 6) {
    body.classList.add("cursor-sonic-default");
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
    if (day === 23 && month === 6) {
      element.classList.add("cursor-sonic-pointer");
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

const eventDayNotifier = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Janeiro é 0

  // Calcula o Dia do Programador (256º dia do ano)
  const year = date.getFullYear();
  const programmerDay = new Date(year, 0, 256); // Janeiro = 0
  const programmerDayDate = programmerDay.getDate();
  const programmerDayMonth = programmerDay.getMonth() + 1;

  if (day === 23 && month === 6) {
    alert("Hoje é o aniversário do Sonic! 🎉");
  }
  if (day === 25 && month === 12) {
    alert("Hoje é Natal! 🎄");
  }
  if (day === programmerDayDate && month === programmerDayMonth) {
    alert("Hoje é o Dia do Programador! 👨‍💻🎉");
  }
};

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", setCursorBasedOnDay);
document.addEventListener("DOMContentLoaded", eventDayNotifier);

const tel = document.getElementById("tel");
const mail = document.getElementById("mail");

tel.addEventListener("click", () => {
  window.open(`tel:${atob(tel.dataset.tel)}`, "_blank");
});

mail.addEventListener("click", () => {
  window.open(`mailto:${atob(mail.dataset.mail)}`, "_blank");
});

// Função para exibir telefone e email durante a impressão
const telPrint = document.createElement("span");
const mailPrint = document.createElement("span");
const showContactOnPrint = () => {
  const telElement = document.getElementById("tel");
  const mailElement = document.getElementById("mail");

  // Decodifica os valores em Base64
  const decodedTel = atob(telElement.dataset.tel);
  const decodedMail = atob(mailElement.dataset.mail);

  // Cria elementos temporários para exibição

  telPrint.id = "telPrint";
  telPrint.textContent = `${decodedTel}`;

  mailPrint.id = "mailPrint";
  mailPrint.textContent = `${decodedMail}`;

  // Adiciona os elementos ao DOM
  telElement.parentElement.appendChild(telPrint);
  mailElement.parentElement.appendChild(mailPrint);
};

const createh1 = document.createElement("h1");
const linkLinkedIn = document.querySelector('a[title="Meu LinkedIn"]');
const linkLinkedInPrint = document.createElement("span");
const linkGitHub = document.querySelector('a[title="Meu GitHub"]');
const linkGitHubPrint = document.createElement("span");
const linkPortfolio = document.querySelector('a[title="Meu Portfólio"]');
const linkPortfolioPrint = document.createElement("span");
const showLinksOnPrint = () => {
  const divContainer = document.querySelector(".container");
  const createSectionLinks = document.createElement("section");
  createSectionLinks.classList.add("print-links-section");

  createh1.textContent = "Meus Links";
  createh1.setAttribute("negrito", "");

  linkLinkedInPrint.setAttribute("normal", "");
  linkGitHubPrint.setAttribute("normal", "");
  linkPortfolioPrint.setAttribute("normal", "");

  linkLinkedInPrint.textContent = `LinkedIn: ${linkLinkedIn.href}`;
  linkGitHubPrint.textContent = `GitHub: ${linkGitHub.href}`;
  linkPortfolioPrint.textContent = `Portfólio: ${linkPortfolio.href}`;

  divContainer.appendChild(createSectionLinks);
  createSectionLinks.appendChild(createh1);
  createSectionLinks.appendChild(linkLinkedInPrint);
  createSectionLinks.appendChild(document.createElement("br"));
  createSectionLinks.appendChild(linkGitHubPrint);
  createSectionLinks.appendChild(document.createElement("br"));
  createSectionLinks.appendChild(linkPortfolioPrint);
};
// Adiciona o evento para antes da impressão
window.onbeforeprint = () => {
  showContactOnPrint();
  showLinksOnPrint();
};

window.onafterprint = () => {
  // Remove os elementos temporários após a impressão
  const telPrintElement = document.getElementById("telPrint");
  const mailPrintElement = document.getElementById("mailPrint");
  const linksSection = document.querySelector(".print-links-section");

  if (telPrintElement) telPrintElement.remove();
  if (mailPrintElement) mailPrintElement.remove();
  if (linksSection) linksSection.remove();
};
