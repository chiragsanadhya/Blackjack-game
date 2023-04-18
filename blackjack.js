let notification = document.getElementById("new_card")
let drawingCard1 = document.getElementById("card1")
let drawingCard2 = document.getElementById("card2")
let sum_of_cards = document.getElementById("sum")
function randomNumber() {
    return Math.floor(Math.random()*13 + 1)
}
let card1 = randomNumber()
let card2 = randomNumber()
let sum = card1 + card2
let thirdCard = randomNumber()
let newSum = sum + thirdCard

function drawthird() {
    
    sum_of_cards.innerText = "SUM : " + newSum

    if ( newSum < 21) {
        notification.textContent = "You lost"
    }
    else if ( newSum === 21){
        notification.textContent = "You WON Hurray!!!"
    }
    else if (newSum > 21){
        notification.textContent = "You Lost"
    }
}

function draw(){
    drawingCard1.innerText = "CARD 1 : " + card1
    drawingCard2.innerText = "CARD 2 : " + card2
    sum_of_cards.innerText = "SUM : " + sum
    if ( sum < 21) {
        notification.textContent = "You can draw another card by clicking on 'DRAW THIRD CARD' button"
    }
    else if ( sum === 21){
        notification.textContent = "You WON Hurray!!!"
    }
    else if (sum > 21){
        notification.textContent = "You Lost"
    }
}



