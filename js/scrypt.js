let numbersTranslit = {
  3: {
    0: null,
    1: "Одна Тысяча",
    2: "Две Тысячи",
    3: "Три Тысячи",
    4: "Четыре Тысячи",
    5: "Пять Тысяч",
    6: "Шесть Тысяч",
    7: "Семь Тысяч",
    8: "Восемь Тысяч",
    9: "Девять Тысяч"
  },
  2: {
    0: null,
    1: "Сто",
    2: "Двести",
    3: "Триста",
    4: "Четыреста",
    5: "Пятьсот",
    6: "Шестьсот",
    7: "Семьсот",
    8: "Восемьсот",
    9: "Девятьсот"
  },
  1: {
    0: null,
    2: "Двадцать",
    3: "Тридцать",
    4: "Сорок",
    5: "Пятьдесят",
    6: "Шестьдесят",
    7: "Семьдесят",
    8: "Восемьдесят",
    9: "Девяносто"
  },
  0: {
    0: null,
    1: "Один",
    2: "Два",
    3: "Три",
    4: "Четыре",
    5: "Пять",
    6: "Шесть",
    7: "Семь",
    8: "Восемь",
    9: "Девять",
    10: "Десять",
    11: "Одиннадцать",
    12: "Двенадцать",
    13: "Тринадцать",
    14: "Четырнадцать",
    15: "Пятнадцать",
    16: "Шестнадцать",
    17: "Семнадцать",
    18: "Восемнадцать",
    19: "Девятнадцать"
  }
};


let input = document.getElementById('num');
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});

function getNumLenght(num) {
  let numbers = [];
  for (i = 0; num >= 1; i++) {
    numbers[i] = (Math.floor(num % 10));
    num /= 10;
  }
  return numbers;
}

function countNumber() {
  let numbers = input.value;
  if (numbers.length <=4) {
    numbers = getNumLenght(numbers);
    let result = toPhonetics(numbers, numbers.length);
    alert(result.join(' '));
  }
  else {
    return false;
  }
}

function toPhonetics(num, count) {
  let result = Array();
  let exeptionNum = num[1] + num[0].toString();
  if (count > 1 && exeptionNum < 20) {

    result[0] = numbersTranslit[0][Math.floor(exeptionNum)];
    let removedItems = num.splice(0, 2);
    if (num.length != 0 && num.length == 2) {

      result[1] = numbersTranslit[2][num[0]];
      result[2] = numbersTranslit[3][num[1]];
    }
    if (num.length == 1) {
      result[1] = numbersTranslit[2][num[0]];
    }

    return result.reverse();
  } else {
    for (i = 0; i < count; i++) {
      result[i] = numbersTranslit[i][num[i]];
    }

    return result.reverse();
  }

}