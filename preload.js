export const preload = function () // Preload the necesary assets
{   
    // *********************************************** ESCENARIO ***********************************************

        // Escenario "Overworld"

            this.load.image('bushTriple', 'assets/scenery/overworld/bush1.png')
            this.load.image('bush', 'assets/scenery/overworld/bush2.png')
            this.load.image('doubleCloud', 'assets/scenery/overworld/cloud1.png')
            this.load.image('cloud', 'assets/scenery/overworld/cloud2.png')
            this.load.image('fence', 'assets/scenery/overworld/fence.png')
            this.load.image('floor', 'assets/scenery/overworld/floorbricks.png')
            this.load.image('mountain', 'assets/scenery/overworld/mountain1.png')
            this.load.image('mountainBig', 'assets/scenery/overworld/mountain2.png')
        
        // Escenario "Undergorund"

            this.load.image('fenceUnderground', 'assets/scenery/underground/floorbricks.png')
        
        
        // Escenario

            this.load.image('pipeSmall', 'assets/scenery/pipe2.png')
            this.load.image('pipeBig', 'assets/scenery/pipe1.png')
        


    // *********************************************** ESCENARIO ***********************************************

    // ---------------------------------------------------------------------------------------------------------
    
    // *********************************************** BLOQUES *************************************************

        // Bloques "Overworld"

            this.load.image('block', 'assets/blocks/overworld/block.png')
            this.load.image('brickDebris', 'assets/blocks/overworld/brick-debris.png')
            this.load.image('emptyBlock', 'assets/blocks/overworld/emptyBlock.png')
            this.load.image('solidBlock', 'assets/blocks/overworld/immovableBlock.png')

        // Spritesheets
        
            this.load.spritesheet( 'misteryBlock', 'assets/blocks/overworld/misteryBlock.png',
                {
                frameWidth: 16, frameHeight: 16 
                }
            )
            this.load.spritesheet( 'customBlock', 'assets/blocks/overworld/customBlock.png',
                {
                frameWidth: 16, frameHeight: 16 
                }
            )

        // Bloques "Underground"
    
            this.load.image('blockUndergroundLineTopWhite', 'assets/blocks/underground/block.png')
            this.load.image('blockUnderground', 'assets/blocks/underground/block2.png')
            this.load.image('brickDebrisUnderground', 'assets/blocks/underground/brick-debris.png')
            this.load.image('emptyBlockUnderground', 'assets/blocks/underground/emptyBlock.png')
            this.load.image('solidBlockUnderground', 'assets/blocks/underground/immovableBlock.png')
            this.load.image('misteryBlockUnderground', 'assets/blocks/underground/misteryBlock.png')


    // *********************************************** BLOQUES *************************************************

    // ---------------------------------------------------------------------------------------------------------

    // *********************************************** RECOLECTABLES *******************************************

        // Recolectables "Overworld"
        
            this.load.spritesheet('fireFlower', 'assets/collectibles/overworld/fire-flower.png',
                {
                    frameWidth: 16, frameHeight: 16 
                }
            )

        // Recolectables "Underground"
            
            this.load.spritesheet('coin', 'assets/collectibles/coin.png',
                {
                    frameWidth: 16, frameHeight: 16 
                }
            )

            this.load.image('liveMushroom', 'assets/collectibles/live-mushroom.png')
            this.load.image('superMushroom', 'assets/collectibles/super-mushroom.png')


    // *********************************************** RECOLECTABLES *******************************************

    // ---------------------------------------------------------------------------------------------------------


    // Spritesheets

    this.load.spritesheet( 'goomba', 'assets/entities/overworld/goomba.png',
        {
           frameWidth: 16, frameHeight: 16 
        }
    )
    this.load.spritesheet('mario', 'assets/entities/mario.png'
        , {
            frameWidth: 18, frameHeight: 16
        }
    )

}