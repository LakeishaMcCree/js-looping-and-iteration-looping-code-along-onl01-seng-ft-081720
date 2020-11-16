// Code your solutions in this file
const cards = []
function writeCards(array, string) {
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return cards;
}

function countDown(number) {
    while (number >= 0){
        console.log(number--)
    }
}

