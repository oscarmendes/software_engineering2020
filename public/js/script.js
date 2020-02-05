let btnRoll = document.querySelector('#btn-roll');
let dieOnScreen = document.querySelector('#dice')

btnRoll.addEventListener('click', function() {
    
    let dieToss = valueForDice();

    displayDice(dieOnScreen, dieToss);
    console.log(dieOnScreen);
})


function valueForDice(){
    
    let dieScore = Math.round(Math.random() * 5) + 1;
    return dieScore;
} 

function displayDice(die, dieScore){
    
    let previousScore = die.className;
    console.log(previousScore);

    let newScore = 'dice_' + dieScore;
    console.log(newScore);

    die.classList.replace(previousScore, newScore);
}
