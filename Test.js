/**
 * Created by Joshua Baert on 5/5/2017.
 */

// https://www.codewars.com/kata/max-collatz-sequence-length

var data = [
	{name: 'Joe', age: 20},
	{name: 'Bill', age: 30},
	{name: 'Kate', age: 23}
]

function getNames(data){
	return data.map(pers => pers.name);
}

console.log(getNames(data));