import { config } from "../game.js"
import * as textures from './texture.js'


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

export const createFloor = function (game) {

    let floorPlace = 0

    for (let i = 0; i < 9; i++) {

        textures.createFloor(game, floorPlace, config.height - 48)

        floorPlace += 255

        // console.log(floorPlace)
    }


    game.barriers.right.push(
        game.physics.add.staticImage(floorPlace + 13.5, config.height - 48, null)
        .setVisible(false)
    )

    
    floorPlace = 2370

    game.barriers.left.push(
        game.physics.add.staticImage(floorPlace - 13.5, config.height - 48, null)
        .setVisible(false)
    )

    for (let i = 0; i < 2; i++) {

        textures.createFloor(game, floorPlace, config.height - 48)

        floorPlace += 255

        // console.log(floorPlace)
    }

    game.barriers.right.push(
        game.physics.add.staticImage(floorPlace + 13.5, config.height - 48, null)
        .setVisible(false)
    )

    floorPlace = 2950

    game.barriers.left.push(
        game.physics.add.staticImage(floorPlace - 13.5, config.height - 48, null)
        .setVisible(false)
    )

    for (let i = 0; i < 9; i++) {

        textures.createFloor(game, floorPlace, config.height - 48)

        floorPlace += 255

        // console.log(floorPlace)
    }

    floorPlace = 5300

    for (let i = 0; i < 10; i++) {

        textures.createFloor(game, floorPlace, config.height - 48)

        floorPlace += 255

        // console.log(floorPlace)
    }

}