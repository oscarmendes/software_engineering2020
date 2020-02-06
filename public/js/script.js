let btnRoll = document.querySelector('#btn-roll');
let dieOnScreen = document.querySelector('#animation');
let audio = new Audio('/sound/diceTossed.wav');

btnRoll.addEventListener('click', function() {
    
    let dieToss = valueForDice();

    startAnimation();
    //displayDice(dieOnScreen, dieToss);
    //console.log(dieOnScreen);
})

function valueForDice(){
    
    let dieScore = Math.round(Math.random() * 5) + 1;
    return dieScore;
} 

function displayDice(image, numOfImage){
    
    console.log(image);
    image.src = 'img/die0' + numOfImage + '.png';   
}

function startAnimation(){
    
    var frameHeight = -150; 
    var frame;
    let dieOnScreen = document.querySelector('#animation');
    let timeout = 0;
    console.log(dieOnScreen);
    audio.play();
    
    var animationLoop = setInterval( function() {
        
        var frames = Math.round(Math.random() * 5);
        frame = frames*frameHeight;
        ++timeout;
        console.log(timeout);
        dieOnScreen.style.backgroundPosition = frame + "px" + " 0px";
        if (timeout == 14){
            clearInterval(animationLoop);
        }
    }, 125);
    
}
