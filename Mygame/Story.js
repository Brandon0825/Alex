/* global game phaser game_state*/ 
game_state.story = function() { };

game_state.story.prototype = {
  
    preload: function () { 
    game.load.image('sky', 'assets/sky.png');
    },
    create: function(){
             game.add.sprite(0,0, 'sky')
              this.scoreText = game.add.text(16, 16, 'There once was a ghost named Bob  \n He was a very picky ghost when he came to eatin\n that was until he turned blue when he was orginally pink \n To satisfy him self \n He must eat medium size yellow stars \n Help Bob satisfy him self by controlling and helping him eat the yellow stars', {
            fontSize: '32px',
            fill: '#ffffff'
        });
    
    setTimeout(function(){
        game.state.start('main')
    }, 10000)
    
    
    
}, 
update: function(){ 
   
    } 
} 

game.state.add('story', game_state.story);
game.state.start('story'); 
