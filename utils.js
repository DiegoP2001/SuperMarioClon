const deadAudio = new Audio("./assets/sound/music/gameover.mp3")


export const onMarioHitMisteryBlock = function (mario, misteryBlocks) {

    // misteryBlocks.children.iterate((misteryBlock) => {

    //     console.log(misteryBlock)
        console.log("Un jugador ha colisionado con el bloque misterioso.")

    // })

}

export const onMarioHitBlock = function (mario, bloque) {
    console.log('El jugador ha colisionado con una bloque');
}

function removeAllColiders(colliderObject, context) {

    colliderObject.forEach((collider) => {
        context.physics.world.removeCollider(collider)
    })

}

export const marioDies = function (mario, goomba) {
    
    mario.isDead = true
    mario.anims.play("mario-dies", true)
    deadAudio.play()
    mario.setCollideWorldBounds(false)
    mario.setVelocityX(0)
    goomba.setVelocityX(0)
    
    // setTimeout(() => {
    //     mario.setVelocityY(-350)
    //     removeAllColiders(this.marioColliders, this)
    // }, 100)

    // setTimeout(() => {
    //     this.scene.restart()
    // }, 2000)

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
        
        marioDies(mario, goomba)
        
        setTimeout(() => {
            mario.setVelocityY(-350)
            removeAllColiders(this.marioColliders, this)
        }, 100)
    
        setTimeout(() => {
            this.scene.restart()
            deadAudio.pause()
        }, 2500)

    } else {

        goomba.anims.play('goomba-crush', true)
        removeAllColiders(this.goombaColliders, this)
        setTimeout(() => {
            goomba.destroy()
        }, 500)

    }

}

export const checkCollisionY = function (mario, block) {

    const isMarioHittingBlock = mario.body.touching.up
    const marioVelocity = mario.body.velocity

    if (marioVelocity.y === 0 && isMarioHittingBlock) { 

        this.tweens.add({
            targets: block,
            y: block.y - 10, // Desplazamiento hacia arriba
            duration: 100,
            yoyo: true, // Regresar el bloque a su posición original
            ease: 'Power2'
        });

        block.setFrame(1)


    }

}