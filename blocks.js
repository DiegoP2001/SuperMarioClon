import { config } from "./game.js"
import * as scenaryObjects from './functions/scenaryObject.js'

export const createBlocks = (game) => {
    
    scenaryObjects.createMisteryBlock(game, 550, config.height - 150,  'misteryBlock')
    
    let posInicialX = 650

    scenaryObjects.createBlockPattern([[1,2,1,2,1]], game, posInicialX, config.height - 150)

    scenaryObjects.createMisteryBlock(game, 750, config.height - 265,  'misteryBlock')

    posInicialX = 2500

    scenaryObjects.createBlockPattern([[1,2,1]], game, posInicialX, config.height - 150)

    posInicialX = 2600

    scenaryObjects.createBlockPattern([Array.from(
                                                    { length: 8 }, 
                                                    (_) => 1)
                                      ],
                                      game, 
                                      posInicialX,
                                      350
                                     )

    posInicialX = 3000

    scenaryObjects.createBlockPattern(
        [
            [1,1,1,2],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,1],
        ],
        game,
        posInicialX, 
        350
    )                                 

    posInicialX = 3300

    scenaryObjects.createBlockPattern([
                                        [1,1]
                                      ],  
                                      game, 
                                      posInicialX,
                                      config.height - 150
    )

    posInicialX = 3500

    scenaryObjects.createBlockPattern(
        [
            [0,0,0,2,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [2,0,0,2,0,0,2],
        ],
        game,
        posInicialX,
        350
    )

    posInicialX = 4000

    scenaryObjects.createBlock(game, posInicialX, config.height - 150, 'block')

    posInicialX = 4150

    scenaryObjects.createBlockPattern(
        [
            [1,1,1],
        ],
        game, 
        posInicialX,
        350
    )

    posInicialX = 4350

    scenaryObjects.createBlockPattern(
        [
          [1,2,2,1],  
        ],
        game,
        posInicialX,
        350
    )


    posInicialX = 4370

    scenaryObjects.createBlockPattern(
        [
            [1,1],
        ],
        game, 
        posInicialX, 
        config.height - 150
    )
    
    posInicialX = 4550
    let posInicialY = config.height - 145 // 70

    scenaryObjects.createBlockPattern(
        [      
            [0,0,0,3],
            [0,0,3,3],
            [0,3,3,3],
            [3,3,3,3],
        ],
        game, 
        posInicialX,
        posInicialY
    )

    
    posInicialX = 4750
    
    scenaryObjects.createBlockPattern(
        [
            [3,0,0,0],
            [3,3,0,0],
            [3,3,3,0],
            [3,3,3,3],
        ],
        game, 
        posInicialX,
        posInicialY
    )


    posInicialX = 5085

    scenaryObjects.createBlockPattern(
        [
            [0,0,0,3,3],
            [0,0,3,3,3],
            [0,3,3,3,3],
            [3,3,3,3,3],
        ],
        game,
        posInicialX,
        posInicialY
    )


    posInicialX = 5300

    scenaryObjects.createBlockPattern(
        [
            [3,0,0,0],
            [3,3,0,0],
            [3,3,3,0],
            [3,3,3,3],
        ],
        game, 
        posInicialX,
        posInicialY
    )
    

    posInicialX = 5600

    scenaryObjects.createBlockPattern(
        [
            [1,1,1,1],
        ],
        game, 
        posInicialX,
        posInicialY
    )



    posInicialX = 6050 

    scenaryObjects.createBlockPattern(
        [
            [0,0,0,0,0,0,0,3,3],
            [0,0,0,0,0,0,3,3,3],
            [0,0,0,0,0,3,3,3,3],
            [0,0,0,0,3,3,3,3,3],
            [0,0,0,3,3,3,3,3,3],
            [0,0,3,3,3,3,3,3,3],
            [0,3,3,3,3,3,3,3,3],
            [3,3,3,3,3,3,3,3,3],
        ],
        game,
        posInicialX,
        posInicialY - 98
    )
}