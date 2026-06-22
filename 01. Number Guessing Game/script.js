const userInput = document.querySelector(".user_input");
const game = document.querySelector((".game"));
const gameStatus = document.querySelector(".gameStatus");
const allGusses = document.querySelector(".allGusses");
const submit = document.querySelector(".submit");
const startGame = document.querySelector(".start_game");
const usedValues = [];


(function(){
    let randomNumber = Math.round(Math.random()*100);


game.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);

    if(randomNumber === userInputValue)
        {
            gameStatus.innerText = "You win!!!";
            submit.disabled = true;
            startGame.disabled = false;
            
        }
    else if(randomNumber < userInputValue)
        {
            gameStatus.innerText = "Too High!!!";
        }    
    else
        {
            gameStatus.innerText = "Too Low!!!"
        }

    usedValues.push(userInputValue);
    allGusses.innerText = 'Your Gusses ' + usedValues.join(",")

    userInput.value = "";

})

startGame.addEventListener('click' , ()=>{
    gameStatus.innerText = ""
    allGusses.innerText = "";
    submit.disabled = false;
    startGame.disabled = true;
    randomNumber = Math.round(Math.random()*100);

})

})

();
