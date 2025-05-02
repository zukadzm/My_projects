async function weather() {
    const apiKey = 'd20680e137f5c8bb69a86e8819f53d46'
    const city = document.getElementById("input").value;

    if(!city) { // თუ არაფერი არ ჩაწერა არაფერი
        document.getElementById("result").textContent = `გთხოვთ შეიყვანეთ ქალაქის სახელი`
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ka`

    try {
        const res = await fetch(url)
        if(!res.ok){
            throw new Error("ქალაქი ვერ მოიძებნა")
        }
        const data = await res.json()
        const result = document.getElementById("result");
        result.innerHTML = `
        <div style="font-size:29px;">
        🌍 ქალაქი: ${data.name} <br>
        🌡️ ტემპერატურა: ${data.main.temp}°C <br>
        🌥️ ამინდი: ${data.weather[0].description}
        </div>
        `
    }catch(er){
        console.error("ERROR",er)
    }
}

function nameDisplayf(){
    const firstname = prompt("Enter your name")
    const nameDisplay = document.getElementById("nameDisplay");

    if(firstname.length > 8) {
        alert("არ შეიძლება სიტყვა იყოს 8 ასოზე მეტი")
        return false
    } else {
        nameDisplay.textContent = firstname
    }

}
nameDisplayf()