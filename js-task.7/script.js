/*
1 - Скрипт запрашивает ввести букву русского алфавита. Скрипт должен вывести сообщение какая эта буква - гласная или согласная
 */

/*
let vowels = ["а", "я", "у", "ю", "о", "е", "ё", "э", "и", "ы"];

let consonants = [
  "б",
  "в",
  "г",
  "д",
  "ж",
  "з",
  "й",
  "к",
  "л",
  "м",
  "н",
  "п",
  "р",
  "с",
  "т",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
];

let enterALetter = prompt("Enter a letter:");

for (let i = 0; i < vowels.length; i++) {
  if (enterALetter.toLowerCase() == vowels[i]) {
    document.write("Гласная");
  }
}

for (let b = 0; b < consonants.length; b++) {
  if (enterALetter.toLowerCase() == consonants[b]) {
    document.write("Согласная");
  }
}
*/

/* 
2 - “Калькулятор” - пользователь вводит с клавиатуры число, символ арифметического действия (+, -, *, /) и еще одно число, Скрипт должен вывести результат
*/

/*
let enterANumber = +prompt("Enter a Number:");
let enterArithmeticSymbol = prompt("Enter a arithmetic symbol:");
let enterANumber2 = +prompt("Enter a second Number:");
if (enterArithmeticSymbol == "+") {
  document.write(enterANumber + enterANumber2);
} else if (enterArithmeticSymbol == "-") {
  document.write(enterANumber - enterANumber2);
} else if (enterArithmeticSymbol == "*") {
  document.write(enterANumber * enterANumber2);
} else if (enterArithmeticSymbol == "/") {
  document.write(enterANumber / enterANumber2);
} else if (enterArithmeticSymbol == "%") {
  document.write(enterANumber % enterANumber2);
} else if (enterArithmeticSymbol == "**") {
  document.write(enterANumber ** enterANumber2);
}
*/

/*
 3 - Вывести в консоль все возможные сочетания из двух цифр - первая цифра может быть любой от 3 до 8, вторая любой от 0 до 7. Пример: 36, 44, 80 и т.д
 */
/*
while (true) {
  let writeANumber = +prompt("Write a number from 3 to 8");
  let writeASecondNumber = +prompt("Write a number from 0 to 7");
  if (
    writeANumber >= 3 &&
    writeANumber <= 8 &&
    writeASecondNumber >= 0 &&
    writeASecondNumber <= 7
  ) {
    document.write(
      "All kinds of combinations: " +
        writeANumber +
        writeASecondNumber +
        ", " +
        writeASecondNumber +
        writeANumber
    );
    break;
  }
}
*/
