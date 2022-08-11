let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;

let obj = {
        playerName : "Player",
        Chips : 145
}


let newArray = [firstCard , secondCard]

function getRandomCard(){
     let rand = Math.floor(Math.random() * 11)+1; 
     if(rand === 1){
        return 11;
     }
    return rand;
}


function summer(){
    document.getElementById("summ").innerText = "Sum : " + sum;
    if(sum < 21){
        document.getElementById("what").innerText = "Add Card or Stay?"
        document.getElementById("cards").innerText = "Your Cards : ";
        for(let i =0; i< newArray.length; i++){
            document.getElementById("cards").innerText += newArray[i] + "-";
        }
    }else if(sum === 21){
        document.getElementById("what").innerText = "You Win"
        document.getElementById("cards").innerText = "Your Cards : " ;
        for(let i =0; i< newArray.length; i++){
            document.getElementById("cards").innerText += newArray[i] + "-";
        }
    }else{
        document.getElementById("what").innerText = "Sorry You Lost"
        document.getElementById("cards").innerText = "Your Cards : ";
        for(let i =0; i< newArray.length; i++){
            document.getElementById("cards").innerText += newArray[i] + "-";
        }
    }
}

function newCard(){
    if(sum < 21 ){
        let addCard = getRandomCard();
        sum += addCard;
        newArray.push(addCard); 
         summer();
    }
   
}


function restart(){
    document.getElementById("what").innerText = "Wanna Play Game?";
    document.getElementById("cards").innerText = "Your Cards :";
    document.getElementById("summ").innerText = "Sum : ";
    sum = firstCard+secondCard;
}


document.getElementById("chips").textContent = obj.playerName + ": " + obj.Chips + "$";


let fruits = ["apple", "apple","orange","apple","orange"]


function shelf(){
    for(let i= 0; i< fruits.length; i++){
        if(fruits[i] === "apple"){
            document.getElementById("apple").textContent += "apple ";
            
            console.log(i)
        }else if(fruits[i] === "orange"){
            document.getElementById("orange").textContent += "orange ";
        }
    }
}

shelf();