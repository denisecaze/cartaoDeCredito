var cardNumber = prompt("VÁLIDO OU NÃO?\nDigite o número do seu cartão de crédito:");

function isValidCard(num) {
  var outputMessage = document.getElementById("message");
  var cardReverse = num.split("").reverse().join("");
  var timesArray = [];
  var sumArray = [];
  var sum = 0;
  if (num === "" || isNaN(num)) {
    alert("Você precisa digitar um número.");
  } else {
    for (var i = 0; i < cardReverse.length; i++) { 
      if (i % 2 !== 0) {
        timesArray.push(parseInt(cardReverse[i] * 2));
      } else {
        timesArray.push(parseInt(cardReverse[i]));
      }
    }
    for (var j = 0; j < timesArray.length; j++) {
      if (timesArray[j] >= 10 && timesArray[j] <= 18) {
        sumArray.push(timesArray[j] - 9);
      } else {
        sumArray.push(timesArray[j]);
      }
    }
    for (var z = 0; z < sumArray.length; z++) {
      sum += parseInt(sumArray[z]);
    }
    if (sum % 10 === 0) {
      outputMessage.innerHTML = "Cartão válido! Aê!";
    } else {
      outputMessage.innerHTML = "Ô, ou... Cartão inválido!";
    }
  }
}

isValidCard(cardNumber);