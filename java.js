
const resultElement = document.getElementById('result')
const number1 = document.getElementById('1 number')
const number2 = document.getElementById('2 number')
const button = document.getElementById('but')
const minus = document.getElementById('2 button')
const plus = document.getElementById('1 button')
const divis = document.getElementById('3 button')
const multi = document.getElementById('4 button')
let action =  '+'

minus.onclick = function(){
    action = '-'
}

plus.onclick = function(){
    action = '+'
}

divis.onclick = function(){
    action = '/'
}

multi.onclick = function(){
    action = '*'
}

function PrintResult(result){
    if (result < 0){
        resultElement.style.color = 'red'
    }else{
        resultElement.style.color = 'blue'
    }
    resultElement.textContent = result

}

button.onclick = function(){
    if (action == '+'){
        const math = Number(number1.value) + Number(number2.value)
        PrintResult(math)
    }else if (action == '-'){
        const math = Number(number1.value) - Number(number2.value)
        PrintResult(math)
         }else if (action == '*'){
        const math = Number(number1.value) * Number(number2.value)
        PrintResult(math)
    }else if (action == '/'){
        const math = Number(number1.value) / Number(number2.value)
        PrintResult(math)
    }   
    
    }
