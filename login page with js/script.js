const myForm = document.getElementById("Myform");
const button = document.getElementById("btn");

function getAllElements(){
    const firstName = document.getElementById("namme").value;
    const surname = document.getElementById("surname").value;
    const CreatePassword = document.getElementById("createPassword").value;
    const RepeatPassword = document.getElementById("repeatPassword").value;

    
    if(firstName == "") {
        alert("შესაყვანი ველი არ შეიძლება იყოს ცარიელი!")
    } else if(surname == "") {
        alert("შესაყვანი ველი არ შეიძლება იყოს ცარიელი!")
    } else if(CreatePassword == "") {
        alert("შესაყვანი ველი არ შეიძლება იყოს ცარიელი!")
        return false
    } else if(CreatePassword != RepeatPassword) {
        alert("არასწორია გთხოვთ პაროლი გაიმეორეთ სწორად!")
        return false
    } else if(CreatePassword == RepeatPassword) {
        alert("რეგისტრაციამ წარმატებით ჩაიარა")
        alert(`Hello ${firstName},${surname}`)
        window.location.href = "about.html" 
        return true
    }
};