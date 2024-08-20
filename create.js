import { createAnims } from './anims.js'
import { createClouds } from './clouds.js';
import { FLOOR_RENDER_TIMES } from './const.js';
import { config } from './game.js'
import * as actions from './utils.js'

export const create = function () // Se ejecuta cuando el juego comienza
{

    this.entities = {}
    this.misteryBlocks = []
    this.marioColliders = []
    this.goombaColliders = []
    this.pipes = []


    // Creamos las nubes
    createClouds(this)
    
    // Creamos las montañas
    this.add.image(0, config.height - 120, "mountainBig")
        .setOrigin(0, 0)
        .setScale(1)

    this.add.image(600, config.height - 80, "mountain")
        .setOrigin(0, 0)
        .setScale(1)

    // Creamos los arbustos
    this.add.image(480, config.height - 75, 'bushTriple')
        .setOrigin(0, 0)
        .setScale(1)
 
    this.add.image(800, config.height - 75, 'bush')
        .setOrigin(0, 0)
        .setScale(1)

    // Añadimos todos los elementos estáticos del mundo
    this.floor = this.physics.add.staticGroup()
    this.misteryBlocks = this.physics.add.staticGroup()
    this.blocks = this.physics.add.staticGroup()
    this.pipes = this.physics.add.staticGroup()

    // Creamos los bloques
    this.misteryBlocks
        .create(550, config.height - 150,  'misteryBlock')
        .setOrigin(0, 0)
        .setFrame(0)
        .setScale(2, 1.5)
        .refreshBody()


    // ************************************************************************
    // Donde 5 = CANTIDAD_BLOQUES
    // Donde 650 = Posición inicial en X
    let posInicialX = 650
    for (let i = 0; i < 5; i++) {

        if (i % 2 === 0) {
            
            //Block
            this.blocks
                .create(posInicialX, config.height - 150,  'block')
                .setOrigin(0, 0)
                .setFrame(0)
                .setScale(2, 1.5)
                .refreshBody()


        } else {

            // Mistery block
            this.misteryBlocks
                .create(posInicialX, config.height - 150,  'misteryBlock')
                .setOrigin(0, 0)
                .setFrame(0)
                .setScale(2, 1.5)
                .refreshBody()

        }

        posInicialX += 31

    }

    this.misteryBlocks
                .create(750, config.height - 265,  'misteryBlock')
                .setOrigin(0, 0)
                .setFrame(0)
                .setScale(2, 1.5)
                .refreshBody()

    // ************************************************************************


    // Distribuyendo el suelo

    let floorPlace = 0

    for (let i = 0; i < FLOOR_RENDER_TIMES; i++) {
        this.floor
        .create(floorPlace, config.height - 48, 'floor')
        .setOrigin(0, 0)
        .setScale(2, 1.5)
        .refreshBody()

        floorPlace += 255
    }

    
    // Creando los pipes

    this.pipes
        .create(900, config.height - 95,  'pipeSmall')
        .setOrigin(0, 0)
        .setFrame(0)
        .setScale(2, 1.5)
        .refreshBody()
    
    this.pipes
        .create(1200, config.height - 120,  'pipeBig')
        .setOrigin(0, 0)
        .setFrame(0)
        .setScale(2, 1.5)
        .refreshBody()



    // Creando las animaciones le pasamos como parámetro el "juego" (this)
    createAnims(this)


    // Añadiendo las físicas del "mario"
    this.entities.mario = this.physics.add.sprite(100, 250, 'mario')
        .setOrigin(0, 1) 
        .setScale(1.5)
        .setGravityY(200)
        .setCollideWorldBounds(true); 
        
    // Añadiendo las físicas del "goomba"
    this.entities.goomba = this.physics.add.sprite(750, config.height - 100, 'goomba')
        .setOrigin(0, 1) 
        .setScale(1.5)
        .setGravityY(200)
        .setCollideWorldBounds(true); 

    

    // Físicas del mundo
    this.physics.world.setBounds(0, 0, config.width * 4, config.height)

    // Colisionador
    this.marioColliders.push(
        this.physics.add.collider(this.entities.mario, this.floor)
    )

    this.goombaColliders.push(
        this.physics.add.collider(this.entities.goomba, this.floor)
    )

    this.marioColliders.push(
        this.physics.add.collider(this.entities.mario, this.entities.goomba, actions.checkCollisionX, null, this)
    )

    this.marioColliders.push(
        this.physics.add.collider(this.entities.mario, this.misteryBlocks, actions.checkCollisionY, null, this)
    )
    
    this.marioColliders.push(
        this.physics.add.collider(this.entities.mario, this.blocks, actions.checkCollisionY, null, this)
    )
    
    this.marioColliders.push(
        this.physics.add.collider(this.entities.mario, this.pipes)
    )

    

    
    // Camara
    this.cameras.main.setBounds(0, 0, config.width * 4, config.height)
    this.cameras.main.startFollow(this.entities.mario)


    // Eventos de teclado: es necesaria esta línea para poder interactuar con los eventos en el update.
    this.keys = this.input.keyboard.createCursorKeys()

    

}