function* genPrimesNumber(max = 10){
    let num = 2;
    while(max > num){
        if(isPrime(num)){ yield num; }
        num++;
    }
}

function isPrime(value){
    let prime = true;
    for(let i = 2; i <= Math.floor(Math.sqrt(value)); i++){
        if(value % i === 0){
            prime = false;
            break;
        }    
    }
    return prime;
}

for(let prime of genPrimesNumber(15)){
    console.log(prime);   
}