// how you can find the square root without using built in functions
function findSquare(number,guess){
var g=guess || number/2 ;
var d=number/g ;
var ng=(g+d)/2 ;
if(g===ng){
	return g
}else{
	return findSquare(number,ng);
}
}

// how  you can swap between x and y without using third variable

function swap(x,y){// suppose that x=10  and y=90
	x=x+y;  // now x=10+90 ---> x=100
	y=x-y;  // now y = 100 -90 --> y=10
	x=x-y;   // now x=100 -10 ---> =90
	console.log('x now is '+ x + '  and y now is '+ y);
}

// how to test if a number is prime
function isPrime(n){
	var status;
	if(n<=1){
		status=false;
	}else if(n===2 || n===3){
		status=true;
	}else if(n%2===0){
		status=false;
	}else{
		for (var i = 2; i <findSquare(n); i++) {
			if(n%i===0){
				status=false
			}else{
				status=true;
			}
		}
	}
	return status;
}

// write method take two arrays and return a new array
// with just the common items founded in the two arrays

function justCommon(a1,a2){
	var res=[];
	for (var i = 0; i < a1.length; i++) {
		for (var j = 0; j < a2.length; j++) {
			if(a1.indexOf(a2[j])> -1){
				res.push(a2[j])
				a2.splice(j,1)
			}
		}
	}
	return res;
}


