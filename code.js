// helloWorld function 
function helloWorld() {
    return "Hello, World!"
}

function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else if (typeof input === "string") {
        return "Hello, " + input + "!";
    } else {
        return 2.3
    }
}
console.log(sayHello(2.3));

function isFive(input){
    if(input === 5) {
        return true
    } else {
        return false;
    }
}

function isEven (input){
    if(input % 2 === 0){
        return true
    } else {
        return false
    }

}

function isVowel (input){
    if(input == "a" || input == "e" || input == "i" || input == "o" || input == "u" || input == "A" || input == "E" || input == "I" || input == "O" || input == "U") {
        return true
    } else {
        return false
    }
}

function add(x,y){
    return parseFloat(x) + parseFloat(y)
}