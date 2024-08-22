export const createFloor = function (game, posX, posY) {
    
    game.floor
        .create(posX, posY, 'floor')
        .setOrigin(0, 0)
        .setScale(2, 1.5)
        .refreshBody()

}