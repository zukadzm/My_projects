const p = document.getElementById("result") // აქ id ით წამოვიღე html ის თეგები
const Start = document.getElementById("start");
const Pause = document.getElementById("pause");
const Reset = document.getElementById("reset");

let time = 0; // პროგრამირებაში ათვლა იწყება ნულიდან და ჩვენ რომ ათვლა დავიწყოთ მაგისთვის შევქმენი time ცვლადი რისიც მნიშვნელობა არის 0 ანუ 0 იდან დაიწყოს
let time2; // ეს შევქმენი იმისთვის რომ შეინახოს ყველაფერი(მნიშვნელობები)

Start.addEventListener("click",function(){
    if(!time2) {// ანუ თუ არ არის ათვლა დაწყებული
        time2 = setInterval(function() { // მაშინ დავიწყოთ ათვლა, time2 ში შეინახება ეხლა ყველაფერი
            time++; // ანუ მოემატოს 1 ით
            p.textContent = time //გამოიტანოს დრო
        }, 1000) // ყოველ 1 წამში 1000 === 1000ms(milisecond), 1000ms(milisecond) === 1s
    }  
})

Pause.addEventListener("click",function(){
    clearInterval(time2) // clearInterval - ანუ შეწყდეს მუშაობა გააქროს ინტერვალი
    time2 = null; // null ანუ არანაირი მნიშვნელობა არ ინახება time ში
})


Reset.addEventListener("click",function(){
    clearInterval(time2); // clearInterval - ანუ შეწყდეს მუშაობა გააქროს ინტერვალი
    time = 0;
    p.textContent = time; // აქ p - result გაუტოლდეს time = 0 ს
})


const creator = {
    firstname: "Zuka",
    lastname: "Qoridze",
    age: 15,
    academy: "Goa",
    live: "Georgia,samtredia",
    addres: "Shevchenkos 17"
}

console.log(creator);

const timeToCrateThisPage = new Date(); // new date გამოაქვს ამჟამინდელი დრო
console.log("This project is cratet at ->",timeToCrateThisPage)