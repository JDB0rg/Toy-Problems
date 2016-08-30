///// SUM MULTIS of 3 & 5 /////////
////// Find all sume of 3 & 5 in an array ///////

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
