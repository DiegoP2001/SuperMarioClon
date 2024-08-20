import { WORLD_HEIGHT, WORLD_WIDTH } from './const.js'
import { preload } from './preload.js';
import { create } from './create.js';
import * as actions from './utils.js'

const deadAudio = new Audio("./assets/sound/music/gameover.mp3")


export const config = {
    type: Phaser.AUTO,
    width: WORLD_WIDTH,
    height: WORLD_HEIGHT,
    backgroundColor: "#09f",
    parent: "game",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
};

new Phaser.Game(config);



function update () // Game loop
{

    const isMarioTouchingFloor = this.entities.mario.body.touching.down 

    if (this.entities.mario.isDead === true) return 

    if (this.entities.mario.y >= config.height) {

        actions.marioDies(this.entities.mario, this.entities.goomba)
        setTimeout(() => {
            this.scene.restart()
        }, 2000)
        
    
    } else if (this.keys.space.isDown && isMarioTouchingFloor ) {

        actions.marioJump(this.entities.mario)

    } else if (this.keys.right.isDown) {

        actions.marioMoveRight(this.entities.mario, isMarioTouchingFloor)

    } else if (this.keys.left.isDown) {
        
        actions.marioMoveLeft(this.entities.mario, isMarioTouchingFloor)

    } else {

        actions.marioStop(this.entities.mario)
    
    }

}


