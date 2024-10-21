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
};

function decode(expr) {
	const chunks = expr.match(/.{10}/g);
	let decodedMessage = '';
 
	chunks.forEach(chunk => {
	  if (chunk === '**********') {
		 decodedMessage += ' '; 
	  } else {

		 let morseSymbol = chunk
			.replace(/10/g, '.')
			.replace(/11/g, '-')
			.replace(/0/g, ''); 
		 
		 decodedMessage += MORSE_TABLE[morseSymbol] || ''; 
	  }
	});
 
	return decodedMessage;
}

module.exports = {
    decode
}