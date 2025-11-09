function check(){
	
	var shape1 = document.getElementById("shape1").value.toLowerCase();
	var shape2 = document.getElementById("shape2").value.toLowerCase();
	var result = "";
	var array = ["rock","paper","scissors"];
	
	if(array.includes(shape1) == false || array.includes(shape2) == false){
		result = "You should choose rock, paper or scissors";
	}
	else if(shape1 == shape2){
		result = "It's a draw! Let's play again!";
	}
	else if((shape1 == "rock" && shape2 == "scissors") ||
		(shape1 == "scissors" && shape2 == "paper") ||
		(shape1 == "paper" && shape2 == "rock")){
		result = "Player 1 wins. Congratulations!";
	}
	else{
		result = "Player 2 wins. Congratulations!";
	}
	
	document.getElementById("placeholder").innerHTML=result;
}