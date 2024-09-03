import { config } from "./game.js";

export const onMarioHitMisteryBlock = function (mario, misteryBlocks) {

    // misteryBlocks.children.iterate((misteryBlock) => {

    //     console.log(misteryBlock)
        console.log("Un jugador ha colisionado con el bloque misterioso.")

    // })

}

export const onMarioHitBlock = function (mario, bloque) {
    console.log('El jugador ha colisionado con una bloque');
}

export const marioDiesGoomba = function (mario, goomba, context) {
    
    mario.isDead = true
    getAnim(mario, "dies")
    context.sound.play('gameover')
    mario.setCollideWorldBounds(false)
    mario.setVelocityX(0)

    if (goomba) { goomba.setVelocityX(0) }

}

function removeAllColiders(colliderObject, context) {

    colliderObject.forEach((collider) => {
        context.physics.world.removeCollider(collider)
    })

}


export const marioDiesScreen = function (mario, context) {

    mario.isDead = true
    getAnim(mario, "dies")
    context.sound.play('gameover')
    mario.setCollideWorldBounds(false)
    mario.setVelocityX(0)

    setTimeout(() => {
        mario.setVelocityY(-350)
        removeAllColiders(context.marioColliders, context)
    }, 100)

    setTimeout(() => {
        context.sound.stopAll()
        context.scene.restart()
    }, 2000)

}

export const marioJump = function (mario) {
    
    mario.setVelocityY(-350)   
    
    getAnim(mario, "jump")
    

}

export const marioMoveRight = function (mario, touchingFloor) {

    mario.setVelocityX(200)
    // if (touchingFloor) { mario.anims.play("mario-walk", true) }
    mario.flipX = false

    getAnim(mario, "walk")

}

export const marioMoveLeft = function (mario, touchingFloor) {

    mario.setVelocityX(-200)

    mario.flipX = true

    getAnim(mario, "walk")

}

export const marioStop = function (mario) {

    mario.setVelocityX(0)

    getAnim(mario, "idle")

}

// Esta función necesito 

export const checkCollisionX = function (mario, goomba) {

    if (Phaser.Math.Distance.Between(mario.x, 0, goomba.x, 0) > (mario.width / 2 + goomba.width / 2)) {
        
        marioDiesGoomba(mario, goomba, this)
        
        setTimeout(() => {
            mario.setVelocityY(-350)
            removeAllColiders(this.marioColliders, this)
        }, 100)
    
        setTimeout(() => {
            this.sound.stopAll()
            this.scene.restart()
        }, 2500)

    } else {

        this.sound.play('goombaStomp')
        goomba.anims.play('goomba-crush', true)
        goomba.isDead = true
        mario.setVelocityY(-150)
        
        setTimeout(() => {
            goomba.destroy()
        }, 500)

    }

}

export const checkCollisionY = function (mario, block) {

    const isMarioHittingBlock = mario.body.touching.up
    const marioVelocity = mario.body.velocity

    if (marioVelocity.y === 0 && isMarioHittingBlock) { 

        if (block.texture.key !== "solidBlock"){

            //this.sound.play('breakBlock')

            this.tweens.add({
                targets: block,
                y: block.y - 10, // Desplazamiento hacia arriba
                duration: 100,
                yoyo: true, // Regresar el bloque a su posición original
                ease: 'Power2'
            });

            if (block.texture.key === 'misteryBlock' ) {
                
                if (block.coins > 0) {

                    this.sound.play("coin")
                    const coin = this.physics.add.sprite(block.x - block.width / 2, block.y - block.height, 'coin')
                                    .setOrigin(0, 0)
                                    .setFrame(0)
                                    .setScale(2, 1.5)
                                    .refreshBody()
                    
                    
                    coin.anims.play("coin-rotate", true)
                    coin.setVelocityY(-250)
                    coin.setGravityY(150)

                    setTimeout(() => {

                        coin.destroy()

                    }, 500)

                    block.coins --;
                    
                    this.scoreText.setText(`Score: ${addScore(this)}`)

                    if (block.coins === 0) {
                        block.setTexture("solidBlock")
                    }


                } else {

                    if (block.mushroom === 1) {

                        block.mushroom = 0
                        block.setTexture("solidBlock")
                        const mushroom = this.physics.add.sprite(block.x - block.width / 2, block.y - block.height, 'superMushroom')
                                        .setOrigin(0, 0)
                                        .setFrame(0)
                                        .setScale(2, 1.5)
                                        .refreshBody()
                        
                        
                        mushroom.setGravityY(150)
                        mushroom.setVelocityY(-150)
                        moveGoomba(mushroom, this)
                        


                        this.physics.add.collider(mushroom, this.floor)
                        this.physics.add.collider(mushroom, this.blocks)
                        this.physics.add.collider(mushroom, this.entities.mario, (mushroom, mario) => {
                            growMario(mushroom, mario, this)
                            mario.lifes++;
                        }, null, this)

                    }

                }

            } else if (block.texture.key === 'block') {

                if (mario.isGrown || mario.isSuperMario) {

                    block.destroy()
                    
                    const brokenBrickFirstPiece = this.physics.add.sprite(block.x, block.y, 'brickDebris')
                                            .setOrigin(0, 0)
                                            .setFrame(0)
                                            .setScale(2, 1.5)
                                            .refreshBody()

                    brokenBrickFirstPiece.setVelocityY(-300)
                    brokenBrickFirstPiece.setVelocityX(-200)
                    brokenBrickFirstPiece.setGravityY(300)

                    const brokenBrickSecondPiece = this.physics.add.sprite(block.x, block.y, 'brickDebris')
                                            .setOrigin(0, 0)
                                            .setFrame(0)
                                            .setScale(2, 1.5)
                                            .refreshBody()

                    brokenBrickSecondPiece.setVelocityY(-300)
                    brokenBrickSecondPiece.setVelocityX(200)
                    brokenBrickSecondPiece.setGravityY(300)

                    

                } else {

                    console.log("Mario small can't destroy bricks")

                }

            }

        }

    }

}


export const growMario = (mushroom, mario, scene) => {


    // Desactivar el hongo para que no vuelva a colisionar
    mushroom.disableBody(true, true);
    scene.physics.world.pause()

    let i = 0
        
    scene.sound.play("powerupAppears")
        
    const growAnimInterval = setInterval(() => {

            
        if (i % 2 !== 0) {

            mario.isGrown = false
            mario.anims.play("mario-idle")
            mario.height = 16
            mario.width = 18
            

        } else {

            mario.isGrown = true
            mario.anims.play("mario-grow-idle")
            mario.setTexture("marioGrown")
            mario.setDisplaySize(20, 32)
            mario.body.setSize(20, 32)
            mario.texture.key = "marioGrown"

        }

        i++;


    }, 100)

    setTimeout(() => {
        clearInterval(growAnimInterval)

        scene.physics.world.resume()
        scene.anims.resumeAll()

    }, 500)



}



export const moveGoomba = (goomba, game) => {

    if (goomba?.body?.touching.down) {

        if (goomba?.body?.blocked.right) {

            goomba.moveRight = false

        } else if (goomba?.body?.blocked.left) {

            goomba.moveRight = true

        }

        if (goomba?.moveRight && !goomba?.isDead) {

            goomba?.setVelocityX(100)

        } else if (!goomba?.moveRight && !goomba?.isDead) {

            goomba?.setVelocityX(-100)
            
        } else {

            goomba?.setVelocityX(0)

        }
    
    } else {    

    }
}



export const getAnim = (mario, animName) => {

    if (mario.isGrown) {

        mario.anims.play(`mario-grow-${animName}`, true)

    } else if (mario.isSuperMario) {

        mario.anims.play(`mario-super-${animName}`, true)

    } else {

        mario.anims.play(`mario-${animName}`, true)

    }

}



export const addScore = (game) => {

    game.score += 100

    return game.score

}
