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





