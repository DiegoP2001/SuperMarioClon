import { BLOCK_TYPE, BLOCK_TYPE_UNDERGROUND, EMPTY } from "../const.js"


export const createBlock = function (game, posX, posY, key) {

    game.blocks
        .create(posX, posY,  key)
        .setOrigin(0, 0)
        .setFrame(0)
        .setScale(2, 1.5)
        .refreshBody()

}


export const createMisteryBlock = function (game, posX, posY, key) {

    game.misteryBlocks
                .create(posX, posY,  key)
                .setOrigin(0, 0)
                .setFrame(0)
                .setScale(2, 1.5)
                .refreshBody()

}

export const createBlockPattern = (game, posX, posY) => {


    const patron = [
        [0, 0, 0],
        [3, 2, 4],
        [1, 1, 1],
    ]

    let coordinates = {
        x: posX,
        y: posY
    }

    let { x, y } = coordinates

    patron.map((row) => {

        row.forEach((block) => {

            console.table(BLOCK_TYPE[block])

            if (block !== 0) {
                
                game.blocks
                    .create(x, y, BLOCK_TYPE[block])
                    .setOrigin(0, 0)
                    .setFrame(0)
                    .setScale(2, 1.5)
                    .refreshBody()

            }

            x += 31

        })

        x = coordinates.x
        y += 24.5

    })

    /*
        [0, 0, 0]
        [0, 1, 0] -> Pattern
        [1, 1, 1]
    */

    

    
    
}


export const createPipe = function (game, posX, posY, key) {

    game.pipes
        .create(posX, posY, key)
        .setOrigin(0, 0)
        .setFrame(0)
        .setScale(2, 1.5)
        .refreshBody()

}


export const createFlag = function (game, posX, posY, key='flagMast') {

    game.flags
        .create(posX, posY, key)
        .setOrigin(1, 1)
        .setFrame(0)
        .setScale(2, 1.5)
        .refreshBody()

}


export const createCastle = function (game, posX, posY, key='castle') {

    game.flags
        .create(posX, posY, key)
        .setOrigin(1, 1)
        .setFrame(0)
        .setScale(2, 1.5)
        .refreshBody()

}