
const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const tempResult = document.querySelector('.tempResult');
const numbersEl = document.querySelectorAll('.numbers');
const operationsEl = document.querySelectorAll('.operations');
const equals = document.querySelector('.equals');
const del = document.querySelector('.del');
const clearAll = document.querySelector('.clear-all');
const clearPrevious = document.querySelector('.clear-previous');


let dis1 = "";
let dis2 = "";
let result = null;
let lastoperation = "";
let haveDot = false;



numbersEl.forEach(numbers =>{
    numbers.addEventListener('click', (e) =>{
        if( e.target.innerText === '.' &&  !haveDot){
            haveDot = true
    }else if(e.target.innerText === '.' &&  haveDot){
                return;
    }
    dis2 += e.target.innerText; 
    display2.innerText = dis2; 
    })
})

operationsEl.forEach(operation =>{
    operation.addEventListener('click', (e)=>{
        if(!dis2) result;
        haveDot = false
        const operationName = e.target.innerText;
        if(dis1 && dis2 && lastoperation){
            mathOperation();
        }else{
            result = parseFloat(dis2);
        }
        clearVal(operationName)
        lastoperation = operationName
        console.log(result);
    })
})

function clearVal(name = ""){
    dis1 += dis2 + " " + name + " ";  
    display1.innerText = dis1;
    display2.innerText = "";
    dis2 = "";
    tempResult.innerText = result 
}

function mathOperation(){
    if (lastoperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2)
    }else if(lastoperation === '+'){
        result = parseFloat(result) + parseFloat(dis2)
    }else if(lastoperation === '/'){
        result = parseFloat(result) / parseFloat(dis2)
    }else if(lastoperation === '-'){
        result = parseFloat(result) - parseFloat(dis2)
    }
}


    equals.addEventListener('click', (e) =>{
        if(!dis1 && !dis2) return;
        haveDot = false;
        mathOperation();
        clearVal();
        display2.innerText = result;
        tempResult.innerText = "";
        dis2 = result;
        dis1 = "";
    })
    clearAll.addEventListener('click', (e) =>{
        display2.innerText = "0.0";
        display1.innerText = "";
        dis1 = "";
        dis2 = "";
        tempResult.innerText = "";
    })

    clearPrevious.addEventListener('click', (e) =>{
        display2.innerText = "";
        dis2  = "";
    })

    del.addEventListener('click', (e) =>{
        if(!dis2) return;
        let delVal = dis2.slice(0, -1)
        dis2 = delVal
        display2.innerText = dis2

    })
