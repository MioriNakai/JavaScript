// Q1
let nickname = 'みおりん';
let age = 26;
let greet = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + 'です。';
console.log(greet);

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let study = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強したいです。`;
console.log(study);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
let totalAge = playerList.reduce((sum, player) => sum + player.age, 0);

let numberOfPlayers = playerList.length;

let averageAge = totalAge / numberOfPlayers;

console.log(averageAge);

// Q6
function sayHello() {
  let sayHello = 'Hello'
  console.log(sayHello);
}
sayHello()

let sayWorld = function() {
  let sayWord = 'World'
  console.log(sayWord);
}
sayWorld()

// Q7
user.birthday = '2000-09-27'

user.sayHello = function() {
  sayHello = 'Hello!'
  console.log('Hello!')
}
user.sayHello()

// Q8
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.add(3, 4);         
calc.subtract(15, 5);   
calc.multiply(7, 7);    
calc.divide(25, 5);

// Q9
function remainder(x, y) {
  return x % y;
}
let result = remainder(5, 3);
console.log(`${5} を ${3} で割った余りは ${result} です。`);

// Q10
// スコープ: 変数 x は function foo() の中でしか使えないローカル変数である為、
// function foo() の外では変数 x を参照することができません。
// だから、function foo() の外で console.log(x) を使うと、"x is not defined" というエラーが出ます。

// Section6-Q1
let randomInteger = Math.floor(Math.random() * 10);

console.log(randomInteger);
// Math.random():
// 0 以上 1 未満の乱数を生成。例えば、0.123 などの値が取得。
// Math.random() * 10:
// 0 以上 10 未満の浮動小数点数を生成。例えば、0.123 * 10 = 1.23 などの値が得られます。
// Math.floor():
// 小数点以下を切り捨てて、整数を返す。例えば、1.23 は 1 に。

// Section6-Q2
setTimeout(function() {
  console.log('Hello World!');
}, 3000);

// Section6-Q3
let num = 5; 

if (num > 0) {
  console.log(num + ' is greater than 0');
} else if (num < 0) {
  console.log(num + ' is less than 0');
} else {
  console.log(num + ' is 0');
}

// Section6-Q4
let numbers = [];

// 0 から 99 までの数字を配列に追加する
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

// Section6-Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];


// 配列の各要素を処理する
for (let item of mixed) {
  if (typeof item === 'number') {
    // 数値の場合、偶数か奇数かを判定
    if (item % 2 === 0) {
      console.log(item + ' is even');
    } else {
      console.log(item + ' is odd');
    }
  } else {
    // 数値でない場合
    console.log(item + ' is not number');
  }
}










