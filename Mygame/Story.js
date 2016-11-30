/* global game phaser game_state*/ 
game_state.story = function() { };

game_state.story.prototype = {
  
    preload: function () { 
        game.load.text( "welcome")
        game.load.text()
    
    },
    create: function(){
        this.score.text
    
}, 
update: function(){ 
    
    } 
} 

game.state.add('story', game_state.story);
game.state.start('story'); 
