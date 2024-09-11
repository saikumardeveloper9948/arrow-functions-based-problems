//  ARROW FUNCTIONS
// 1)  PRINT 1 TO 10 SQUARES.....

var a=(x,y)=>{
    for(i=x;i<=y;i++){
        var b=0;
      b=i**2;
      console.log(`squares of ${i}  is ${b}`)
    }

  }
  a(1,10)

// 2) PRINT NUMBERS 1 TO 30 WHICH ARE DIVISIBLE BY 3
console.log(`PRINTS NUMBERS BETWEEN 1 TO 30 WHICH ARE DIVISIBLE BY 3 OF ITS CUBES`)
var a=(b)=>{
  i=1
  while(i<=b){
    i+=2
    console.log(`cube of ${i} is ${i**3}`);
    i++
  }

}
a(30)




// 3) print no 1 to 30 which are not divisible by 3 
console.log(` numbers between 1 and 30 which are not divisible by 3`);
var b = (c) => {
  var i = 1;
  while (i <= c) {
    if (!(i % 3 == 0)) {
        
      console.log(i);
    }
    
    i++;
  }
 

};
b(30);

// 4) print fibonacci series no's of first 5 no's
console.log(`FIBONACCI SERIES OF FIRST 5 NUMBERS`)

var fib = (f) =>{
    var  a = 0 ,  b = 1 
    while (a<=f){
        console.log(a);
        c=a+b
        a=b
        b=c
    }
}
fib(5)

//   5) print only consonants  from a given string
console.log("print only consonants  from a given string")
console.log("STRING IS : take u forward")
var str2=(str) =>{
vowels="aeiouAEIOU", str1=""

for (i of str){
    if (!vowels.includes(i)){
        str1=str1+i
    }
}
console.log(str1)
}
str2("take u forward")
