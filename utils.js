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
        mario.setAccelerationX(0)

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

    mario.setAccelerationX(200)
    if (touchingFloor) { getAnim(mario, "walk") }
    mario.flipX = false

    

}

export const marioMoveLeft = function (mario, touchingFloor) {

    mario.setAccelerationX(-200)
    if (touchingFloor) { getAnim(mario, "walk") }
    mario.flipX = true

}

export const marioStop = function (mario) {

    mario.setAccelerationX(0)

    getAnim(mario, "idle")

}

export const marioBend = function (mario) {

    mario.setVelocityX(0)

    getAnim(mario, "bend")

}

export const marioShoot = function (mario, game) {

    if (mario.lifes > 2) {
        if (game.entities.mario.weaponsReloaded) {

            getAnim(mario, "shoot")

            game.sound.play("fireball")

            let { x, y, flipX } = mario

            const fireball = game.physics.add.sprite( x + 30, y - 40, 'fire')
                                            .setOrigin(0, 0)
                                            .setFrame(0)
                                            .setBounce(1)
                                            .setGravityY(320)
                                            .setScale(2, 1.5)
            
            fireball.anims.play("fire-rotation")

            // fireball.body.setCircle(fireball.width / 2)
            fireball.setVelocityX(
                flipX ? -350 : 350
            ) 
            fireball.setCircle(fireball.width / 2)
            fireball.setDisplaySize(20, 24)
            fireball.body.setSize(fireball.width, fireball.height)
            fireball.refreshBody()
    
            game.physics.add.collider(fireball, game.floor)
            game.physics.add.collider(fireball, game.blocks)
            game.physics.add.collider(fireball, game.pipes, () => {

                // Logica de la explosion
                fireball.setVelocityX(0)
                fireball.setVelocityY(-20)
                fireball.setGravityY(-300)


                fireball.anims.play('fireball-explosion')

                fireball.on('animationcomplete', (animation, frame) => {
                    console.log("animation end")
                    fireball.destroy()
                })
                
            })

            game.entities.goomba.forEach((goomba) => {
                game.physics.add.overlap(fireball, goomba, () => {

                    killGoomba(goomba, fireball, game)

                })
            })

            fireball.setCollideWorldBounds(false)  

        }

    }

}

// Esta función necesito 

export const checkCollisionX = function (mario, goomba) {

    if (Phaser.Math.Distance.Between(mario.x, 0, goomba.x, 0) > (mario.width / 2 + goomba.width / 2)) {
        
        if ( mario.lifes > 1 ) {

            shrinkMario(mario, goomba, this)
            mario.lifes --;
    
        } else {

            if (!mario.isInvincible) {

                marioDiesGoomba(mario, goomba, this)
            
                setTimeout(() => {
                    mario.setVelocityY(-350)
                    removeAllColiders(this.marioColliders, this)
                }, 100)
            
                setTimeout(() => {
                    this.sound.stopAll()
                    this.scene.restart()
                }, 2500)

            }

        }


    } else {

        this.scoreText.setText(`Score: ${addScore(goomba, this)}`)
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
                    
                    this.scoreText.setText(`Score: ${addScore(block, this)}`)

                    if (block.coins === 0) {
                        block.setTexture("solidBlock")
                    }


                } else {

                    if (block.mushroom === 1) {

                        block.mushroom = 0
                        block.setTexture("solidBlock")
                        this.sound.play("powerupAppears")

                        if (this.entities.mario.lifes === 1) {
                        
                            const mushroom = this.physics.add.sprite(block.x - block.width / 2, block.y - block.height, 'superMushroom')
                                            .setOrigin(0, 0)
                                            .setFrame(0)
                                            .setScale(2, 1.5)
                                            .refreshBody()
                            
                            
                            mushroom.setGravityY(150)
                            mushroom.setVelocityY(-150)
                            //moveGoomba(mushroom, this)
                            


                            this.physics.add.collider(mushroom, this.floor)
                            this.physics.add.collider(mushroom, this.blocks)
                            this.physics.add.collider(mushroom, this.entities.mario, (mushroom, mario) => {
                                mario.lifes++;
                                growMario(mushroom, mario, this)
                            }, null, this)

                        } else {

                            const fireFlower = this.physics.add.sprite(block.x - block.width / 2, block.y - block.height, 'fireFlower')
                                            .setOrigin(0, 0)
                                            .setFrame(0)
                                            .setScale(2, 1.5)
                                            .refreshBody()
                            
                            fireFlower.anims.play("flower-bright")
                            fireFlower.setGravityY(150)
                            fireFlower.setVelocityY(-150)
                           
                            


                            this.physics.add.collider(fireFlower, this.floor)
                            this.physics.add.collider(fireFlower, this.blocks)
                            this.physics.add.collider(fireFlower, this.entities.mario, (mushroom, mario) => {
                                mario.lifes === 3 ? 3 : mario.lifes++
                                console.log(`Mario Lifes: ${mario.lifes}`)
                                mario.isSuperMario = true
                                growMario(mushroom, mario, this)
                            }, null, this)

                        }

                    }

                }

            } else if (block.texture.key === 'block') {

                if (mario.isGrown || mario.isSuperMario) {

                    block.destroy()

                    const BRICKS_TO_CREATE = [
                        {
                            x: block.x - (block.width / 2),
                            y: block.y - (block.height / 2)
                        },
                        {
                            x: block.x + (block.width / 2),
                            y: block.y - (block.height / 2)
                        },
                        {
                            x: block.x - (block.width / 2),
                            y: block.y + (block.height / 2)
                        },
                        {
                            x: block.x + (block.width / 2),
                            y: block.y + (block.height / 2)
                        },
                    ] 
                    
                    let bricks = []

                    for(const brick of BRICKS_TO_CREATE) {

                        bricks.push(
                            this.physics.add.sprite(brick.x, brick.y, 'brickDebris')
                                            .setOrigin(0, 0)
                                            .setFrame(0)
                                            .setScale(2, 1.5)
                                            .refreshBody()
                        )

                    }


                    bricks.forEach((brick, index) => {

                        if (index % 2 === 0) {

                            brick.setVelocityY(-(Math.floor(Math.random() * (300 - 150 + 1)) + 150))
                            brick.setVelocityX(-100)
                            brick.setGravityY(300)
                            brick.setAngularVelocity(150)

                        } else {    

                            brick.setVelocityY(-(Math.floor(Math.random() * (300 - 150 + 1)) + 150))
                            brick.setVelocityX(100)
                            brick.setGravityY(300)
                            brick.setAngularVelocity(150)

                        }

                        

                    })


                } else {

                    //console.log("Mario small can't destroy bricks")

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
    let growAnimInterval = undefined
        
    scene.sound.play("consumePowerup")

    if (mario.lifes === 2){

         growAnimInterval = setInterval(() => {
                
            if (i % 2 !== 0) {

                mario.isGrown = false
                mario.anims.play("mario-idle")
                mario.height = 16
                mario.width = 18
                

            } else {

                mario.isGrown = true
                mario.anims.play("mario-grow-idle")
                mario.setTexture("marioGrown")
                mario.setDisplaySize(26, 38)
                mario.body.setSize(20, 32)
                mario.texture.key = "marioGrown"

            }

            i++;


        }, 100)
    
    } else if (mario.lifes > 2) {

        // console.log("Enters Super Mario")
        

        growAnimInterval = setInterval(() => {

            // console.log(i)
                
            if (i % 2 !== 0) {

                mario.isGrown = true
                mario.anims.play("mario-grow-idle")
                mario.setTexture("marioGrown")
                mario.setDisplaySize(26, 38)
                mario.body.setSize(20, 32)
                mario.texture.key = "marioGrown"
                

            } else {

                mario.isGrown = false
                mario.anims.play("mario-super-idle")
                mario.setTexture("marioFire")
                mario.setDisplaySize(28, 40)
                mario.body.setSize(20, 32)
                mario.texture.key = "marioFire"

            }

            i++;


        }, 100)

    }

    setTimeout(() => {
        clearInterval(growAnimInterval)

        scene.physics.world.resume()
        scene.anims.resumeAll()

    }, 500)


    // console.log(mario)


}


export const shrinkMario = (mario, goomba, scene) => {


    scene.physics.world.pause()
    mario.isInvincible = true

    let { x, y } = mario
    let i = 0
    let shrinkAnimInterval = undefined
        
    scene.sound.play("powerdown")

    console.log( mario.lifes )

    switch (mario.lifes) {

        case 2: 

            shrinkAnimInterval = setInterval(() => {

                console.log("Mario 2 lifes interval shrink")

                if (i % 2 !== 0) {
                    
                    mario.isGrown = true
                    mario.anims.play("mario-grow-idle")
                    mario.setTexture("marioGrown")
                    mario.setDisplaySize(26, 38)
                    mario.body.setSize(20, 32)
                    mario.texture.key = "marioGrown"
                    mario.disableBody(true, false)

                } else {

                    mario.isGrown = false
                    mario.anims.play("mario-idle")
                    mario.height = 16
                    mario.width = 18
                    mario.setDisplaySize(27, 24)
                    mario.body.setSize(18, 16)
                    mario.disableBody(true, false)
                    mario.isInvincible = false

                }

                i++;

            }, 100)

            break;


        case 3:

            shrinkAnimInterval = setInterval(() => {

                console.log("Mario 3 lifes interval shrink")
                if (i % 2 !== 0) {

                    mario.isGrown = false
                    mario.anims.play("mario-super-idle")
                    mario.setTexture("marioFire")
                    mario.setDisplaySize(28, 40)
                    mario.body.setSize(20, 32)
                    mario.texture.key = "marioFire"
                    mario.disableBody(true, false)

                } else {

                    mario.isGrown = true
                    mario.anims.play("mario-grow-idle")
                    mario.setTexture("marioGrown")
                    mario.setDisplaySize(26, 38)
                    mario.body.setSize(20, 32)
                    mario.texture.key = "marioGrown"
                    mario.disableBody(true, false)

                }

                i++;

            }, 100)

            break;
        
            default:
                console.log("Mario DEFAULT lifes interval shrink")
                break;

    }


    setTimeout(() => {

        clearInterval(shrinkAnimInterval)
        scene.physics.world.resume()
        scene.anims.resumeAll()

    }, 500)

    setTimeout(() => {

        mario.enableBody(true, x, y - 50, true, true)
        mario.setVisible(true)

    }, 1000)


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

export const killGoomba = (goomba, fireball, game) => {

    let { x, y, width, height } = fireball
    fireball.destroy();

    goomba.body.enable = false;
    game.scoreText.setText(`Score: ${addScore(goomba, game)}`)

    let explosion = game.add.sprite(x + width / 2, y - height / 2, 'fireball')
                        .setOrigin(0, 0)
                        .setScale(2, 2)
    explosion.play('fireball-explosion'); 

    
    explosion.on('animationcomplete', () => {
        explosion.destroy(); 
        goomba.destroy(); 
    });

}



export const getAnim = (mario, animName) => {

    if (mario.isGrown) {

        mario.anims.play(`mario-grow-${animName}`, true)

    } else if (mario.lifes > 2) {

        // console.log("Entra")
        mario.anims.play(`mario-super-${animName}`, true)

    } else {

        mario.anims.play(`mario-${animName}`, true)

    }

}



export const addScore = (block, game, winner) => {



    const text = game.add.text(block.x - block.width / 2, block.y - block.height / 2, winner ? game.time : '100' , {
        font: 'light 12px "Calibri"',
        fill: "#ffffff",
        align: 'center',
    })

    game.tweens.add({

        targets: text,
        y: text.y - 30,  
        duration: 700,  
        ease: 'Linear',  
        yoyo: false,  
        repeat: 0, 
        onComplete: () => {
            
            text.destroy()
        
        }
    });

    if (winner) {

        game.score += game.time

    } else {

        game.score += 100

    }

    

    return game.score

}

export const updateTime = (game) => {

    game.time --;

    return game.time

}
