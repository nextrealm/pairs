var game = new Phaser.Game(640, 480, Phaser.CANVAS, 'pairs', { init: init, preload: preload, create: create, update: update });

game.global = {
	start: {
		buttonWidth: 256,
		buttonHeight: 64
	}
}

function init() {
	game.stage.backgroundColor = "#FFFFFF";
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
}

function preload() {
	game.load.spritesheet('play_button', 'img/play_button.png', game.global.start.buttonWidth, game.global.start.buttonHeight);
	game.load.spritesheet("pairs", "img/pairs.png", 128, 128);
}

function create() {
	game.state.start("Start");
}

function update() {
	//console.log("update");
}

// game states
game.state.add("Start", start);
game.state.add("Game", pairsGame);