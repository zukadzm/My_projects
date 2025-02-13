const inputUser = document.getElementById("display");

function inputDisplay(input) {
    inputUser.value += input // რასაც დავაჭერთ ისინი გამოიტანოს
}

function clearDisplay(){
    inputUser.value = "" // ანუ როდესაც C დააჭერს inputUser ანუ html ში input რასაც ვხედავთ ეგ გაქრეს/გახდეს ცარიელი სტრინგი
}

function calculate(){
    inputUser.value = eval(inputUser.value) // inputUser ის valueს გავუწერეთ eval ჩათვალე eval არის მთლიანად calculator 
}

const darkMode = document.getElementById("darkmode");
const ligthMode = document.getElementById("lightmode")

const navbar = document.getElementById("nvb");

const navbarH1 = document.getElementById("cl");

const calCont = document.getElementById("cont");

function modes(){
    darkMode.addEventListener("click",function(e){
        e.preventDefault()
        document.body.style.backgroundColor = "#1e1e1e"
        navbar.style.backgroundColor = "black"
        navbarH1.style.color = "grey"
        darkMode.style.backgroundColor = "black"
        darkMode.style.color = "white"
        ligthMode.style.backgroundColor = "black"
        ligthMode.style.color = "white"
        inputUser.style.backgroundColor = "grey"
        calCont.style.backgroundColor = "black"
        inputUser.style.color = "white"
        darkMode.style.borderColor = "white"
        ligthMode.style.borderColor = "white"
    })
    ligthMode.addEventListener("click",function(e){
        e.preventDefault()
        document.body.style.backgroundColor = "white"
        navbar.style.backgroundColor = "grey"
        navbarH1.style.color = "white"
        darkMode.style.backgroundColor = "grey"
        darkMode.style.color = "white"
        ligthMode.style.backgroundColor = "grey"
        ligthMode.style.color = "white"
        inputUser.style.backgroundColor = "white"
        calCont.style.backgroundColor = "grey"
        inputUser.style.color = "black"
        darkMode.style.borderColor = "black"
        ligthMode.style.borderColor = "black"
    })
}
modes()

