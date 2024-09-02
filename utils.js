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
    mario.anims.play("mario-dies", true)
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
    mario.anims.play("mario-dies", true)
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
    mario.anims.play("mario-jump", true)

}

export const marioMoveRight = function (mario, touchingFloor) {

    mario.setVelocityX(200)
    if (touchingFloor) { mario.anims.play("mario-walk", true) }
    mario.flipX = false

}

export const marioMoveLeft = function (mario, touchingFloor) {

    mario.setVelocityX(-200)

    if (touchingFloor) { mario.anims.play("mario-walk", true) }
    
    mario.flipX = true

}

export const marioStop = function (mario) {

    mario.setVelocityX(0)
    mario.anims.play("mario-idle", true)

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

            this.sound.play('breakBlock')

            this.tweens.add({
                targets: block,
                y: block.y - 10, // Desplazamiento hacia arriba
                duration: 100,
                yoyo: true, // Regresar el bloque a su posición original
                ease: 'Power2'
            });

            if (block.texture.key === 'misteryBlock' ) {
                block.setFrame(1)
            }

        }

    }

}



export const moveGoomba = (goomba, game) => {

    if (goomba?.body?.touching.down) {

        if (goomba?.body?.blocked.right) {

            goomba.moveRight = false

        } else if (goomba?.body?.blocked.left) {

            goomba.moveRight = true

        }

        if (goomba?.moveRight && !goomba.isDead) {

            goomba?.setVelocityX(100)

        } else if (!goomba?.moveRight && !goomba.isDead) {

            goomba?.setVelocityX(-100)
            
        } else {

            goomba?.setVelocityX(0)

        }
    
    } else {    

    }
}