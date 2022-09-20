
let number = 13;
let count =0;
for (let x = 0 ; x <= number ; x++){
    if(number%x==0){
        count++
    }
}
if(count==2){
    console.log(number,"is prime")
}else{
    console.log(number,"is not prime")
}