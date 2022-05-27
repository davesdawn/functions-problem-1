//Write a JavaScript function that accepts a string as a parameter and 
//find the longest word within the string.

// Write a function that accepts a string as a parameter
function findLongestWord(str) {

}

//Declare the variable for the longest word and array of words.
let longestWord = "";
let arraysOfWords = str.split(" ");

//Write a for loop with a conditional statement. 
for (let i = 0; i < arraysOfWords.length ; i++) {
	if (longestWord.length < arraysOfWords[i].length) {
		longestWord = arraysOfWords[i];
	} 	
}

//Write and argument for the parameter
findLongestWord("This is my first JavaScript problem.");

//Solution

function findLongestWord(str) {
	let longestWord = "";
	let arraysOfWords = str.split(" ");
	for (let i = 0; i < arraysOfWords.length ; i++) {
	if (longestWord.length < arraysOfWords[i].length) {
		longestWord = arraysOfWords[i];
	} 	
	}
	return longestWord;
}

console.log(findLongestWord("This is my first JavaScript problem."));
