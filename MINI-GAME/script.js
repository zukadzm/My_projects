const scoreButton = document.getElementById("scoreButton");
const p = document.getElementById("result");
const gadjet1Button = document.getElementById("gadjet1");
const gadjet2Button = document.getElementById("gadjet2");
const gadjet3Button = document.getElementById("gadjet3");
const gadjet4Button = document.getElementById("gadjet4");
const gadjet5Button = document.getElementById("gadjet5");
const gadjet6Button = document.getElementById("gadjet6");
const reset = document.getElementById("reset")

let gold = 0;
const score = localStorage.getItem('gold')

if(score) {
    gold =   JSON.parse(score)
}

function goldUpd(){
    p.textContent = `gold ${gold}`
    localStorage.setItem('gold', JSON.stringify(gold))
}

function onclickPlusOne(){
    scoreButton.addEventListener("click",function(){
        gold++; // ანუ მოიმატოს 1 ყოველ დაჭერაზე
        p.textContent = `gold ${gold}`
        goldUpd()
    })
}
onclickPlusOne()

function buyFirstGudjet(){
    gadjet1Button.addEventListener('click', () => {
            if(gold >= 50) {
                alert("გილოცავ შენ იყიდე პირველი გაჯეტიეხლა თითო კლიკზე მოგემატება წინასთან დაჯამეიბით +1")
                scoreButton.addEventListener('click', () => {
                    gold += 1;
                    
                
                if(gold < 50) {
                    scoreButton.addEventListener('click', () => {
                        gold++;
                        goldUpd()
                    })
                }}) 
            }
    })
}
buyFirstGudjet()

function buySecondGudjet(){
    gadjet2Button.addEventListener('click', () => {
            if(gold >= 200) {
                alert("გილოცავ შენ იყიდე მეორე გაჯეტი ეხლა თითო კლიკზე მოგემატება წინასთან დაჯამეიბით +1")
                scoreButton.addEventListener('click', () => {
                    gold += 2;

                if(gold < 200) {
                    scoreButton.addEventListener('click', () => {
                        gold++;
                        goldUpd()
                    })
                }}) 
            }
    })
}
buySecondGudjet()


function buyThirdGudjet(){
    gadjet3Button.addEventListener('click', () => {
            if(gold >= 400) {
                alert("გილოცავ შენ იყიდე მესამე გაჯეტი ეხლა თითო კლიკზე მოგემატება წინასთან დაჯამეიბით +1")
                scoreButton.addEventListener('click', () => {
                    gold += 3;
                
                if(gold < 400) {
                    scoreButton.addEventListener('click', () => {
                        gold++;
                        goldUpd()
                    })
                }}) 
            }
    })
}
buyThirdGudjet()

function buyFourthGudjet(){
    gadjet4Button.addEventListener('click', () => {
            if(gold >= 800) {
                alert("გილოცავ შენ იყიდე მეოთხე გაჯეტი ეხლა თითო კლიკზე მოგემატება წინასთან დაჯამეიბით +1")
                scoreButton.addEventListener('click', () => {
                    gold += 4;
                
                if(gold < 800) {
                    scoreButton.addEventListener('click', () => {
                        gold++;
                        goldUpd()
                    })
                }}) 
            }
    })
}
buyFourthGudjet()

function buyFiveGudjet(){
    gadjet5Button.addEventListener('click', () => {
            if(gold >= 1200) {
                alert("გილოცავ შენ იყიდე მეხუთე გაჯეტი ეხლა თითო კლიკზე მოგემატება წინასთან დაჯამეიბით +1")
                scoreButton.addEventListener('click', () => {
                    gold += 5;
                
                if(gold < 1200) {
                    scoreButton.addEventListener('click', () => {
                        gold++;
                        goldUpd()
                    })
                }}) 
            }
    })
}
buyFiveGudjet()

function buySixGudjet(){
    gadjet6Button.addEventListener('click', () => {
            if(gold >= 2500) {
                alert("გილოცავ შენ იყიდე ბოლო-მეექვსე გაჯეტი ეხლა თითო კლიკზე მოგემატება წინასთან დაჯამეიბით +1")
                scoreButton.addEventListener('click', () => {
                    gold += 6;
                
                if(gold < 2500) {
                    scoreButton.addEventListener('click', () => {
                        gold++;
                        goldUpd()
                    })
                }}) 
            }
    })
}
buySixGudjet()
goldUpd()
// setItem(JSON.stringify(arr))  // setItem ის დროს იქნება ესე

// getItem(JSON.parse(emails)) // get ის დროს იქნება ესე

reset.addEventListener("click",function(){
    localStorage.clear()
    gold = 0
    p.textContent = gold
})