console.log("sum of three function parameter");
let sum1=function(a){
    let sum2=function(b){
        let sum3=function(c){
        let result=a+b+c;
        console.log(result);
    }
    return sum3;
    }
    return sum2;
}

sum1(100)(200)(300);