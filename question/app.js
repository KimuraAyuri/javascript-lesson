// 基礎編
// Q1
let nickname = 'ごっしー';
let age = 28;
console.log('私の名前は' + nickname + 'です。年齢は' + age + '歳です。');

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log('私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。');

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

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
console.log((playerList[0].age + playerList[1].age + playerList[2].age) /3);

// Q6
function sayHello() {
    console.log('Hello');
};
sayHello();

let sayWorld = function sayWorld() {
    console.log('World');
};
sayWorld();

// Q7
user.birthday = '2007-09-27';
user.sayHello= function() {
    console.log('Hello!');
}
user.sayHello();

// Q8
let calc = {};

function add(x, y) {
    console.log(x + y);
}
calc[0] = 1;
calc[1] = 6;
add(calc[0], calc[1]);

function subtract(x, y) {
    console.log(x - y);
}
calc[0] = 11;
calc[1] = 1;
subtract(calc[0], calc[1]);

function multiply(x, y) {
    console.log(x * y);
}
calc[0] = 7;
calc[1] = 7;
multiply(calc[0], calc[1]);

function divide(x, y) {
    console.log(x / y);
}
calc[0] = 25;
calc[1] = 5;
divide(calc[0], calc[1]);

// Q9
function remainder(x, y) {
    return x % y;
}
let x = 5;
let y = 3;
console.log(x + 'を' + y + 'で割った余りは' + remainder(x, y) + 'です.');

// Q10
// zは関数fooの中で宣言されており、そのスコープは関数内に限定されている。
// そのため、関数の外からzを参照しようとしてもできず、エラーになる。
// (Q10でxを使用しているため、zを使用しています。)


// 応用編
// Q1
console.log(Math.floor(Math.random() * 9) + 1);

// Q2
setTimeout(function () {
  console.log('Hello World!');
}, 3000);

// Q3
let num = 0;
if(num > 0) {
    console.log('num is greater than 0')
}else if (num === 0){
    console.log('num is 0')
}else {
    console.log('num is less than 0')
};

// Q4
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
    let value = mixed[i];

    if (typeof value === 'number') {
        if (value % 2 === 0) {
            console.log('even');
        } else {
            console.log('odd');
        }
    } else {
        console.log('not number');
    }
}