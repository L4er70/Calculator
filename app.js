let val1 = 2//parseInt(prompt('enter a num'));
let val2= 2 //parseInt(prompt('enter a num'));
let operator= '+';//prompt('add action');
let addition=0;
let sub = 0;
let mult=0;
let div=0;




function add(value1,value2){
    let result = value1+value2;
    addition=result;
    console.log('addition :'+addition);
    return result;
}


function subtract(val1,val2){
    let result = val1-val2;
    sub=result
    return result;
}
function multiply(val1,val2){
    let result = val1*val2;
    mult=result;
    return result;
}

function divide(val1,val2){
    let result = val1/val2;
    div=result;
    return result;
}

function operate(operator,val1,val2) {
    if(operator==='+'){
        add(val1,val2)
        return addition;

    }else if(operator==='-'){
        subtract(val1,val2)
        return sub;
    }
    else if(operator==='*'){
        multiply(val1,val2)
        return mult;
    }
    else if(operator==='/'){
        divide(val1,val2);
        return div;
    }
    
}
/*
console.log(add(val1,val2));
console.log(subtract(val1,val2));
console.log(multiply(val1,val2));
console.log(divide(val1,val2));


console.log('the choesn operation is: '+operator+' and result is : '+operate(operator,val1,val2));

*/