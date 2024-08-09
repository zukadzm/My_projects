const number1 = document.getElementById("one")
const number2 = document.getElementById("two")
const number3 = document.getElementById("three")
const number4 = document.getElementById("four")
const number5 = document.getElementById("five")
const number6 = document.getElementById("sixth")
const number7 = document.getElementById("seven")
const number8 = document.getElementById("eight")
const number9 = document.getElementById("nine")

const num1 = document.getElementById("minus1")
const num2 = document.getElementById("minus2")
const num3 = document.getElementById("minus3")
const num4 = document.getElementById("minus4")
const num5 = document.getElementById("minus5")
const num6 = document.getElementById("minus6")
const num7 = document.getElementById("minus7")
const num8 = document.getElementById("minus8")
const num9 = document.getElementById("minus9")


const reset = document.getElementById("reset")
const p = document.getElementById("paragraph")


let number = 0
number = 0

reset.addEventListener("click",function(){
    number = 0
    p.textContent = number
})

number1.addEventListener("click",function(){
    number += 1
    p.textContent = number
})

number2.addEventListener("click",function(){
    number += 2
    p.textContent = number
})

number3.addEventListener("click",function(){
    number += 3
    p.textContent = number
})

number4.addEventListener("click",function(){
    number += 4
    p.textContent = number
})

number5.addEventListener("click",function(){
    number += 5
    p.textContent = number
})

number6.addEventListener("click",function(){
    number += 6
    p.textContent = number
})

number7.addEventListener("click",function(){
    number += 7
    p.textContent = number
})

number8.addEventListener("click",function(){
    number += 8
    p.textContent = number
})

number9.addEventListener("click",function(){
    number += 9
    p.textContent = number
})




num1.addEventListener("click",function(){
    number -= 1
    p.textContent = number
})

num2.addEventListener("click",function(){
    number -= 2
    p.textContent = number
})

num3.addEventListener("click",function(){
    number -= 3
    p.textContent = number
})

num4.addEventListener("click",function(){
    number -= 4
    p.textContent = number
})

num5.addEventListener("click",function(){
    number -= 5
    p.textContent = number
})

num6.addEventListener("click",function(){
    number -= 6
    p.textContent = number
})

num7.addEventListener("click",function(){
    number -= 7
    p.textContent = number
})

num8.addEventListener("click",function(){
    number -= 8
    p.textContent = number
})

num9.addEventListener("click",function(){
    number -= 9
    p.textContent = number
})


