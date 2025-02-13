const input = document.getElementById("inptV");
const myTable = document.getElementById("listn");
const button = document.getElementById("btn");
const removeButton = document.getElementById("removev");


function toDolist(){
    button.addEventListener("click",function(e){
        e.preventDefault();

        const Tr = document.createElement("tr");

        Tr.textContent = input.value;

        if(input.value != ""){
            myTable.appendChild(Tr)
        } else {
            return false
        }
        
        const removeButton = document.createElement("button");
            
        removeButton.textContent = "Remove"

        Tr.append(removeButton)


        removeButton.addEventListener("click",function(e){
            e.preventDefault()

            Tr.remove()

            removeButton.remove()
            reset.remove()
            edit.remove()
        })

        const reset = document.createElement("button");

        reset.textContent = "Reset"

        Tr.append(reset)

        reset.addEventListener("click",function(e){
            e.preventDefault()

            myTable.remove()
        })

        const edit = document.createElement("button");
        edit.textContent = "Edit"

        Tr.append(edit)

        edit.addEventListener("click",function(e){
            e.preventDefault();

            Tr.contentEditable = true
        })

        myTable.style.border = "2px solid black"
        myTable.style.lineBreak = "auto"
        

        removeButton.contentEditable = false
        reset.contentEditable = false
        edit.contentEditable = false

        removeButton.style.position = "fixed"
        removeButton.style.marginLeft = "255px"
        removeButton.style.width = "65px"
        removeButton.style.height = "30px"

        reset.style.position = "fixed"
        reset.style.marginLeft = "188px"
        reset.style.width = "65px"
        reset.style.height = "30px"

        edit.style.position = "fixed"
        edit.style.marginLeft = "118px"
        edit.style.width = "65px"
        edit.style.height = "30px"
    
        input.value = ""
    })
}


toDolist()


const mySpan = document.getElementById("mspan");


function menuSystem(){

    const buttonAbout = document.createElement("button");
    const contactButton = document.createElement("button");

    const menuBackground= document.getElementById("menuBK");
    const menuButtons = document.getElementById("allMenuButton");

    mySpan.addEventListener("click", (e)=> {
        e.preventDefault()


        menuBackground.style.position = "absolute"
        menuBackground.style.width = 300+"px"
        menuBackground.style.height = 300+"px"
        menuBackground.style.backgroundColor = "cyan"
        menuBackground.style.borderRadius = 10+"px"
        menuBackground.style.transition = "1s"

        menuButtons.style.marginLeft = 1050+"px"

        menuButtons.style.transition = "2s"

        buttonAbout.textContent = "About"
    
        menuBackground.appendChild(buttonAbout)

        contactButton.textContent = "Contact Us"

        menuBackground.appendChild(contactButton)

        buttonAbout.style.position = "absolute"
        buttonAbout.style.marginLeft = 50+"px"
        buttonAbout.style.marginTop = 65+"px"
        buttonAbout.style.width = "100px"
        buttonAbout.style.height = "40px"
        buttonAbout.style.border = "none"   

        contactButton.style.position = "absolute"
        contactButton.style.marginLeft = 50+"px"
        contactButton.style.marginTop = 5+"px"
        contactButton.style.width = "100px"
        contactButton.style.height = "40px"
        contactButton.style.border = "none"

        contactButton.addEventListener("click",function(e){
            e.preventDefault()
            window.location.href = "about.html"
        })

        buttonAbout.addEventListener("click",function(e){
            e.preventDefault()
            window.location.href = "about.html"
        })
        
    
        mySpan.addEventListener("click",function(e){
            e.preventDefault()
            
            menuBackground.removeChild(buttonAbout)
        })

        mySpan.addEventListener("click",function(e){
            e.preventDefault()
            menuBackground.appendChild(buttonAbout)
        })
    })

    const menuClos = document.getElementById("closeMenu");

    menuClos.addEventListener("click", (e)=> {
        e.preventDefault()

        menuBackground.style.width = 0+"px"
        menuBackground.style.height = 0+"px"

        menuButtons.style.marginLeft = 1200+"px"
        menuButtons.style.transition = "2s"

        menuBackground.removeChild(buttonAbout)
        menuBackground.removeChild(contactButton)
    })

}

menuSystem()

const darkMode = document.getElementById("darkmd");
const ligthMode = document.getElementById("lightmd")

function modes(){
    darkMode.addEventListener("click",function(e){
        e.preventDefault()
        document.body.style.backgroundColor = "#1e1e1e"
        darkMode.style.backgroundColor = "black"
        darkMode.style.color = "white"
        ligthMode.style.backgroundColor = "black"
        ligthMode.style.color = "white"
    })
    ligthMode.addEventListener("click",function(e){
        e.preventDefault()
        document.body.style.backgroundColor = "white"
        darkMode.style.backgroundColor = "white"
        darkMode.style.color = "black"
        ligthMode.style.backgroundColor = "white"
        ligthMode.style.color = "black"
    })
}
modes()

