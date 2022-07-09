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