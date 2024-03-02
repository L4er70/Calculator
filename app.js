let val1 ;//parseInt(prompt('enter a num'));
let val2; //parseInt(prompt('enter a num'));
let operator;//prompt('add action');
let addition=0;
let sub = 0;
let mult=0;
let div=0;
let result =0;
let screen = document.querySelector('.screen');
let numButton = document.querySelectorAll('.numbers')
let screenContent = document.querySelector('.sectionContent')
let opButton = document.querySelectorAll('.btn-operation');
let para1 = document.createElement('p');
screenContent.appendChild(para1);
let para = document.createElement('p')
screenContent.appendChild(para)
let para2 = document.createElement('p')
screenContent.appendChild(para2)
let paraRes = document.createElement('p')
screenContent.appendChild(paraRes)
let opBool = false;
let equal=document.querySelector('#equal')
let clear = document.querySelector('#ac');



function reset(){
    para.textContent= '';
    para1.textContent = '';
    para2.textContent = '';
    paraRes.textContent = ''
    val1=0;
    val2=0;
    addition=0;
    sub=0;
    div=0;
    mult=0;
    opBool=false;

}
clear.addEventListener('click',reset)





opButton.forEach(button=>{
    button.addEventListener('click', function(){
       
        opBool = true;
        para.textContent = button.id;
        operator = button.id;
        console.log('operator '+operator)
        
        
    })
    
})


    numButton.forEach(button=>{
        button.addEventListener('click',function(){
            if(opBool){
            para2.textContent+=button.id;
            val2=parseInt(para2.textContent);
            console.log('value 2 :'+val2);
            

            }else{
                para1.textContent+=button.id;
                val1= parseInt(para1.textContent);
                console.log('val 1: '+val1)
            }
            
        })
    })
    
    

equal.addEventListener('click',function(){
    operate(operator,val1,val2)
    val1=result;
    para1.textContent = result;
    para.textContent= '';
    para2.textContent = '';
    paraRes.textContent = '';
    opBool=false;

    console.log(paraRes.textContent)
    console.log('value 1 is :'+val1)

})
    





function add(value1,value2){
    result = value1+value2;
    addition=result;
    console.log('addition :'+addition);
    return result;
}


function subtract(val1,val2){
    result = val1-val2;
    sub=result
    console.log('sub :'+sub)
    return result;
}
function multiply(val1,val2){
    result = val1*val2;
    mult=result;
    console.log('mult :'+mult)
    return result;
}


function divide(val1,val2){
    result = val1/val2;
    div=result;
    console.log('div :'+div)
    return result;    
}

function operate(operator,val1,val2) {
    if(operator==='+'){
        add(val1,val2)
        return paraRes.textContent=' = '+result;

    }else if(operator==='-'){
        subtract(val1,val2)
        return paraRes.textContent= ' = '+result;
    }
    else if(operator==='*'){
        multiply(val1,val2)
        return paraRes.textContent=' = ' +result;
    }
    else if(operator==='/'){
        divide(val1,val2);
        return paraRes.textContent=' = '+result;
    }
    
    
}

