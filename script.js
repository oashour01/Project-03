let passwordOneEl = document.getElementById("password-one-el");
let passwordTwoEl = document.getElementById("password-two-el");
let passwordLength = 15;
let passwordOne = "";
let passwordTwo = "";
let getPassword = document.getElementById("generate-el");
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function getRandomChar() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generatePasswordOne() {
  for (let i = 0; i < passwordLength; i++) {
    passwordOne += getRandomChar();
  }
  return passwordOne;
}

function generatePasswordTwo() {
  for (let i = 0; i < passwordLength; i++) {
    passwordTwo += getRandomChar();
  }
  return passwordTwo;
}
getPassword.addEventListener("click", function () {
  passwordOneEl.textContent = generatePasswordOne();
  passwordTwoEl.textContent = generatePasswordTwo();
});
