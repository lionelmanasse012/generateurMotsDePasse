const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = lowerCase.toUpperCase();
const number = "0123456789";
const symbols = "&é\"'(-è_çà)=§/.?,;:!*$ù}]@^\\`|[{#~";
const rangeValue = document.getElementById("inputRangeValue");

genererPassword.addEventListener("click", () => {
  let data = "";
  let password = "";

  if (passwordLowercase.checked) data += lowerCase;
  if (passwordUppercase.checked) data += upperCase;
  if (passwordNumber.checked) data += number;
  if (passwordSymbols.checked) data += symbols;
  
  if (data.length <= 0) {
    alert("Choisissez au moins un type de caractères !");
    return;
  }
  for (let i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  inputPassword.value = password;
});

inputPassword.addEventListener("click", () => {
  if (inputPassword.value === "Générateur des MDP") return;
  else {
    navigator.clipboard.writeText(inputPassword.value).then(() => {
      inputPassword.value = "Copié !";
      setTimeout(() => {
        inputPassword.value = "Générateur des MDP";
      }, 2000);
    });
  }
});
