import * as actions from './utils.js'
import { config } from './game.js'

export const update = function () // Game loop
{

    const isMarioTouchingFloor = this.entities.mario.body.touching.down 

    if (this.entities.mario.isDead === true) return 

    if (this.entities.mario.y >= config.height) {

        actions.marioDiesScreen(this.entities.mario, this)
        setTimeout(() => {
            this.scene.restart()
        }, 2000)
        
    
    } else if (this.keys.up.isDown && isMarioTouchingFloor ) {

        this.sound.play("jump")
        actions.marioJump(this.entities.mario)
        

    } else if (this.keys.right.isDown) {

        actions.marioMoveRight(this.entities.mario, isMarioTouchingFloor)

    } else if (this.keys.left.isDown) {
        
        actions.marioMoveLeft(this.entities.mario, isMarioTouchingFloor)

    } else {

        actions.marioStop(this.entities.mario)
    
    }

}