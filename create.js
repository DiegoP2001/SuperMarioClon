// Config | consts | etc

import { createAnims } from './anims.js'
import { FLOOR_RENDER_TIMES } from './const.js';
import { config } from './game.js'


// Create scenary functions

import * as scenary from './functions/scenary.js'
import * as scenaryObjects from './functions/scenaryObject.js'
import * as gameEntities from './functions/entities.js'
import * as textures from './functions/texture.js'

// Util functions 

import * as actions from './utils.js'



export const create = function () // Se ejecuta cuando el juego comienza
{

    this.entities = {}
    this.entities.goomba = []
    this.misteryBlocks = []
    this.marioColliders = []
    this.goombaColliders = []
    this.pipes = []
    this.flags = []


    // Creamos las nubes
    scenary.createCloud(this, 100, 100, "cloud")
    scenary.createCloud(this, 350, 80, "cloud")
    scenary.createCloud(this, 550, 100, "cloud")
    scenary.createCloud(this, 500, 100, "doubleCloud")
    scenary.createCloud(this, 750, 80, "doubleCloud")
    scenary.createCloud(this, 1000, 50, "doubleCloud")
    scenary.createCloud(this, 1900, 50, "doubleCloud")
    scenary.createCloud(this, 2250, 100, "cloud")
    scenary.createCloud(this, 2500, 120, "doubleCloud")
    scenary.createCloud(this, 2800, 120, "doubleCloud")
    scenary.createCloud(this, 3450, 120, "cloud")


    
    // Creamos las montañas
    scenary.createMountain(this, 0, config.height - 120, "mountainBig")
    scenary.createMountain(this, 600, config.height - 80, "mountain")
    scenary.createMountain(this, 1560, config.height - 120, "mountainBig")
    scenary.createMountain(this, 2150, config.height - 80, "mountain")
    scenary.createMountain(this, 3350, config.height - 120, "mountainBig")
    scenary.createMountain(this, 3750, config.height - 80, "mountain")
    scenary.createMountain(this, 5000, config.height - 120, "mountainBig")


    // Creamos los arbustos

    scenary.createBush(this, 480, undefined, 'bushTriple')
    scenary.createBush(this, 800, undefined, 'bush')
    scenary.createBush(this, 1350, undefined, 'bush')
    scenary.createBush(this, 1400, undefined, 'bush')
    scenary.createBush(this, 1970, undefined, 'bushTriple')
    scenary.createBush(this, 2400, undefined, 'bush')
    scenary.createBush(this, 3000, undefined, 'bushTriple')
    scenary.createBush(this, 3600, undefined, 'bushTriple')
    scenary.createBush(this, 3850, undefined, 'bush')
    scenary.createBush(this, 4800, undefined, 'bushTriple')

    

    // Añadimos todos los elementos estáticos del mundo
    this.floor = this.physics.add.staticGroup()
    this.misteryBlocks = this.physics.add.staticGroup()
    this.blocks = this.physics.add.staticGroup()
    this.pipes = this.physics.add.staticGroup()
    this.flags = this.physics.add.staticGroup()

    // Creamos los bloques

    scenaryObjects.createMisteryBlock(this, 550, config.height - 150,  'misteryBlock')

    // ************************************************************************
    // Donde 5 = CANTIDAD_BLOQUES
    // Donde 650 = Posición inicial en X
    let posInicialX = 650
    for (let i = 0; i < 5; i++) {

        if (i % 2 === 0) {
            
            //Block
            scenaryObjects.createBlock(this, posInicialX, config.height - 150,  'block')

        } else {

            // Mistery block
            scenaryObjects.createMisteryBlock(this, posInicialX, config.height - 150,  'misteryBlock')

        }

        posInicialX += 31

    }

    scenaryObjects.createMisteryBlock(this, 750, config.height - 265,  'misteryBlock')

    posInicialX = 2500

    for (let i = 0; i < 3; i++) {

        if (i % 2 === 0) {

            scenaryObjects.createBlock(this, posInicialX, config.height - 150, 'block')

        } else {

            scenaryObjects.createBlock(this, posInicialX, config.height - 150, 'misteryBlock')

        }

        posInicialX += 31

    }

    posInicialX = 2600

    for (let i = 0; i < 8; i++) {

        scenaryObjects.createBlock(this, posInicialX, 350, 'block')

        posInicialX += 31

    }

    posInicialX = 3000

    for (let i = 0; i < 4; i++) {

        if (i === 3) {

            scenaryObjects.createBlock(this, posInicialX, 350, 'misteryBlock')
            scenaryObjects.createBlock(this, posInicialX, config.height - 150, 'block')

        } else {

            scenaryObjects.createBlock(this, posInicialX, 350, 'block')

        }

        posInicialX += 31

    }

    posInicialX = 3300

    for (let i = 0; i < 2; i++) {

        scenaryObjects.createBlock(this, posInicialX, config.height - 150, 'block')

        posInicialX += 31

    }

    posInicialX = 3500

    for (let i = 0; i < 3; i++) {

        if (i === 1) { scenaryObjects.createBlock(this, posInicialX, 350, 'misteryBlock') }

        scenaryObjects.createBlock(this, posInicialX, config.height - 150, 'misteryBlock')

        posInicialX += (31 * 3)

    }

    posInicialX = 4000

    scenaryObjects.createBlock(this, posInicialX, config.height - 150, 'block')

    posInicialX = 4150

    for (let i = 0; i < 3; i++) {

        scenaryObjects.createBlock(this, posInicialX, 350, 'block')

        posInicialX += 31

    }

    posInicialX = 4350

    for (let i = 0; i < 4; i++) {

        if ( i === 0 || i === 3) {

            scenaryObjects.createBlock(this, posInicialX, 350, 'block')

        } else {

            scenaryObjects.createBlock(this, posInicialX, 350, 'misteryBlock')

        }

        posInicialX += 31

    }

    posInicialX = 4370

    for (let i = 0; i < 2; i++) {

        scenaryObjects.createBlock(this, posInicialX, config.height - 150, 'block')

        posInicialX += 31

    }
    

    // 4700
    posInicialX = 4550
    let posInicialY = config.height -70


    for (let i = 1; i <= 4; i++) {
        
        for (let j = 0; j < i; j++) {
            
            scenaryObjects.createBlock(this, posInicialX, posInicialY - (j * 25), 'solidBlock')

        }

        posInicialX += 31

    }
    
    posInicialX = 4750

    for (let i = 4; i > 0; i--) {
        
        for (let j = 0; j < i; j++) {
            
            scenaryObjects.createBlock(this, posInicialX, posInicialY - (j * 25), 'solidBlock')

        }

        posInicialX += 31

    }


    posInicialX = 5060
    let lastBlock = undefined

    for (let i = 0; i <= 5; i++) {
        
        if ( i < 5) {

            for (let j = 0; j < i; j++) {
                
                scenaryObjects.createBlock(this, posInicialX, posInicialY - (j * 25), 'solidBlock')

                lastBlock = posInicialY - (j * 25)

            }
            
            posInicialX += 31
            
        
        } else {


            for (let j = 0; j < 4; j++) {
                
                scenaryObjects.createBlock(this, posInicialX, posInicialY, 'solidBlock')

                posInicialY -= 25

            }


        }

    }

    posInicialX = 5300
    posInicialY = config.height -70

    for (let i = 4; i > 0; i--) {
        
        for (let j = 0; j < i; j++) {
            
            scenaryObjects.createBlock(this, posInicialX, posInicialY - (j * 25), 'solidBlock')

        }

        posInicialX += 31

    }

    posInicialX = 5600

    for (let i = 0; i < 4; i++) {

        if ( i == 2) { scenaryObjects.createBlock(this, posInicialX, config.height - 150, 'misteryBlock') }

        scenaryObjects.createBlock(this, posInicialX, config.height - 150, 'block')

        posInicialX += 31

    }


    posInicialX = 6050

    for (let i = 0; i <= 9; i++) {
        
        if ( i < 9) {

            for (let j = 0; j < i; j++) {
                
                scenaryObjects.createBlock(this, posInicialX, posInicialY - (j * 25), 'solidBlock')

                lastBlock = posInicialY - (j * 25)

            }
            
            posInicialX += 31
            
        
        } else {


            for (let j = 0; j < 8; j++) {
                
                scenaryObjects.createBlock(this, posInicialX, posInicialY, 'solidBlock')

                posInicialY -= 25

            }


        }

    }

    posInicialX = 6700
    posInicialY = config.height - 27

    scenaryObjects.createFlag(this, posInicialX, posInicialY - 21, 'flagMast')

    posInicialX = 6950

    scenaryObjects.createCastle(this, posInicialX, posInicialY - 20)


    posInicialX = 300
    posInicialY = config.height - 150

    scenaryObjects.createBlockPattern(this, posInicialX, posInicialY)

    
    // ************************************************************************


    // Distributing the floor

    let floorPlace = 0

    for (let i = 0; i < 9; i++) {

        textures.createFloor(this, floorPlace, config.height - 48)

        floorPlace += 255

        // console.log(floorPlace)
    }

    
    floorPlace = 2370

    for (let i = 0; i < 2; i++) {

        textures.createFloor(this, floorPlace, config.height - 48)

        floorPlace += 255

        // console.log(floorPlace)
    }

    
    floorPlace = 2950

    for (let i = 0; i < 9; i++) {

        textures.createFloor(this, floorPlace, config.height - 48)

        floorPlace += 255

        // console.log(floorPlace)
    }

    floorPlace = 5300

    for (let i = 0; i < 10; i++) {

        textures.createFloor(this, floorPlace, config.height - 48)

        floorPlace += 255

        // console.log(floorPlace)
    }

    // Creando los pipes

    scenaryObjects.createPipe(this, 900, config.height - 95,  'pipeSmall')
    scenaryObjects.createPipe(this, 1200, config.height - 120,  'pipeBig')
    scenaryObjects.createPipe(this, 1500, config.height - 142,  'verticalLargePipe')
    scenaryObjects.createPipe(this, 1900, config.height - 142,  'verticalLargePipe')
    scenaryObjects.createPipe(this, 5500, config.height - 95,  'pipeSmall')
    scenaryObjects.createPipe(this, 6000, config.height - 95,  'pipeSmall')

    



    // Creando las animaciones le pasamos como parámetro el "juego" (this)
    createAnims(this)


    // Añadiendo las físicas del "mario"
    gameEntities.createMario(this, 100, 250)

    
    // Añadiendo las físicas del "goomba"
    this.entities.goomba.push(
        gameEntities.createGoomba(this, 750, (config.height - 100))
    )
    this.entities.goomba.push(
        gameEntities.createGoomba(this, 1275, (config.height - 100))
    )
    this.entities.goomba.push(
        gameEntities.createGoomba(this, 1650, (config.height - 100))
    )
    this.entities.goomba.push(
        gameEntities.createGoomba(this, 1675, (config.height - 100))
    )

    

    // Físicas del mundo
    this.physics.world.setBounds(0, 0, config.width * 4, config.height)

    // Colisionador

        // Mario VS Floor
        this.marioColliders.push(
            this.physics.add.collider(this.entities.mario, this.floor)
        )

        // Goomba VS Floor

        this.goombaColliders.push(
            this.physics.add.collider(this.entities.goomba, this.floor)
        )

        // Mario VS Each Goomba

        this.entities.goomba.forEach((goomba) => {

            const collider = this.physics.add.collider(this.entities.mario, goomba, actions.checkCollisionX, null, this);
            this.marioColliders.push(collider) 

        })

        // Mario VS MisteryBlock

        this.marioColliders.push(
            this.physics.add.collider(this.entities.mario, this.misteryBlocks, actions.checkCollisionY, null, this)
        )
        
        // Mario VS Block

        this.marioColliders.push(
            this.physics.add.collider(this.entities.mario, this.blocks, actions.checkCollisionY, null, this)
        )

        // Mario VS Pipes
        
        this.marioColliders.push(
            this.physics.add.collider(this.entities.mario, this.pipes)
        )

    

    
    // Camera
    this.cameras.main.setBounds(0, 0, config.width * 4, config.height)
    this.cameras.main.startFollow(this.entities.mario)


    // Eventos de teclado: es necesaria esta línea para poder interactuar con los eventos en el update.
    this.keys = this.input.keyboard.createCursorKeys()

    

}