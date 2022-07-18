// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

let sentence = 'Have a great day';
let sentenceSplit = sentence.toLowerCase().split(' ');
let titlecase = ''
for (let counter = 0 ; counter <= sentenceSplit.length-1 ; counter++ ) {
    titlecase = titlecase + ' ' + (sentenceSplit[counter].substring(0,1).toUpperCase() + sentenceSplit[counter].substring(1))
};
console.log(`${titlecase}`);






/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
let sentence1 = 'have a great day sir';
let sentence_Split = sentence1.split(' ').reverse();
let wordbyword = ''
for (let counter = 0 ; counter <= sentence_Split.length-1 ; counter++){
    wordbyword = wordbyword + ' ' + (sentence_Split[counter])
};
console.log(`${wordbyword}`);


/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
let array = [1, 2, 3, 4, 5];
let totalofArray = 0
for (let counter = 0; counter <= array.length-1; counter++) {
    totalofArray += array[counter]
};
console.log(`${totalofArray}`)

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */


let values = [1, 2, 3, 4, 5, 6];
let sum = 0
let numberofValues = values.length
for (let i = 0; i <= values.length-1; i++) {
    sum += values[i]
};
console.log(sum / numberofValues)
