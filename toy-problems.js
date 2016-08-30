///// SUM MULTIS of 3 & 5 /////////

function sumMultiplesOf3And5(number){
	var multiples = [];
	for(var i = 0; i < number; i++){
		if(i % 3 === 0 || i % 5 === 0){
			multiples.push(i)
		}
	}

	var sum = 0;
	for(var i = 0; i < multiples.length; i++){
		sum = sum + multiples[i];
	}

	return sum;
}

var total = sumMultiplesOf3And5(10);
console.log(total);

////////// Falsy Filter ////////////

var mixedArray = ['Dog', 0, undefined, "multiple words", NaN, 10, false, true, 1, null];

//Create a function called 'falsyFilter' that will remove all of the falsy values from the above array and return a new array that contains only the truthy values (in the same order). Expected: ['Dog', "multiple words", 10, true, 1];

function falsyFilter(){
  for(var i = 0; i < mixedArray.length; i++){
	if(mixedArray[i] === false)
    {mixedArray.splice(i, 1)};
	return mixedArray;
  }
}

///// OR ////////

var mixedArray = ['Dog', 0, undefined, "multiple words", NaN, 10, false, true, 1, null];

//Create a function called 'falsyFilter' that will remove all of the falsy values from the above array and return a new array that contains only the truthy values (in the same order). Expected: ['Dog', "multiple words", 10, true, 1];

function falsyFilter(){
for(var i = 0; i < mixedArray.length; i++) {
 if(mixedArray === true || mixedArray === "true" || mixedArray !== false)
	 {mixedArray.slice(i, 1)}
 else return mixedArray;
}
}
////// find match in two diferent arrays ////

var daysArray = ["1", "2", "3", "4", "5", "8"];
var courseHwork = ["8", "15", "16", "23", "42"];
var matchNum = [];

function match (arr1, arr2){
	for(var i = 0; i < daysArray.length; i++) {
		for(var j = 0; j < courseHwork.length; j++) {
			if(daysArray[i] = courseHwork[j]){
				matchNum.push(daysArray[i])
			}
			return matchNum
		}
	}
	return "no match"
}
match(daysArray, courseHwork);

////////check to see if same number of x's and o's ////////

var str = "xxooX";

function same(str){
	var xnum = 0;
	var onum = 0;
	str = str.toLowerCase();
	for(var i = 0; i < str.length; i++){
		if(str[i] === "x") xnum++;
		else if(str[i] === "o") onum++;
	}
	if(onum === xnum) return true;
	else return false;
}

same(str);

////////

// Compress a given string "aabbbccc" to "a2b3c3"
// constraint: inplace compression, no extra space to be used
// assumption : output size will not exceed input size.. ex input:"abb" -> "a1b2" buffer overflow.. such inputs will not be given.

//// NOT FINISHED ////

var str = "aabbb"
var arr = str.split('')
console.log(arr);

function compress(arr) {

	for(var i = 0; i < arr.length; i++){
		if(arr[i] === arr[i] + i) { return arr[i]
		}
	}
}
compress(arr);

////// Check to see if a word is a palindrome /////

var s = "racecar";
var y = s.split('').reverse().join('');

function palind(){
		if(s === y) {return "that is a palindrome " + y.length + " characters long"
			} else { return "That is not a palindrome"
			}
}
palind();

/////////////

// The city provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter strings
// representing directions to walk (eg. ['n', 's', 'w', 'e']).

// You know it takes you one minute to traverse one city block, so create a
// function that will return true if the walk the app gives you will take you
// exactly ten minutes (you don't want to be early or late!) and will, of course,
// return you to your starting point. Return false otherwise.
