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
