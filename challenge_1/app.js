////////// SETTING PLAYERS //////////
function Player(name,symbol){
	this.name = name;
  this.symbol = symbol;
}
var players = [
new Player("Player 1","X-gif.gif"),
new Player("Player 2","O-gif.gif")
];
var currentPlayer = 0;

///// SETTING SQUARES /////
function Square(id,symbol,isOccupied){
	this.id =id;
	this.symbol =symbol;
	this.isOccupied = false;
}
var squares = [
new Square("square1","E",false),
new Square("square2","E",false),
new Square("square3","E",false),
new Square("square4","E",false),
new Square("square5","E",false),
new Square("square6","E",false),
new Square("square7","E",false),
new Square("square8","E",false),
new Square("square9","E",false)
];

///// SETTING EVENT LISTENERS /////
document.querySelectorAll(".box").forEach(function(element) {
  element.addEventListener('click', function (event) {
    var square = squares.find(function (object) {
      return object.id == event.target.id;
    });
    if (square.symbol === "E") {
      square.symbol = currentPlayer % 2 ? "O" : "X";
      square.isOccupied = true;
      event.target.style.backgroundImage = `url('${players[currentPlayer].symbol}')`;
      currentPlayer = (currentPlayer + 1) % 2;
    }
    setTimeout(winner, 100);
  });
});

///// FINDING WINNER /////
var lines = [
  [squares[0],squares[1],squares[2]],
  [squares[3],squares[4],squares[5]],
  [squares[6],squares[7],squares[8]],
  [squares[0],squares[3],squares[6]],
  [squares[1],squares[4],squares[7]],
  [squares[2],squares[5],squares[8]],
  [squares[0],squares[4],squares[8]],
  [squares[2],squares[4],squares[6]],
  ];

  function winner(){
    var champion = lines.find(function (arr){
      var symbols = arr.map(function(square){
        return square.symbol;
      });
      return symbols.filter(function(symbol){return symbol === "X";}).length === 3 || symbols.filter(function(symbol){return symbol === "O";}).length === 3});
      if( champion ) {
      alert(" Winner is " + " player " + champion[0].symbol);
    }
    return champion && champion[0].symbol;
  }