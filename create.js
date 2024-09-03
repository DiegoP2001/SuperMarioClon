// Config | consts | etc

import { createAnims } from './anims.js'
import { FLOOR_RENDER_TIMES, GOOMBA_POSITIONS, GOOMBAS_AMOUNT } from './const.js';
import { config } from './game.js'

// Create scenary functions

import * as scenary from './functions/scenary.js'
import * as scenaryObjects from './functions/scenaryObject.js'
import * as gameEntities from './functions/entities.js'
import { createBlocks } from './blocks.js';

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
    this.barriers = {}
    this.barriers.left = []
    this.barriers.right = []
    this.items = []
    this.coins = []
    this.score = 0


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
    this.blocks = this.physics.add.staticGroup()
    this.pipes = this.physics.add.staticGroup()
    this.flags = this.physics.add.staticGroup()



    // Creamos los bloques ************************************************************************


    createBlocks(this)
    

    // BLOQUES *****************************************************************************************************

    let posInicialX = 6700
    let posInicialY = config.height - 27

    scenaryObjects.createFlag(this, posInicialX, posInicialY - 21, 'flagMast')

    posInicialX = 6950

    scenaryObjects.createCastle(this, posInicialX, posInicialY - 20)


    
    // ************************************************************************


    // Distributing the floor
    scenary.createFloor(this)
    

    // Creando los pipes

    scenaryObjects.createPipe(this, 900, config.height - 95,  'pipeSmall')
    scenaryObjects.createPipe(this, 1200, config.height - 120,  'pipeBig')
    scenaryObjects.createPipe(this, 1500, config.height - 142,  'verticalLargePipe')
    scenaryObjects.createPipe(this, 1900, config.height - 142,  'verticalLargePipe')
    scenaryObjects.createPipe(this, 5500, config.height - 95,  'pipeSmall')
    scenaryObjects.createPipe(this, 6000, config.height - 95,  'pipeSmall')
    

    // Creando las animaciones le pasamos como parámetro el "juego" (this)
    createAnims(this)


    // Creando el texto de las puntuaciones etc
    this.scoreText = this.add.text(20, 20, 'Score: 0', {
        font: 'bold 32px "Calibri"',
        fill: '#ffffff',
        align: 'left' 
    });

    this.scoreText.setScrollFactor(0);
    this.scoreText.setOrigin(0, 0);


    // Añadiendo las físicas del "mario"
    gameEntities.createMario(this, 100, 250)
    this.entities.mario.lifes = 1
    this.entities.mario.isInvincible = false

    console.log(this.entities.mario)
    console.log(this.entities.mario.displayHeight)
    console.log(this.entities.mario.displayWidth)

    
    // Goomba coordinates
    this.goombaPositions = GOOMBA_POSITIONS

    // Añadiendo las físicas del "goomba"
    for(const goomba of this.goombaPositions){

        this.entities.goomba.push(
            gameEntities.createGoomba(this, goomba.x, goomba.y)
        )

    }

    this.entities.goomba.forEach((goomba) => {

        goomba.moveRight = true

    })

    

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
            const blockCollider = this.physics.add.collider(this.blocks, goomba)
            const pipeCollider = this.physics.add.collider(this.pipes, goomba)
            const leftBarrierCollider = this.physics.add.collider(this.barriers.left, goomba)
            const rigthBarrierCollider = this.physics.add.collider(this.barriers.right, goomba)
            this.marioColliders.push(collider) 
            
            
        })

        // Mario VS MisteryBlock

        // this.marioColliders.push(
        //     this.physics.add.collider(this.entities.mario, this.misteryBlocks, actions.checkCollisionY, null, this)
        // )
        
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