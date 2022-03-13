// Rock paper scissors in console

// Computer Choice
let computerChoice = computerPlays()
function computerPlays() {
    let choice = Math.random();
    // let choice = 0.6;
    let result;
    function computation() {
        if (choice < 0.3) {
            result = "rock";
        } else if (choice >= 0.3 && choice <= 0.6) {
            result = "paper";
        } else if (choice > 0.6) {
            result = "scissors"
        }
    }
    computation();
    return result;
    // console.log(choice);
    // console.log(result);
}

// Player Choice
function playerChoice (){
    let choice = prompt().toLowerCase();
    console.log(playerChoice);
    comparison(choice, computerChoice);
}

function comparison(player, computer) {
    switch (player) {
        case "rock":
            if (computer == "rock") {
                console.log("This was a tie!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
            } else if(computer == "paper"){
                console.log("You Lose!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
            }else{
                console.log("You Win!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
            }
            break;
        case "paper":
            if (computer == "rock") {
                console.log("You Win!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
            } else if(computer == "paper"){
                console.log("This was a tie!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
            }else{
                console.log("You Lose!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
            }
            break;
        case "scissors":
            if (computer == "rock") {
                console.log("You Lose!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
            } else if(computer == "paper"){
                console.log("You Win!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
            }else{
                console.log("This was a tie!");
                console.log(`Player chose ${player} & Computer chose ${computer}`)
            }
            break;

        default:
            alert("Try Again!")
            computerPlays();
            playerChoice();
            break;
    }
}

playerChoice();