// Create your game here!

const displayTries = document.getElementById("user-tries")
const maxTries = 5;

function startGame() {
    const answer = Math.floor(Math.random() * 10);
    // promptUser();
    let numTries = 0;
    while (numTries < maxTries) {
       // promptUser(answer);
        let answered = promptUser(answer);
        if (!answered){
            break;
        }
        numTries++;
        displayTries.textContent = maxTries - numTries + "left."
        console.log("User is on try " + numTries);
    }
}

function promptUser(answer) {
    let userNum = prompt("Please enter a number from 1 - 10");
    //console.log(userNum);
    // console.log(answer);
    if (userNum !== null && typeof userNum == "number") {
        if (userNum === answer) {
            alert("You guessed it right!");
        }
        else if (userNum > answer) {
            alert("Your guess is too high");
        }
        else if (userNum < answer) {
            alert("Your guess is too low");
        }
    }
    else if (typeof userNum !== "number"){
      alert("You did not enter a valid number.");
    } else{ 
        alert("You did not guess anything");
        return false;
    }return true;
    
}