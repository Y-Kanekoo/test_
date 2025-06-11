// 問1
const firstName = "Masayuki";
const lastName = "Iga";
console.log(firstName + " " + lastName);

// 問2
const subtotal = 200 * 3 + 250 * 4;
const tax = subtotal * 0.1;
console.log(tax);
const total = subtotal + tax;
console.log("小計");
console.log(subtotal + "円");
console.log("消費税");
console.log(tax + "円");
console.log("合計金額");
console.log(total + "円");

// 問3
const testScore = 100;
if (0 <= testScore && testScore < 80) {
  console.log("追試です");
} else if (80 <= testScore && testScore <= 120) {
  console.log("合格です");
} else {
  console.log("存在しない点数です");
}

// 問4
let answer = 0;
for (let i = 1; i <= 100; i++) {
  answer += i;
}
console.log(answer);

//問5
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for文
for (let i = 0; i < 10; i++) {
  const number = array[i];
  if (number % 2 === 1) {
    console.log(number);
  }
}
// for-of文
for (const number of array) {
  if (number % 2 === 1) {
    console.log(number);
  }
}

// 問6
const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const results = array2.filter((number) => number % 2 === 0);
console.log(results);

// 問7
const human = {
  firstName: "Masayuki",
  lastName: "Iga",
  sayMyName: function () {
    console.log(`私の名前は${this.lastName}${this.firstName}です。`);
  },
};
human.sayMyName();

// 問8
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function multi(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
console.log("5 + 3 = " + add(5, 3));
console.log("5 - 3 = " + sub(5, 3));
console.log("5 * 3 = " + multi(5, 3));
console.log("5 / 3 = " + div(5, 3));

// アロー関数式の場合の解答例
console.log("アロー関数式");
const add2 = (num1, num2) => num1 + num2;
const sub2 = (num1, num2) => num1 - num2;
const multi2 = (num1, num2) => num1 * num2;
const div2 = (num1, num2) => num1 / num2;
console.log("5 + 3 = " + add2(5, 3));
console.log("5 - 3 = " + sub2(5, 3));
console.log("5 * 3 = " + multi2(5, 3));
console.log("5 / 3 = " + div2(5, 3));

// ボーナス問題;
let message = "Stay hungry, Stay foolish";
let partial = "hungry";
if (message.includes(partial)) {
  console.log(partial + "は部分一致しました");
} else {
  console.log(partial + "は部分一致しませんでした");
}
