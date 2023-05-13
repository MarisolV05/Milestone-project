// context and setup
let playerSymbol = "X";
let gameEnded = false;


const playerSymbolWin = "win";
const TIE = "tie";

let winPos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

for (let i = 0; i <= 8; i++) {
//click on cell
    document.getElementById(i.toString()).addEventListener(
        "click",
        function() {
            if (this.innerHTML === "" && !gameEnded) {
//style x and 0
                this.innerHTML = playerSymbol;
                this.classList.add(playerSymbol.toLowerCase());
 // check if a player has won

 checkWin();

 if (playerSymbol === "X")
 playerSymbol = "O"
 else
 playerSymbol = "X"

}
} );     
}

 function checkWin(){
   for (let i = 0; i < winPos.length; i++){

       if (
           document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
           document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
           document.getElementById(winPos[i][2]).innerHTML === playerSymbol 
       
         ) {
       document.getElementById(winPos[i][0]).classList.add("win");
       document.getElementById(winPos[i][1]).classList.add("win");
       document.getElementById(winPos[i][2]).classList.add("win");
      gameEnded = true;

      setTimeout(function() {
        alert(playerSymbol + "win");
    },
      );     
}
  }
}
         
//button restart game
document.getElementById("restart").addEventListener(
    "click",
    function() {
        for(let i = 0; i <= 8; i++){
            document.getElementById(i.toString()).innerHTML = "";
            document.getElementById(i.toString()).classList.remove("X");
            document.getElementById(i.toString()).classList.remove("O");
            document.getElementById(i.toString()).classList.remove("win");
            gameEnded = false;
        }
    }

);
 
