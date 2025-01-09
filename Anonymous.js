let a=function(b){
console.log(b);
console.log(arguments)
for(let i=0;i<arguments.length;i++){
    console.log(arguments[i]);
}
}
a(10,20,30)
//create a function expression to perform a arthimetic operation for 3 numbers and find largest of three numbers and input should be taken from end user 