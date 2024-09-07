import * as actions from './utils.js'
import { config } from './game.js'

var i = 0
var reloadTime = 1 //seg

export const update = function () // Game loop
{   

    const isMarioTouchingFloor = this.entities.mario.body.touching.down

    if (!this.entities.mario.isWinner) { 

        if (this.entities.mario.isDead === true) return  
        
        if (this.time === 0) { 
            
            actions.marioDiesScreen(this.entities.mario, this) 
            
            return

        }

        i++

        if (i % 120 === 0) {

            this.textTime.setText(actions.updateTime(this))

        }

        reloadTime ++;

        if (reloadTime % 60 === 0) {

            this.entities.mario.weaponsReloaded = true

        }


        this.entities.goomba.forEach((goomba) => {
            actions.moveGoomba(goomba, this)
        })

        this.coins.forEach((coin) => {

            coin.anims.play("coin-rotate", true)

        })


        if (this.entities.mario.y >= config.height) {

            actions.marioDiesScreen(this.entities.mario, this)
            setTimeout(() => {
                this.scene.restart()
            }, 2000)
        
        } else if (Phaser.Input.Keyboard.JustUp(this.spaceBar)) {


            actions.marioShoot(this.entities.mario, this)

            this.entities.mario.weaponsReloaded = false
            
        
        } else if (this.keys.up.isDown && isMarioTouchingFloor ) {

            this.sound.play("jump")
            actions.marioJump(this.entities.mario)
            
        } else if (this.keys.right.isDown) {

            //this.cameras.main.startFollow(this.entities.mario)
            actions.marioMoveRight(this.entities.mario, isMarioTouchingFloor)


        } else if (this.keys.left.isDown) {
            
            //this.cameras.main.stopFollow(this.entities.mario)
            actions.marioMoveLeft(this.entities.mario, isMarioTouchingFloor)
            
        } else if (this.keys.down.isDown && isMarioTouchingFloor) {
            
            if (this.entities.mario.lifes >= 2) {

                actions.marioBend(this.entities.mario)

            }

        } else {

            actions.marioStop(this.entities.mario)
        
        }

    } else {

        this.entities.mario.setGravityY(-100)
        this.entities.mario.setVelocityX(0)
        this.entities.mario.setAccelerationX(0)

        if(isMarioTouchingFloor) {
                
            actions.marioMoveRight(this.entities.mario, isMarioTouchingFloor, )

            this.entities.mario.setAccelerationX(100)
            this.entities.mario.setVelocityX(100)

            if (this.entities.mario.x >= (this.castle.children.entries[0].x - this.castle.children.entries[0].width -15) ) {

                this.entities.mario.setVelocityX(0)
                actions.marioStop(this.entities.mario)

                this.tweens.add({
                    targets: this.entities.mario,         // El objeto que quieres animar
                    alpha: 0,                // Reducir la opacidad a 0
                    duration: 1000,          // Duración del fade en milisegundos (1000 ms = 1 segundo)
                    ease: 'Power2',          // Tipo de interpolación
                    onComplete: () => {      // Una vez que el fade termine 
                        this.entities.mario.destroy();   // Destruye el objeto 
                    }
                });

                this.tweens.add({
                    targets: this.flag,         // El objeto que quieres animar
                    y: 0,              // Reducir la opacidad a 0
                    duration: 1000,          // Duración del fade en milisegundos (1000 ms = 1 segundo)
                    ease: 'Power2',          // Tipo de interpolación
                });

                                

            }

        }

    }

}