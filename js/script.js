function generatePassword() {
  var length = document.getElementById("length").value;
  var uppercase = document.getElementById("uppercase").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var special = document.getElementById("special").checked;
  var charset = "";
  var password = "";

  if (uppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (special) {
    charset += "!@#$%^&*()";
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

function copyPassword() {
  var resultElement = document.getElementById("result");
  var password = resultElement.textContent;

  var tempInput = document.createElement("input");
  tempInput.type = "text";
  tempInput.value = password;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

document.getElementById("generate").addEventListener("click", function () {
  var length = document.getElementById("length").value;
  var minLength = 5;
  var maxLength = 30;

  if (length < minLength || length > maxLength) {
    alert("Tamanho inválido! Insira um número entre " + minLength + " e " + maxLength + ".");
    return;
  }

  var resultElement = document.getElementById("result");
  resultElement.textContent = generatePassword();
});

document.getElementById("copy").addEventListener("click", function () {
  copyPassword();
});