/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */


 const romanMap = {
	"I": 1,
	"V": 5,
	"X": 10,
	"L": 50,
	"C": 100,
	"D": 500,
	"M": 1000
}

function romanToDecimal(roman) {
	let sum = 0;
	for (let i = 0; i < roman.length; i++) {
		const current = romanMap[roman[i]];
		const next = romanMap[roman[i + 1]];
		if (next === undefined) {
			sum += current;
			continue;
		}
		if (current >= next) {
			sum += current;
			continue;
		}
		sum -= current;
	}
	return sum;
}

console.log(romanToDecimal("XXL"))

module.exports = romanToDecimal;


