/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */

let sentence1 = 'Hello dear, how are you doing?';
let lengthofSentence1 = sentence1.length;
console.log(`lengthofSentence1 -> ${lengthofSentence1}`);

let result1 = lengthofSentence1 >= 10 ? 15 : 25;
console.log(`result1 -> ${result1}`);


/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

let sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence2replace_a_A = sentence2.replace(/a/gi , 'Alpha');
console.log(`${sentence2replace_a_A}`);


/**
 * "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 * 
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */

let sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL."
let lengthofSentence3 = sentence3.length;
console.log(`lengthofSentence3 -> ${lengthofSentence3}`);

let startwithPattern = 'health'
startwithPattern = startwithPattern.toUpperCase()
let sentence3_Uppercase = sentence3.toUpperCase()
let startwithPattern_health = sentence3_Uppercase.startsWith(startwithPattern);
console.log(`Does ${sentence3} starts with 'health' : ${startwithPattern_health}`);


let word = 'Body'; // BODY
word = word.toUpperCase();
let sentence3_includes = sentence3.toUpperCase();
let sentence3_includes_word = sentence3_includes.includes(word);
console.log(`${sentence3} containes with 'Body' : ${sentence3_includes_word}`);

let indexOf = 'Body';
indexOf = indexOf.toUpperCase();
let indexOf_sentence3 = sentence3.toUpperCase();
let indexOf_body = indexOf_sentence3.indexOf(indexOf);
console.log(`index of 'Body' in ${sentence3} is ${indexOf_body}`);

// Hello - 5
// 0,1,2,3,4
// *5
let sentence3_length = sentence3.length;
console.log(`${sentence3_length}`);
let last_character = sentence3.charAt(sentence3_length-1);
console.log(`${last_character}`);
console.log(`\nthe last character in ${sentence3} is ${last_character}`);
