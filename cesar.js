
let rawUserinput = "HELLO WORLD"
let userInput = rawUserinput.toLowerCase();
let keys = 1

function updateKeys(el) {
    keys = Number(el.value);
    console.log(el.value);
}

function encode(index) {
    return userInput.charCodeAt(index) + Number(keys);
}

function convertLetterEncode (index) {
    if (encode(index) > 122) {
        return String.fromCharCode((encode(index)- 26)) 
    } else if (userInput.charCodeAt(index) == 32) { 
        return " ";
    } else {
        return String.fromCharCode(encode(index)); 
    }
}

function encodeLoop() {
    let value = ""
    for (var i = 0; i < userInput.length; i++) {
        value += convertLetterEncode(i);
    }
    return value;
}
function encodeMessage() {
    userInput = document.getElementById("userMessage").value.toLowerCase();
    if (!userInput.match(/^[a-zA-Z ]*$/)) {
        alert("Please enter text only, no special characters or numbers.")
    } else {
        document.getElementById("finalmessage").value = encodeLoop();
    }
}

console.log(encodeLoop())

function decode(index) {
    return userInput.charCodeAt(index) - Number(keys);
}

function convertLetterDecode (index) {
    if (userInput.charCodeAt(index) == 32) { 
        return " ";
    } else if (decode(index) < 97) {
        return String.fromCharCode((decode(index)+ 26)); 
    } else {
        return String.fromCharCode(decode(index)); 
    }
}

function decodeLoop() {
    let value = ""
    for (var i = 0; i < userInput.length; i++) {
        value += convertLetterDecode(i);
    }
    return value;
}

function decodeMessage() {
    userInput = document.getElementById("userMessage").value.toLowerCase();
    if (!userInput.match(/^[a-zA-Z ]*$/)) {
        alert("Please enter text only, no special characters or numbers.")
    } else {
        document.getElementById("finalmessage").value = decodeLoop();
    }
}

console.log(decodeLoop())

