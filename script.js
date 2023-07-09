function fibonacciGenerator(n){
    var fibo = [];
    if(n === 0){
        fibo = [];
    }
    else if(n === 1){
        fibo.push(0);
    }
    else if(n === 2){
        fibo.push(0);
        fibo.push(1);
    }
    else{
        fibo.push(0);
        fibo.push(1); 
        for (let i = 2; i < n; i++) {
            fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2])
        }
    }
    console.log(fibo);
}

document.querySelector("h1").classList.add("huge")
