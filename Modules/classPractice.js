console.log('welcome Igli to coding!')
let lVar1=10;
let lVar2=20;
let lVar3=30;

let res1 = lVar1 + lVar2++
console.log(`\n\nlVar1 = ${lVar1}`);


let teamSize = 7;
teamSize++;
let teamName = `Warriors`;
console.log(`Our team name is ${teamName} our team size is ${teamSize}`)

let age = 32;
age++;
console.log(`Since today is my birthday, I am ${age} years old`);

let accountBalance = 1000;
accountBalance--;
console.log(`I spent a dollar to buy a water and now my new balance is ${accountBalance}`);

let sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let num;

console.log(`num -> ${num}`);


let fTemp1 = 90;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);

let sentence1 = 'Hello dear, how are you doing?';
let lengthofSentence1 = sentence1.length;
console.log(`lengthofSentence1 -> ${lengthofSentence1}`);

let result1 = lengthofSentence1 >= 10 ? 15 : 25;
console.log(`result1 -> ${result1}`);


let sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence2replace_a_A = sentence2.replace(/a/gi , 'Alpha');
console.log(`${sentence2replace_a_A}`);


let sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let lengthofSentence3 = sentence3.length;
console.log(`lengthofSentence3 -> ${lengthofSentence3}`);

let startwithPattern = 'health'
startwithPattern = startwithPattern.toUpperCase()
let sentence3_Uppercase = sentence3.toUpperCase()
let startwithPattern_health = sentence3_Uppercase.startsWith(startwithPattern);
console.log(`Does ${sentence3} starts with 'health' : ${startwithPattern_health}`);

let sentence3includes = sentence3.includes('Body');
console.log(`${sentence3} containes with 'Body' : ${sentence3includes}`);


/**
 * to compare two strings are equal 
 * function: localCompare
 * 
 * if both strings are equal, function returns 0
 * if string is greater than another, function returns 1
 * if string is lesser than another, function return -1
 */ 

let sent1 = 'New york City'
let sent2= 'New york City'

const isEqual1 = sent1.localeCompare(sent2);
console.log(`is sent1 equal to sent2 = ${isEqual1}`)

/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
 let countryName = 'Albania';
 let countryName_split = countryName.split('')
 console.log(`${countryName_split}`)
 let countryName_length = countryName_split.length
 console.log(`\n The word count of ${countryName} is : ${countryName_length} `)


 /**
  * const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
  * Q2:
  * Count the number of words in the sentence
  */
 let sentence4 = 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.';
 let sentence4_split = sentence4.split(' ');
 let sentence4_wordCount = sentence4_split.length;
 console.log(`\n The word count of ${sentence4} is : ${sentence4_wordCount}`);

 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  */
 
 let sentence5 = 'mY doG is pRotective';
 let sentence5_toLowercase = sentence5.toLowerCase();
 let sentence5_split = sentence5_toLowercase.split(' ');
 let firstword = (sentence5_split[0]).substring(0,1).toUpperCase() + (sentence5_split[0]).substring(1);
 let secondword = (sentence5_split[1]).substring(0,1).toUpperCase() + (sentence5_split[1]).substring(1);
 let thirdWord = (sentence5_split[2]).substring(0,1).toUpperCase() + (sentence5_split[2]).substring(1);
 let fourthWord = (sentence5_split[3]).substring(0,1).toUpperCase() + (sentence5_split[3]).substring(1);
 let converted_sentence = firstword + ' ' + secondword + ' ' + thirdWord + ' ' + fourthWord
 console.log(`\n${converted_sentence}`);


 
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */

let sentence6 = 'You are very beautiful';
let sentence6_toUpperCase = sentence6.toUpperCase();
let sentence6_split = sentence6_toUpperCase.split(' ');
let firstLetter = (sentence6_split[0]).substring(0,1);
let secondLetter = (sentence6_split[1]).substring(0,1);
let thirdLetter = (sentence6_split[2]).substring(0,1);
let fourthLetter = (sentence6_split[3]).substring(0,1);
let abreviation = firstLetter + secondLetter + thirdLetter + fourthLetter
console.log(`\n${abreviation}`);