let playerSymbol = "X";
let gameEnded = false;
let restartButton = document.querySelector('#restart');
let statusTxt=document.querySelector('#status')



for (let i = 0; i <= 8; i++) {
    document.getElementById(i.toString()).addEventListener(
        "click",
        function() {
            if (this.innerHTML === "" && !gameEnded) {
                this.innerHTML = playerSymbol;
                this.classList.add(playerSymbol.toLowerCase());
            
                if (playerSymbol === "X")
                playerSymbol = "O"
                else
                playerSymbol = "X"
            }
        }
    ); 
}
   
restartButton.addEventListener("click", function() {
    status.textContent = "Click to start"
    X = 0
    O = 0
}
);
