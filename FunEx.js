let all=function(){
    let a=Number(prompt("Enter a :"));
let b=Number(prompt("Enter b :"));
let c=Number(prompt("Enter c :"));
   let e=a+b+c;
   console.log("Add"+e);
   console.log("Sub"+(a-b-c));
   console.log("Mul"+(a*b*c));
if(a>=b&&a>=c){
    console.log("a is Larger");
}
else if(b>=c&&b>=c){
    console.log("b is Larger");
}
else{
    console.log("c is Larger");
}
}

all();