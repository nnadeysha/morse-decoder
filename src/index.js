const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
   
const denominator = expr.match(/.{1,10}/g).toString();
const morseArr = denominator.replace(/10/g, ".").replace(/11/g, "-").replace(/0{2}/g, "").split(",");
const wordsArr = [];

for (let i = 0; i < morseArr.length; i++){
    if(wordsArr[i] == ' '){
        wordsArr.push(' ');
    }
    else{
        wordsArr.push(MORSE_TABLE[morseArr[i]]);
    } 
}
return wordsArr.join(''); 
}

module.exports = {
    decode
}

//делим двоичный по 10 символов, т.к. 1 буква = 10 символов из 0 и 1.
//если буква меньше 10 значит добавлены 0 и их надо убрать
//. 10          11 -
//нули считаются только справа