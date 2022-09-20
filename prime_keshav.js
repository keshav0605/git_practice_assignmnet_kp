let num = 13;
let factor =0;
for (let x = 0 ; x <= 13 ; x++){
    if(num%x==0){
        factor++
    }
}
if(factor==2){
    console.log(num,"is a prime")
}else{
    console.log(num,"is not a prime")
}