import { config } from "../game.js"

export const createBush = function (game, posX, posY=(config.height-75), key) {
    
    game.add.image(posX, posY, key)
        .setOrigin(0, 0)
        .setScale(1)

}


export const createMountain = function (game, posX, posY, key) {

    game.add.image(posX, posY, key)
        .setOrigin(0, 0)
        .setScale(1)

}


export const createCloud = function (game, posX, posY, key) {

    game.add.image(posX, posY, key)
        .setOrigin(0, 0)
        .setScale(0.3)

}