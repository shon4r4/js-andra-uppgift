var proceed = false;
    while(!proceed) 
    {
        tag = prompt("Vänligen fyll i ditt namn");
        if (typeof(tag) == "string") 
        {
            tag = tag.trim();


            if (tag=="")
            {
                proceed = false;
                alert('Ogiltig inmatning.');
            }
            else
            {
              proceed=true;

            }
        }
        if (tag===null)
        {
            proceed = false;
            alert('Vänligen fyll i ditt namn');
            break;
        }
    }
    if(proceed)
    {
        document.getElementById("s-name").textContent = tag;
    }




const selectionButtons = document.querySelectorAll("[data-selection]");


selectionButtons.forEach(selectionButtons =>  {
    selectionButtons.addEventListener("click", e => {
        const selectionName = selectionButtons.dataset.selection
        playerMove(selectionName)
    }) 


})


function playerMove(input){
    const computerMove = generateComputerMove();
    const playersMove = input;
    whoWins(playersMove, computerMove);
}


function generateComputerMove(){
    const randomNr =  Math.floor(Math.random() * 3) + 1;
    
    switch(randomNr){
        case 1:
            return "sten";
            break;
        case 2:
            return "sax";
            break;
        case 3:
            return "påse";
            break;    
    }
}

function whoWins(player,computer){
    let playerScore = parseInt(document.getElementsByClassName("r-point")[0].textContent);
    let computerScore = parseInt(document.getElementsByClassName("r-point")[1].textContent);

    if(player == "sten"){
        if(computer == "sten"){
            appendMove(player,computer)
            document.getElementById("vinnare").textContent = "Oavgjort"
            document.getElementById("vinnare").style.display = "block";
        }

        if(computer == "sax"){
            playerScore++;
            document.getElementsByClassName("r-point")[0].textContent = playerScore;
            appendMove(player,computer)
            document.getElementById("vinnare").textContent = "Spelaren vinner"
            document.getElementById("vinnare").style.display = "block";
            
        }

        if(computer == "påse"){
            computerScore++;
            document.getElementsByClassName("r-point")[1].textContent = computerScore;
            appendMove(player,computer)
            document.getElementById("vinnare").textContent = "Datorn vinner"
            document.getElementById("vinnare").style.display = "block";
        }

    }

    if(player == "påse"){
        if(computer == "påse"){
            appendMove(player,computer)
            document.getElementById("vinnare").textContent = "Oavgjort"
            document.getElementById("vinnare").style.display = "block";
        }

        if(computer == "sten"){
            playerScore++;
            document.getElementsByClassName("r-point")[0].textContent = playerScore;
            appendMove(player,computer)
            document.getElementById("vinnare").textContent = "Spelaren vinner"
            document.getElementById("vinnare").style.display = "block";
        }

        if(computer == "sax"){
            computerScore++;
            document.getElementsByClassName("r-point")[1].textContent = computerScore;
            appendMove(player,computer)
            document.getElementById("vinnare").textContent = "Datorn vinner"
            document.getElementById("vinnare").style.display = "block";
        }

    }

    if(player == "sax"){
        if(computer == "sax"){
            appendMove(player,computer)
            document.getElementById("vinnare").textContent = "Oavgjort"
            document.getElementById("vinnare").style.display = "block";
        }

        if(computer == "påse"){
            playerScore++;
            document.getElementsByClassName("r-point")[0].textContent = playerScore;
            appendMove(player,computer)
            document.getElementById("vinnare").textContent = "Spelaren vinner"
            document.getElementById("vinnare").style.display = "block";
        }

        if(computer == "påse"){
            computerScore++;
            document.getElementsByClassName("r-point")[1].textContent = computerScore;
            appendMove(player,computer) 
            document.getElementById("vinnare").textContent = "Datorn vinner"
            document.getElementById("vinnare").style.display = "block";
        }

    }

    endGame();

}

function appendMove(player, computer){
    const playersMoveList = document.getElementsByClassName("spelaren")[0];
    const computerMoveList = document.getElementsByClassName("datorn")[0];

    switch(player){

            case "sten":
                var element = document.createElement("P")
                var content = document.createTextNode("🪨")
                element.appendChild(content)
                element.style.fontSize = "1rem"
                playersMoveList.appendChild(element)
                break;

            case "påse":
                var element = document.createElement("P")
                var content = document.createTextNode("💰")
                element.appendChild(content)
                element.style.fontSize = "1rem"
                playersMoveList.appendChild(element)
                break;
                
            case "sax":
                var element = document.createElement("P")
                var content = document.createTextNode("✂️")
                element.appendChild(content)
                element.style.fontSize = "1rem"
                playersMoveList.appendChild(element)
                break;         
    }

    
    switch(computer){

        case "sten":
            var element2 = document.createElement("P")
            var content2 = document.createTextNode("🪨")
            element2.appendChild(content2)
            element2.style.fontSize = "1rem"
            computerMoveList.appendChild(element2)
            break;

        case "påse":
            var element2 = document.createElement("P")
            var content2 = document.createTextNode("💰")
            element2.appendChild(content2)
            element2.style.fontSize = "1rem"
            computerMoveList.appendChild(element2)
            break;
            
        case "sax":
            var element2 = document.createElement("P")
            var content2 = document.createTextNode("✂️")
            element2.appendChild(content2)
            element2.style.fontSize = "1rem"
            computerMoveList.appendChild(element2)
            break;         
}

}

function endGame(){
    const playerScore = parseInt(document.getElementsByClassName("r-point")[0].textContent);
    const computerScore = parseInt(document.getElementsByClassName("r-point")[1].textContent);
    if(playerScore == 3){
        if(tag === null){
            alert("Spelaren vann spelet")  
            if(window.confirm){
                resetGame();
            }    
        }else{
            alert(tag + " " +"vann spelet")  
            if(window.confirm){
                resetGame();
            }    
        }
        
    }
    if(computerScore == 3){
        alert("Datorn vann spelet") 
        if(window.confirm){
            resetGame();
        }  
    }
}


function resetGame(){
    document.getElementsByClassName("r-point")[1].textContent = 0;
    document.getElementsByClassName("r-point")[0].textContent = 0;
    document.getElementById("vinnare").textContent = "";
    const moves = document.querySelectorAll("P")
    for(let i = 0; i<moves.length; i++){
        moves[i].remove();
    }
    

}