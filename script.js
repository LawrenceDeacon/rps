// Listener
const button = document.querySelectorAll('button');
const playButton = document.querySelector('#play');
button.forEach((e) => {
    e.addEventListener('click', function (e) {
        console.log(e.target.outerText);
        playerChoice = e.target.outerText;
        if(e.target.outerText == "Play" || e.target.outerText == "Cancel"){
            if (play == false) {
                play = true;
                playButton.textContent = "Cancel";
            }else if(play == true){
                play = false;
                playButton.textContent = "Play";
            }
        }else{
            playerChoice = e.target.outerText;

        }
    });
})

// Toggles when pressing play button
let play = false;

// Results array to determine winner
let results = [];


// Player choice
let playerChoice;
// Computer Choice
function computerPlays() {
    let choice = Math.random();
    // let choice = 0.6;
    let result;
    if (choice < 0.3) {
        result = "rock";
    } else if (choice >= 0.3 && choice <= 0.6) {
        result = "paper";
    } else if (choice > 0.6) {
        result = "scissors"
    }
    // console.log(choice);
    // console.log(result);
    return result;
}

function game() {
    for (let index = 0; index < 2; index++) {
        results[index] = playerChoice.toLowerCase();
        computerPlays();
        // console.log(results[index]);
    }
    console.log(results);
    let win = 0;
    let tie = 0;
    let lose = 0;
    results.forEach((item) => {
        if (item == 'lose') {
            lose++
        } else if (item == 'win') {
            win++
        } else {
            tie++
        }
    })
    if (win > tie && win > lose) {
        console.log("You Have won!")
    } else if (lose > tie && lose > win) {
        console.log("You Have Lost!")
    } else {
        console.log("You Have Tied!")
    }
    win = 0;
    tie = 0;
    lose = 0;
}

function comparison(player, computer) {
    switch (player) {
        case "rock":
            if (computer == "rock") {
                console.log("This was a tie!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
                return "tie";
            } else if (computer == "paper") {
                console.log("You Lose!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
                return "lose";
            } else {
                console.log("You Win!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
                return "Win";
            }
            break;
        case "paper":
            if (computer == "rock") {
                console.log("You Win!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
                return "Win";
            } else if (computer == "paper") {
                console.log("This was a tie!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
                return "tie";
            } else {
                console.log("You Lose!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
                return "Lose";
            }
            break;
        case "scissors":
            if (computer == "rock") {
                console.log("You Lose!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
                return "Lose";
            } else if (computer == "paper") {
                console.log("You Win!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
                return "Win";
            } else {
                console.log("This was a tie!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
                return "tie";
            }
            break;

        default:
            alert("Try Again!")
            computerPlays();
            break;
    }
}