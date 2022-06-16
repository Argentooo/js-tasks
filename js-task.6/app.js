/*
1 - Население Bishkek City равняется 2000000 жителей. Население New Balykchy равняется 1000 жителей. Напишите программу, которая определяет разницу в числе жителей между двумя городами. - 10 баллов
*/

let populationOfBishkekCity = 2000000;
let populationOfNewBalykchy = 1000;
let populationDifference = populationOfBishkekCity - populationOfNewBalykchy;
console.log(populationDifference);

/*
2 - В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10. Подсчитать площадь дома, свободную площадь двора и длину забора. Примечание: в углу, где дом, забора нет. - 10
 */

let yardRectangleA = 50;
let yardRectangleB = 30;
let houseRectangleA = 20;
let houseRectangleB = 10;
let yardRectangle = (yardRectangleA + yardRectangleB) * 2;
let houseRectangle = (houseRectangleA + houseRectangleB) * 2;
let yardAndHouseRectangle = yardRectangle - houseRectangle;
console.log("Площадь дома: " + houseRectangle);
console.log("Свободная площадь двора: " + yardAndHouseRectangle);
console.log(
  "Длина забора: " + (yardRectangle - (houseRectangleA + houseRectangleB))
);

/*
3 - В браузере запрашиваются два числа. Если первое больше второго, то вычислить их сумму, иначе - произведение. После этого компьютер должен вывести alert ЗАДАЧА РЕШЕНА. - 10
*/

let number = Number(prompt("Write a number: "));
let number2 = Number(prompt("Write a second number: "));

if (number > number2) {
  alert("ЗАДАЧА РЕШЕНА.");
  document.write(number + number2);
} else {
  alert("ЗАДАЧА РЕШЕНА.");
  document.write(number * number2);
}

/*
 4 - Дракон каждый год отращивает по три головы, но после того, как ему исполнится 100 лет - только по две. Сколь-ко голов и глаз у дракона, которому N лет? - 10
 */

let dragonHeadsBeforeHundred = 3;
let dragonHeadsAfterHundred = 2;
let dragonEyesBeforeHundred = 6;
let dragonEyesAfterHundred = 4;
let howOldIsDragon = Number(prompt("Write a number: "));

if (howOldIsDragon < 100) {
  document.write("Dragon heads: " + howOldIsDragon * dragonHeadsBeforeHundred);
  document.write("Dragon eyes: " + howOldIsDragon * dragonEyesBeforeHundred);
} else {
  document.write(
    "Dragon heads: " + (howOldIsDragon * dragonHeadsAfterHundred - 198 + 297)
  );
  document.write(
    "Dragon eyes: " + (howOldIsDragon * dragonEyesAfterHundred - 396 + 594)
  );
}

/*
5 - Пусть браузер, узнав возраст человека, дальнейшую беседу ведет по двум вариантам. Если возраст больше 17, то компьютер должен задать вопрос: "В каком институте ты учишься?" и получив ответ, глубокомысленно заметить "Хороший институт". Если же возраст меньше или равен 17, то соответственно - "В какой школе ты учишься?" и "Неплохая школа". После этого, каков бы ни был вариант, компьютер должен попрощаться: "До следующей встречи!". - 10
*/

let howOldIsUser = Number(prompt("How old are you? "));

if (howOldIsUser > 17) {
  prompt("В каком институте ты учишься?");
  alert("Хороший институт");
  alert("До следующей встречи!");
} else if (howOldIsUser <= 17) {
  prompt("В какой школе ты учишься?");
  alert("Неплохая школа");
  alert("До следующей встречи!");
}
