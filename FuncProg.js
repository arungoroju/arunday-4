function main(a){
console.log(a());
}
main(function(){ console.log("i am call back 1")})
main(function(){ console.log("i am call back 2")})