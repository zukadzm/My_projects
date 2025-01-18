const button = document.getElementById("mdr");
const myForm = document.getElementById("myfrom")
const buton2 = document.getElementById("vie");
const changeClr = document.getElementById("colorChange");
const purple = document.getElementById("colorChange1");
const black = document.getElementById("colorChange2");
const green = document.getElementById("colorChange3");
const blue = document.getElementById("colorChange4")
const pink = document.getElementById("colorChange5");
const yellow = document.getElementById("colorChange6");
const white = document.getElementById("colorChange7");
const fontsize15 = document.getElementById("fnt15");
const fontSize20 = document.getElementById("fnt20");
const fontSize25 = document.getElementById("fnt25");
const fontSize30 = document.getElementById("fnt30")
const normal = document.getElementById("norml");
const resetButton = document.getElementById("rst");

function loadStngs() {
    const savedColor = localStorage.getItem("tableColor");
    const saveFontSize = localStorage.getItem("tableFontSize");
    const saveContent = localStorage.getItem("tableContent")

    if (savedColor) myForm.style.color = savedColor;
    if (saveFontSize) myForm.style.fontSize = saveFontSize + "px";
    if (saveContent) myForm.innerHTML = saveContent
}

function saveAllStng(){
    localStorage.setItem("tableColor", myForm.style.color);
    localStorage.setItem("tableFontSize", parseInt(myForm.style.fontSize));
    localStorage.setItem("tableContent", myForm.innerHTML)
}



button.addEventListener("click",function(e){
    e.preventDefault()
    myForm.contentEditable = true

    changeClr.addEventListener("click",function(event){
        event.preventDefault()
        myForm.style.color = "red"
        saveAllStng()
    })
    purple.addEventListener("click",function(event2){
        event2.preventDefault()
        myForm.style.color = "purple"
        saveAllStng()
    })
    black.addEventListener("click",function(event3){
        event3.preventDefault()
        myForm.style.color = "black"
        saveAllStng()
    })
    green.addEventListener("click",function(event4){
        event4.preventDefault()
        myForm.style.color = "green"
        saveAllStng()
    })
    blue.addEventListener("click",function(event5){
        event5.preventDefault()
        myForm.style.color = "blue"
        saveAllStng()
    })
    pink.addEventListener("click",function(event6){
        event6.preventDefault()
        myForm.style.color = "pink"
        saveAllStng()
    })
    yellow.addEventListener("click",function(event7){
        event7.preventDefault()
        myForm.style.color = "yellow"
        saveAllStng()
    })
    white.addEventListener("click",function(event8){
        event8.preventDefault()
        myForm.style.color = "white"
        saveAllStng()
    })
    

    fontsize15.addEventListener("click",function(e){
        e.preventDefault()
        myForm.style.fontSize = 15+"px"
        saveAllStng()
    })
    fontSize20.addEventListener("click",function(e){
        e.preventDefault()
        myForm.style.fontSize = 20+"px"
        saveAllStng()
    })
    fontSize25.addEventListener("click",function(e){
        e.preventDefault()
        myForm.style.fontSize = 25+"px"
        saveAllStng()
    })
    fontSize30.addEventListener("click",function(e){
        e.preventDefault()
        myForm.style.fontSize = 30+"px"
        saveAllStng()
    })
    normal.addEventListener("click",function(e){
        e.preventDefault()
        myForm.style.fontSize = 16+"px"
        saveAllStng()
    })

})

buton2.addEventListener("click",function(e){
    e.preventDefault()
    myForm.contentEditable = false
    saveAllStng()
})



window.addEventListener("load", loadStngs);

resetButton.addEventListener("click",function(e){
    e.preventDefault()
    localStorage.clear() // local clear
})