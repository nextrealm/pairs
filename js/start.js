var playButton;

start = {
	create: function(){
		playButton = game.add.button(game.width * 0.5, game.height * 0.5, "play_button", this.buttonClicked, this, 1, 0, 2, 0);
		playButton.onInputOver.add(this.over, this);
		playButton.onInputDown.add(this.down, this);
		playButton.onInputOut.add(this.out, this);
		playButton.onInputUp.add(this.up, this);
		playButton.anchor.setTo(0.5);
		playButton.frame = 0;
		var style = {
			font: "30px Arial",
			fill: "#FFFFFF"
		};
		var playText = game.add.text(playButton.x, playButton.y, "Play", style);
		playText.anchor.setTo(0.5);
		playText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 1);
	},
	buttonClicked: function(button, pointer, isOver){
		if(isOver){
			//game.global.game.count = 3;
			game.state.start("Game");
		}
	},
	over: function(button, pointer){
		
	},
	down: function(button, pointer){
		
	},
	out: function(button, pointer){
		
	},
	up: function(button, pointer, isOver){
		
	}/*,
	update: function(){
		console.log("update");
	}*/
}