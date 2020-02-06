let btnRoll = document.querySelector('#btn-roll');
let dieOnScreen = document.querySelector('#dieImg')

btnRoll.addEventListener('click', function() {
    
    let dieToss = valueForDice();

    displayDice(dieOnScreen, dieToss);
    console.log(dieOnScreen);
})


function valueForDice(){
    
    let dieScore = Math.round(Math.random() * 5) + 1;
    return dieScore;
} 

function displayDice(image, numOfImage){
    
    console.log(image);
    image.src = 'img/die0' + numOfImage + '.png';
    

}
