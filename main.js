

let doubleChar = (str) => str.split('').map(x=> x = x+x).join('')

/*
8kyu Double Char


Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!

https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

BEST SOLUTİON
--------------------------------------------
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}
--------------------------------------------