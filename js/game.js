var board = [];
var flipped = 0;
var buttons = [];
var last = 0;

pairsGame = {
  	create: function(){
  		board = [];
  		this.generateBoard();
  		buttons = [];
  		for(var i = 0; i < 4; i++){
	  		for(var j = 0; j < 4; j++){
		  		var button = game.add.button((128 * i) + (game.width * 0.5) - (128 * 1.5), (128 * j) + (game.height * 0.5) - (128 * 1.5), "pairs", this.buttonClicked, this);
				button.anchor.setTo(0.5);
				button.frame = 0;
				button.board_x = i;
				button.board_y = j;
				button.completed = false;
				buttons.push(button);
			}
		}
	},
	buttonClicked: function(button, pointer, isOver){
		if(isOver){
			if(button.frame != 0){
				return;
			}
			if(flipped == 0){
				var x = button.board_x;
				var y = button.board_y;
				guess = board[x][y];
				button.frame = guess;
				flipped = 1;
			}else if(flipped == 1){
				var x = button.board_x;
				var y = button.board_y;
				var g = board[x][y];
				button.frame = g;
				if(g == guess){
					for(var i = 0;i < buttons.length;i++){
						if(buttons[i].frame == g){
							buttons[i].completed = true;
						}
					}
					flipped = 0;
				}else{
					last = game.time.now;
					flipped = 2;
				}
			}else{
				return;
			}
			
		}
	},
	generateBoard: function(){
		var possibilities = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
		for(var i = 0; i < 4; i++){
			board[i] = [];
	  		for(var j = 0; j < 4; j++){
	  			var random = game.rnd.integerInRange(0,possibilities.length-1);
	  			var frame = possibilities[random];
	  			board[i][j] = frame;
	  			possibilities.splice(random, 1);
	  		}
	  	}
	},
	update: function(){
		if(flipped == 2){
			if(game.time.now - last > 2000){
				flipped = 0;
				for(var i = 0;i < buttons.length;i++){
					if(!buttons[i].completed){
						buttons[i].frame = 0;
					}
				}
			}
		}
	}
}