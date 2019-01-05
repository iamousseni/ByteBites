/*
Create a function, FirstReverse(str), that takes a string parameter ('str') being passed and
returns the string in reversed order.
*/

const name = 'FirstReverse';
const number = 1;
const level = 'easy';
const methods = [];
const concepts = ['for-loop', 'length of string', 'const', '+= operator', 'if statements', 'typeof'];

const FirstReverse = (str = '') => {
	if (typeof str !== 'string') {
		return 'The input must be a string.';
	}
	
	return str.split('').reverse().join('');
};



module.exports = {
	FirstReverse
};

