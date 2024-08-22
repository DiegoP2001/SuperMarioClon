export const createGoomba = function (game, posX, posY) {

   return game.physics.add.sprite(posX, posY, 'goomba')
            .setOrigin(0, 1) 
            .setScale(1.5)
            .setGravityY(200)
            .setCollideWorldBounds(true)

}


export const createMario = function (game, posX, posY) {

    game.entities.mario = game.physics.add.sprite(posX, posY, 'mario')
        .setOrigin(0, 1) 
        .setScale(1.5)
        .setGravityY(200)
        .setCollideWorldBounds(true); 

}