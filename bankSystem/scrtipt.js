const input = document.getElementById("inpt");
const button = document.getElementById("btn");

function pins(){
    const accounts = {
        account1: "lasha giorgiadze",
        account1Balance: 150,
        account1Pin: 4124,

        account2: "Giorgi tavadze",
        account2Balance: 200,
        account2Pin: 5345,
        
        account3: "Bacho chaganava",
        account3Pin: 5943,
        account3Balance: 400,

        account4: "Zuka qoridze",
        account4Balance: 10,
        account4Pin: 1234,

        account5: "Luka chaganava",
        account5Balance: 50,
        account5Pin: 3455,

        account6: "Rati tavadze",
        account6Pin: 4234,
        account6Balance: 45,

        account7: "Gigi qoridze",
        account7Pin: 9994,
        account7Balance: 1150,

        account8: "Lika qoridze",
        account8Pin: 1121,
        account8Balance: 324,

        account9: "Muriko melqadze",
        account9Pin: 2452,
        account9Balance: 95,

        account10: "Nika ruxadze",
        account10Pin: 5430,
        account10Balance: 900,
    }
    const div = document.getElementById("alertPeopleDiv");
    button.addEventListener("click",function(e){
        e.preventDefault()

        if(input.value == accounts.account1Pin){
            div.style.width = 500+"px"
            div.style.height = 500+"px"
            div.style.backgroundColor = "black"
            div.style.borderRadius = "15px"
     
            div.style.color = "white"

            div.textContent = accounts.account1
            div.style.paddingTop = 100+"px"
            div.style.paddingLeft = 200+"px"
            div.style.marginTop = "20px"

            const button1 = document.createElement("button");

            div.append(button1)

            button1.textContent = "View Balance"

            const textDiv = document.createElement("div");
            div.append(textDiv)

            button1.addEventListener("click",function(e){
                e.preventDefault()
                textDiv.textContent = `${accounts.account1Balance} $`
            })

            const wirthday = document.createElement("input");
            wirthday.type = "number"
            wirthday.placeholder = "Enter How much money do you want to wirthday"

            const wirthdayButton = document.createElement("button");

            div.append(wirthday)

            wirthday.textContent = "Wirthday"

            div.append(wirthdayButton)

            wirthdayButton.textContent = "Wirthday"


            wirthdayButton.addEventListener("click",function(e){
                e.preventDefault()
                const errorDv = document.createElement("div");
                const greenDv = document.createElement("div");
                div.append(errorDv)
                div.append(greenDv)
                if(parseInt(wirthday.value) > accounts.account1Balance) {
                    errorDv.textContent = "ბალანსზე არ არის საკმარისი თანხა/ERROR"
                    errorDv.style.color = "red"
                    return false;
                }  else if(wirthday.value == "") {
                    return false;
                } else {
                    accounts.account1Balance -= wirthday.value;
                    textDiv.textContent = `${accounts.account1Balance} $`
                    greenDv.textContent = `თანხის გამოტანამ წარმატებით ჩაიარა`
                    greenDv.style.color = "green"
                }
            })

            const depsoitButton = document.createElement("button");
            const Depsoitinput = document.createElement("input")
            Depsoitinput.type = "number"
            Depsoitinput.placeholder = "Enter money amount"
            depsoitButton.textContent = "Depsoit"


            div.append(depsoitButton)
            div.append(Depsoitinput)

            depsoitButton.addEventListener("click",function(e){
                e.preventDefault()

                const depositAmount = parseInt(Depsoitinput.value)
                
                if(depositAmount > 2000) {
                    alert("შენ არ შეგიძლია 2000$-ზე მეტის შეტანა ბალანსზე")
                } else if(Depsoitinput.value == "") {
                    return false
                } else {                                     
                    accounts.account1Balance += depositAmount
                    textDiv.textContent = `${accounts.account1Balance} $`
                    alert("თანხის შეტანამ წარმატებით ჩაიარა")
                }
            })
        } 
    })

    button.addEventListener("click",function(e){
        e.preventDefault()

        if(input.value == accounts.account2Pin){
            div.style.width = 500+"px"
            div.style.height = 500+"px"
            div.style.backgroundColor = "black"
            div.style.borderRadius = "15px"
     
            div.style.color = "white"

            div.textContent = accounts.account2
            div.style.paddingTop = 100+"px"
            div.style.paddingLeft = 200+"px"
            div.style.marginTop = "20px"

            const button1 = document.createElement("button");

            div.append(button1)

            button1.textContent = "View Balance"

            const textDiv = document.createElement("div");
            div.append(textDiv)

            button1.addEventListener("click",function(e){
                e.preventDefault()
                textDiv.textContent = `${accounts.account2Balance} $`
            })

            const wirthday = document.createElement("input");
            wirthday.type = "number"
            wirthday.placeholder = "Enter How much money do you want to wirthday"

            const wirthdayButton = document.createElement("button");

            div.append(wirthday)

            wirthday.textContent = "Wirthday"

            div.append(wirthdayButton)

            wirthdayButton.textContent = "Wirthday"


            wirthdayButton.addEventListener("click",function(e){
                e.preventDefault()
                const errorDv = document.createElement("div");
                const greenDv = document.createElement("div");
                div.append(errorDv)
                div.append(greenDv)
                if(parseInt(wirthday.value) > accounts.account2Balance) {
                    errorDv.textContent = "ბალანსზე არ არის საკმარისი თანხა/ERROR"
                    errorDv.style.color = "red"
                    return false;
                }  else if(wirthday.value == "") {
                    return false;
                } else {
                    accounts.account2Balance -= wirthday.value;
                    textDiv.textContent = `${accounts.account2Balance} $`
                    greenDv.textContent = `თანხის გამოტანამ წარმატებით ჩაიარა`
                    greenDv.style.color = "green"
                }
            })

            const depsoitButton = document.createElement("button");
            const Depsoitinput = document.createElement("input")
            Depsoitinput.type = "number"
            Depsoitinput.placeholder = "Enter money amount"
            depsoitButton.textContent = "Depsoit"


            div.append(depsoitButton)
            div.append(Depsoitinput)

            depsoitButton.addEventListener("click",function(e){
                e.preventDefault()

                const depositAmount = parseInt(Depsoitinput.value)
                
                if(depositAmount > 2000) {
                    alert("შენ არ შეგიძლია 2000$-ზე მეტის შეტანა ბალანსზე")
                } else if(Depsoitinput.value == "") {
                    return false
                } else {                                     
                    accounts.account2Balance += depositAmount
                    textDiv.textContent = `${accounts.account2Balance} $`
                    alert("თანხის შეტანამ წარმატებით ჩაიარა")
                }
            })
        } 
    })

    button.addEventListener("click",function(e){
        e.preventDefault()

        if(input.value == accounts.account3Pin){
            div.style.width = 500+"px"
            div.style.height = 500+"px"
            div.style.backgroundColor = "black"
            div.style.borderRadius = "15px"
     
            div.style.color = "white"

            div.textContent = accounts.account3
            div.style.paddingTop = 100+"px"
            div.style.paddingLeft = 200+"px"
            div.style.marginTop = "20px"

            const button1 = document.createElement("button");

            div.append(button1)

            button1.textContent = "View Balance"

            const textDiv = document.createElement("div");
            div.append(textDiv)

            button1.addEventListener("click",function(e){
                e.preventDefault()
                textDiv.textContent = `${accounts.account3Balance} $`
            })

            const wirthday = document.createElement("input");
            wirthday.type = "number"
            wirthday.placeholder = "Enter How much money do you want to wirthday"

            const wirthdayButton = document.createElement("button");

            div.append(wirthday)

            wirthday.textContent = "Wirthday"

            div.append(wirthdayButton)

            wirthdayButton.textContent = "Wirthday"


            wirthdayButton.addEventListener("click",function(e){
                e.preventDefault()
                const errorDv = document.createElement("div");
                const greenDv = document.createElement("div");
                div.append(errorDv)
                div.append(greenDv)
                if(parseInt(wirthday.value) > accounts.account3Balance) {
                    errorDv.textContent = "ბალანსზე არ არის საკმარისი თანხა/ERROR"
                    errorDv.style.color = "red"
                    return false;
                }  else if(wirthday.value == "") {
                    return false;
                } else {
                    accounts.account1Balance -= wirthday.value;
                    textDiv.textContent = `${accounts.account3Balance} $`
                    greenDv.textContent = `თანხის გამოტანამ წარმატებით ჩაიარა`
                    greenDv.style.color = "green"
                }
            })

            const depsoitButton = document.createElement("button");
            const Depsoitinput = document.createElement("input")
            Depsoitinput.type = "number"
            Depsoitinput.placeholder = "Enter money amount"
            depsoitButton.textContent = "Depsoit"


            div.append(depsoitButton)
            div.append(Depsoitinput)

            depsoitButton.addEventListener("click",function(e){
                e.preventDefault()

                const depositAmount = parseInt(Depsoitinput.value)
                
                if(depositAmount > 2000) {
                    alert("შენ არ შეგიძლია 2000$-ზე მეტის შეტანა ბალანსზე")
                } else if(Depsoitinput.value == "") {
                    return false
                } else {                                     
                    accounts.account3Balance += depositAmount
                    textDiv.textContent = `${accounts.account3Balance} $`
                    alert("თანხის შეტანამ წარმატებით ჩაიარა")
                }
            })
        } 
    })
    button.addEventListener("click",function(e){
        e.preventDefault()

        if(input.value == accounts.account4Pin){
            div.style.width = 500+"px"
            div.style.height = 500+"px"
            div.style.backgroundColor = "black"
            div.style.borderRadius = "15px"
     
            div.style.color = "white"

            div.textContent = accounts.account4
            div.style.paddingTop = 100+"px"
            div.style.paddingLeft = 200+"px"
            div.style.marginTop = "20px"

            const button1 = document.createElement("button");

            div.append(button1)

            button1.textContent = "View Balance"

            const textDiv = document.createElement("div");
            div.append(textDiv)

            button1.addEventListener("click",function(e){
                e.preventDefault()
                textDiv.textContent = `${accounts.account4Balance} $`
            })

            const wirthday = document.createElement("input");
            wirthday.type = "number"
            wirthday.placeholder = "Enter How much money do you want to wirthday"

            const wirthdayButton = document.createElement("button");

            div.append(wirthday)

            wirthday.textContent = "Wirthday"

            div.append(wirthdayButton)

            wirthdayButton.textContent = "Wirthday"


            wirthdayButton.addEventListener("click",function(e){
                e.preventDefault()
                const errorDv = document.createElement("div");
                const greenDv = document.createElement("div");
                div.append(errorDv)
                div.append(greenDv)
                if(parseInt(wirthday.value) > accounts.account4Balance) {
                    errorDv.textContent = "ბალანსზე არ არის საკმარისი თანხა/ERROR"
                    errorDv.style.color = "red"
                    return false;
                }  else if(wirthday.value == "") {
                    return false;
                } else {
                    accounts.account4Balance -= wirthday.value;
                    textDiv.textContent = `${accounts.account4Balance} $`
                    greenDv.textContent = `თანხის გამოტანამ წარმატებით ჩაიარა`
                    greenDv.style.color = "green"
                }
            })

            const depsoitButton = document.createElement("button");
            const Depsoitinput = document.createElement("input")
            Depsoitinput.type = "number"
            Depsoitinput.placeholder = "Enter money amount"
            depsoitButton.textContent = "Depsoit"


            div.append(depsoitButton)
            div.append(Depsoitinput)

            depsoitButton.addEventListener("click",function(e){
                e.preventDefault()

                const depositAmount = parseInt(Depsoitinput.value)
                
                if(depositAmount > 2000) {
                    alert("შენ არ შეგიძლია 2000$-ზე მეტის შეტანა ბალანსზე")
                } else if(Depsoitinput.value == "") {
                    return false
                } else {                                     
                    accounts.account4Balance += depositAmount
                    textDiv.textContent = `${accounts.account4Balance} $`
                    alert("თანხის შეტანამ წარმატებით ჩაიარა")
                }
            })
        } 
    })
    button.addEventListener("click",function(e){
        e.preventDefault()

        if(input.value == accounts.account5Pin){
            div.style.width = 500+"px"
            div.style.height = 500+"px"
            div.style.backgroundColor = "black"
            div.style.borderRadius = "15px"
     
            div.style.color = "white"

            div.textContent = accounts.account5
            div.style.paddingTop = 100+"px"
            div.style.paddingLeft = 200+"px"
            div.style.marginTop = "20px"

            const button1 = document.createElement("button");

            div.append(button1)

            button1.textContent = "View Balance"

            const textDiv = document.createElement("div");
            div.append(textDiv)

            button1.addEventListener("click",function(e){
                e.preventDefault()
                textDiv.textContent = `${accounts.account5Balance} $`
            })

            const wirthday = document.createElement("input");
            wirthday.type = "number"
            wirthday.placeholder = "Enter How much money do you want to wirthday"

            const wirthdayButton = document.createElement("button");

            div.append(wirthday)

            wirthday.textContent = "Wirthday"

            div.append(wirthdayButton)

            wirthdayButton.textContent = "Wirthday"


            wirthdayButton.addEventListener("click",function(e){
                e.preventDefault()
                const errorDv = document.createElement("div");
                const greenDv = document.createElement("div");
                div.append(errorDv)
                div.append(greenDv)
                if(parseInt(wirthday.value) > accounts.account5Balance) {
                    errorDv.textContent = "ბალანსზე არ არის საკმარისი თანხა/ERROR"
                    errorDv.style.color = "red"
                    return false;
                }  else if(wirthday.value == "") {
                    return false;
                } else {
                    accounts.account5Balance -= wirthday.value;
                    textDiv.textContent = `${accounts.account5Balance} $`
                    greenDv.textContent = `თანხის გამოტანამ წარმატებით ჩაიარა`
                    greenDv.style.color = "green"
                }
            })

            const depsoitButton = document.createElement("button");
            const Depsoitinput = document.createElement("input")
            Depsoitinput.type = "number"
            Depsoitinput.placeholder = "Enter money amount"
            depsoitButton.textContent = "Depsoit"


            div.append(depsoitButton)
            div.append(Depsoitinput)

            depsoitButton.addEventListener("click",function(e){
                e.preventDefault()

                const depositAmount = parseInt(Depsoitinput.value)
                
                if(depositAmount > 2000) {
                    alert("შენ არ შეგიძლია 2000$-ზე მეტის შეტანა ბალანსზე")
                } else if(Depsoitinput.value == "") {
                    return false
                } else {                                     
                    accounts.account5Balance += depositAmount
                    textDiv.textContent = `${accounts.account5Balance} $`
                    alert("თანხის შეტანამ წარმატებით ჩაიარა")
                }
            })
        } 
    })

    button.addEventListener("click",function(e){
        e.preventDefault()

        if(input.value == accounts.account6Pin){
            div.style.width = 500+"px"
            div.style.height = 500+"px"
            div.style.backgroundColor = "black"
            div.style.borderRadius = "15px"
     
            div.style.color = "white"

            div.textContent = accounts.account6
            div.style.paddingTop = 100+"px"
            div.style.paddingLeft = 200+"px"
            div.style.marginTop = "20px"

            const button1 = document.createElement("button");

            div.append(button1)

            button1.textContent = "View Balance"

            const textDiv = document.createElement("div");
            div.append(textDiv)

            button1.addEventListener("click",function(e){
                e.preventDefault()
                textDiv.textContent = `${accounts.account6Balance} $`
            })

            const wirthday = document.createElement("input");
            wirthday.type = "number"
            wirthday.placeholder = "Enter How much money do you want to wirthday"

            const wirthdayButton = document.createElement("button");

            div.append(wirthday)

            wirthday.textContent = "Wirthday"

            div.append(wirthdayButton)

            wirthdayButton.textContent = "Wirthday"


            wirthdayButton.addEventListener("click",function(e){
                e.preventDefault()
                const errorDv = document.createElement("div");
                const greenDv = document.createElement("div");
                div.append(errorDv)
                div.append(greenDv)
                if(parseInt(wirthday.value) > accounts.account6Balance) {
                    errorDv.textContent = "ბალანსზე არ არის საკმარისი თანხა/ERROR"
                    errorDv.style.color = "red"
                    return false;
                }  else if(wirthday.value == "") {
                    return false;
                } else {
                    accounts.account6Balance -= wirthday.value;
                    textDiv.textContent = `${accounts.account6Balance} $`
                    greenDv.textContent = `თანხის გამოტანამ წარმატებით ჩაიარა`
                    greenDv.style.color = "green"
                }
            })

            const depsoitButton = document.createElement("button");
            const Depsoitinput = document.createElement("input")
            Depsoitinput.type = "number"
            Depsoitinput.placeholder = "Enter money amount"
            depsoitButton.textContent = "Depsoit"


            div.append(depsoitButton)
            div.append(Depsoitinput)

            depsoitButton.addEventListener("click",function(e){
                e.preventDefault()

                const depositAmount = parseInt(Depsoitinput.value)
                
                if(depositAmount > 2000) {
                    alert("შენ არ შეგიძლია 2000$-ზე მეტის შეტანა ბალანსზე")
                } else if(Depsoitinput.value == "") {
                    return false
                } else {                                     
                    accounts.account6Balance += depositAmount
                    textDiv.textContent = `${accounts.account6Balance} $`
                    alert("თანხის შეტანამ წარმატებით ჩაიარა")
                }
            })
        } 
    })

    button.addEventListener("click",function(e){
        e.preventDefault()

        if(input.value == accounts.account7Pin){
            div.style.width = 500+"px"
            div.style.height = 500+"px"
            div.style.backgroundColor = "black"
            div.style.borderRadius = "15px"
     
            div.style.color = "white"

            div.textContent = accounts.account7
            div.style.paddingTop = 100+"px"
            div.style.paddingLeft = 200+"px"
            div.style.marginTop = "20px"

            const button1 = document.createElement("button");

            div.append(button1)

            button1.textContent = "View Balance"

            const textDiv = document.createElement("div");
            div.append(textDiv)

            button1.addEventListener("click",function(e){
                e.preventDefault()
                textDiv.textContent = `${accounts.account7Balance} $`
            })

            const wirthday = document.createElement("input");
            wirthday.type = "number"
            wirthday.placeholder = "Enter How much money do you want to wirthday"

            const wirthdayButton = document.createElement("button");

            div.append(wirthday)

            wirthday.textContent = "Wirthday"

            div.append(wirthdayButton)

            wirthdayButton.textContent = "Wirthday"


            wirthdayButton.addEventListener("click",function(e){
                e.preventDefault()
                const errorDv = document.createElement("div");
                const greenDv = document.createElement("div");
                div.append(errorDv)
                div.append(greenDv)
                if(parseInt(wirthday.value) > accounts.account7Balance) {
                    errorDv.textContent = "ბალანსზე არ არის საკმარისი თანხა/ERROR"
                    errorDv.style.color = "red"
                    return false;
                }  else if(wirthday.value == "") {
                    return false;
                } else {
                    accounts.account7Balance -= wirthday.value;
                    textDiv.textContent = `${accounts.account7Balance} $`
                    greenDv.textContent = `თანხის გამოტანამ წარმატებით ჩაიარა`
                    greenDv.style.color = "green"
                }
            })

            const depsoitButton = document.createElement("button");
            const Depsoitinput = document.createElement("input")
            Depsoitinput.type = "number"
            Depsoitinput.placeholder = "Enter money amount"
            depsoitButton.textContent = "Depsoit"


            div.append(depsoitButton)
            div.append(Depsoitinput)

            depsoitButton.addEventListener("click",function(e){
                e.preventDefault()

                const depositAmount = parseInt(Depsoitinput.value)
                
                if(depositAmount > 2000) {
                    alert("შენ არ შეგიძლია 2000$-ზე მეტის შეტანა ბალანსზე")
                } else if(Depsoitinput.value == "") {
                    return false
                } else {                                     
                    accounts.account7Balance += depositAmount
                    textDiv.textContent = `${accounts.account7Balance} $`
                    alert("თანხის შეტანამ წარმატებით ჩაიარა")
                }
            })
        } 
    })

    button.addEventListener("click",function(e){
        e.preventDefault()

        if(input.value == accounts.account8Pin){
            div.style.width = 500+"px"
            div.style.height = 500+"px"
            div.style.backgroundColor = "black"
            div.style.borderRadius = "15px"
     
            div.style.color = "white"

            div.textContent = accounts.account8
            div.style.paddingTop = 100+"px"
            div.style.paddingLeft = 200+"px"
            div.style.marginTop = "20px"

            const button1 = document.createElement("button");

            div.append(button1)

            button1.textContent = "View Balance"

            const textDiv = document.createElement("div");
            div.append(textDiv)

            button1.addEventListener("click",function(e){
                e.preventDefault()
                textDiv.textContent = `${accounts.account8Balance} $`
            })

            const wirthday = document.createElement("input");
            wirthday.type = "number"
            wirthday.placeholder = "Enter How much money do you want to wirthday"

            const wirthdayButton = document.createElement("button");

            div.append(wirthday)

            wirthday.textContent = "Wirthday"

            div.append(wirthdayButton)

            wirthdayButton.textContent = "Wirthday"


            wirthdayButton.addEventListener("click",function(e){
                e.preventDefault()
                const errorDv = document.createElement("div");
                const greenDv = document.createElement("div");
                div.append(errorDv)
                div.append(greenDv)
                if(parseInt(wirthday.value) > accounts.account8Balance) {
                    errorDv.textContent = "ბალანსზე არ არის საკმარისი თანხა/ERROR"
                    errorDv.style.color = "red"
                    return false;
                }  else if(wirthday.value == "") {
                    return false;
                } else {
                    accounts.account8Balance -= wirthday.value;
                    textDiv.textContent = `${accounts.account8Balance} $`
                    greenDv.textContent = `თანხის გამოტანამ წარმატებით ჩაიარა`
                    greenDv.style.color = "green"
                }
            })

            const depsoitButton = document.createElement("button");
            const Depsoitinput = document.createElement("input")
            Depsoitinput.type = "number"
            Depsoitinput.placeholder = "Enter money amount"
            depsoitButton.textContent = "Depsoit"


            div.append(depsoitButton)
            div.append(Depsoitinput)

            depsoitButton.addEventListener("click",function(e){
                e.preventDefault()

                const depositAmount = parseInt(Depsoitinput.value)
                
                if(depositAmount > 2000) {
                    alert("შენ არ შეგიძლია 2000$-ზე მეტის შეტანა ბალანსზე")
                } else if(Depsoitinput.value == "") {
                    return false
                } else {                                     
                    accounts.account8Balance += depositAmount
                    textDiv.textContent = `${accounts.account8Balance} $`
                    alert("თანხის შეტანამ წარმატებით ჩაიარა")
                }
            })
        } 
    })

    button.addEventListener("click",function(e){
        e.preventDefault()

        if(input.value == accounts.account9Pin){
            div.style.width = 500+"px"
            div.style.height = 500+"px"
            div.style.backgroundColor = "black"
            div.style.borderRadius = "15px"
     
            div.style.color = "white"

            div.textContent = accounts.account9
            div.style.paddingTop = 100+"px"
            div.style.paddingLeft = 200+"px"
            div.style.marginTop = "20px"

            const button1 = document.createElement("button");

            div.append(button1)

            button1.textContent = "View Balance"

            const textDiv = document.createElement("div");
            div.append(textDiv)

            button1.addEventListener("click",function(e){
                e.preventDefault()
                textDiv.textContent = `${accounts.account9Balance} $`
            })

            const wirthday = document.createElement("input");
            wirthday.type = "number"
            wirthday.placeholder = "Enter How much money do you want to wirthday"

            const wirthdayButton = document.createElement("button");

            div.append(wirthday)

            wirthday.textContent = "Wirthday"

            div.append(wirthdayButton)

            wirthdayButton.textContent = "Wirthday"


            wirthdayButton.addEventListener("click",function(e){
                e.preventDefault()
                const errorDv = document.createElement("div");
                const greenDv = document.createElement("div");
                div.append(errorDv)
                div.append(greenDv)
                if(parseInt(wirthday.value) > accounts.account9Balance) {
                    errorDv.textContent = "ბალანსზე არ არის საკმარისი თანხა/ERROR"
                    errorDv.style.color = "red"
                    return false;
                }  else if(wirthday.value == "") {
                    return false;
                } else {
                    accounts.account9Balance -= wirthday.value;
                    textDiv.textContent = `${accounts.account9Balance} $`
                    greenDv.textContent = `თანხის გამოტანამ წარმატებით ჩაიარა`
                    greenDv.style.color = "green"
                }
            })

            const depsoitButton = document.createElement("button");
            const Depsoitinput = document.createElement("input")
            Depsoitinput.type = "number"
            Depsoitinput.placeholder = "Enter money amount"
            depsoitButton.textContent = "Depsoit"


            div.append(depsoitButton)
            div.append(Depsoitinput)

            depsoitButton.addEventListener("click",function(e){
                e.preventDefault()

                const depositAmount = parseInt(Depsoitinput.value)
                
                if(depositAmount > 2000) {
                    alert("შენ არ შეგიძლია 2000$-ზე მეტის შეტანა ბალანსზე")
                } else if(Depsoitinput.value == "") {
                    return false
                } else {                                     
                    accounts.account9Balance += depositAmount
                    textDiv.textContent = `${accounts.account9Balance} $`
                    alert("თანხის შეტანამ წარმატებით ჩაიარა")
                }
            })
        } 
    })

    button.addEventListener("click",function(e){
        e.preventDefault()

        if(input.value == accounts.account10Pin){
            div.style.width = 500+"px"
            div.style.height = 500+"px"
            div.style.backgroundColor = "black"
            div.style.borderRadius = "15px"
     
            div.style.color = "white"

            div.textContent = accounts.account10
            div.style.paddingTop = 100+"px"
            div.style.paddingLeft = 200+"px"
            div.style.marginTop = "20px"

            const button1 = document.createElement("button");

            div.append(button1)

            button1.textContent = "View Balance"

            const textDiv = document.createElement("div");
            div.append(textDiv)

            button1.addEventListener("click",function(e){
                e.preventDefault()
                textDiv.textContent = `${accounts.account10Balance} $`
            })

            const wirthday = document.createElement("input");
            wirthday.type = "number"
            wirthday.placeholder = "Enter How much money do you want to wirthday"

            const wirthdayButton = document.createElement("button");

            div.append(wirthday)

            wirthday.textContent = "Wirthday"

            div.append(wirthdayButton)

            wirthdayButton.textContent = "Wirthday"


            wirthdayButton.addEventListener("click",function(e){
                e.preventDefault()
                const errorDv = document.createElement("div");
                const greenDv = document.createElement("div");
                div.append(errorDv)
                div.append(greenDv)
                if(parseInt(wirthday.value) > accounts.account10Balance) {
                    errorDv.textContent = "ბალანსზე არ არის საკმარისი თანხა/ERROR"
                    errorDv.style.color = "red"
                    return false;
                }  else if(wirthday.value == "") {
                    return false;
                } else {
                    accounts.account10Balance -= wirthday.value;
                    textDiv.textContent = `${accounts.account10Balance} $`
                    greenDv.textContent = `თანხის გამოტანამ წარმატებით ჩაიარა`
                    greenDv.style.color = "green"
                }
            })

            const depsoitButton = document.createElement("button");
            const Depsoitinput = document.createElement("input")
            Depsoitinput.type = "number"
            Depsoitinput.placeholder = "Enter money amount"
            depsoitButton.textContent = "Depsoit"


            div.append(depsoitButton)
            div.append(Depsoitinput)

            depsoitButton.addEventListener("click",function(e){
                e.preventDefault()

                const depositAmount = parseInt(Depsoitinput.value)
                
                if(depositAmount > 2000) {
                    alert("შენ არ შეგიძლია 2000$-ზე მეტის შეტანა ბალანსზე")
                } else if(Depsoitinput.value == "") {
                    return false
                } else {                                     
                    accounts.account10Balance += depositAmount
                    textDiv.textContent = `${accounts.account10Balance} $`
                    alert("თანხის შეტანამ წარმატებით ჩაიარა")
                }
            })
        } // 10
})}
pins()