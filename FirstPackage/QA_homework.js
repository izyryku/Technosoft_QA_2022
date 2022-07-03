/**
* Convert temperature values into different units
 *
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * Due Date: Jul-3 EOD
 * 
 */

// F -> C
// T(°C) = (T(°F) - 32) × 5/9

let fTemp1 = 80;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9

let fTemp2 = 60
let kTemp1 = (fTemp2 + 459.67) * 5/9
console.log(`\n${fTemp2}°F is equals to ${kTemp1}K`)

// C -> F
// T(°F) = T(°C) × 9/5 + 32

let cTemp3 = 30
let fTemp3 = (cTemp3 * 9/5) + 32
console.log(`\n${cTemp3}°C is equals to ${fTemp3}°F`)

// C -> K
//T(K) = T(°C) + 273.15

let cTemp2 = 25
let kTemp2 = (cTemp2) + 273.15
console.log(`\n${cTemp2}°F is equals to ${kTemp2}K`)

// K -> C
// T(°C) = T(K) - 273.15

let kTemp3 = 290
let cTemp4 = kTemp3 - 273.15
console.log(`\n${kTemp3}K is equals to ${cTemp4}°C`)

// K -> F
// T(°F) = T(K) × 9/5 - 459.67

let kTemp4 = 300
let fTemp4 = (kTemp4 * 9/5) - 459.67
console.log(`\n${kTemp4}K is equals to ${fTemp4}°F`)