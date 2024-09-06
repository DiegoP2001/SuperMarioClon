export const preload = function () // Preload the necesary assets
{   
    // *********************************************** SCENARY *************************************************

        // Scenary "Overworld"

            this.load.image('bushTriple', 'assets/scenery/overworld/bush1.png')
            this.load.image('bush', 'assets/scenery/overworld/bush2.png')
            this.load.image('doubleCloud', 'assets/scenery/overworld/cloud1.png')
            this.load.image('cloud', 'assets/scenery/overworld/cloud2.png')
            this.load.image('fence', 'assets/scenery/overworld/fence.png')
            this.load.image('floor', 'assets/scenery/overworld/floorbricks.png')
            this.load.image('mountain', 'assets/scenery/overworld/mountain1.png')
            this.load.image('mountainBig', 'assets/scenery/overworld/mountain2.png')
        
        // Scenary "Undergorund"

            this.load.image('fenceUnderground', 'assets/scenery/underground/floorbricks.png')
        
        
        // Scenary


            this.load.image('castle', 'assets/scenery/castle.png')
            this.load.image('finalFlag', 'assets/scenery/final-flag.png')
            this.load.image('flagMast', 'assets/scenery/flag-mast.png')
            this.load.image('horizontalFinalTube', 'assets/scenery/horizontal-final-tube.png')
            this.load.image('horizontalTube', 'assets/scenery/horizontal-tube.png')
            this.load.image('pipeBig', 'assets/scenery/pipe1.png')
            this.load.image('pipeSmall', 'assets/scenery/pipe2.png')
            this.load.image('sign', 'assets/scenery/sign.png')
            this.load.image('verticalLargeTube', 'assets/scenery/vertical-large-tube.png')
            this.load.image('verticalLargePipe', 'assets/scenery/vertical-large-tube.png.png')
            this.load.image('verticalMediumPipe', 'assets/scenery/vertical-medium-tube.png')
            this.load.image('verticalSmallPipe', 'assets/scenery/vertical-small-tube.png')
    


    // *********************************************** SCENARY *************************************************

    // ---------------------------------------------------------------------------------------------------------
    
    // *********************************************** BLOCKS **************************************************

        // Blocks "Overworld"

            this.load.image('block', 'assets/blocks/overworld/block.png')
            this.load.image('emptyBlock', 'assets/blocks/overworld/emptyBlock.png')
            this.load.image('solidBlock', 'assets/blocks/overworld/immovableBlock.png')

        // Spritesheets
            this.load.spritesheet('brickDebris', 'assets/blocks/overworld/brick-debris.png',
                {
                   frameWidth: 8, frameHeight: 8  
                }
            )
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

        // Blocks "Underground"
    
            this.load.image('blockUndergroundLineTopWhite', 'assets/blocks/underground/block.png')
            this.load.image('blockUnderground', 'assets/blocks/underground/block2.png')
            this.load.image('brickDebrisUnderground', 'assets/blocks/underground/brick-debris.png')
            this.load.image('emptyBlockUnderground', 'assets/blocks/underground/emptyBlock.png')
            this.load.image('solidBlockUnderground', 'assets/blocks/underground/immovableBlock.png')
            this.load.image('misteryBlockUnderground', 'assets/blocks/underground/misteryBlock.png')


    // *********************************************** BLOCKS **************************************************

    // ---------------------------------------------------------------------------------------------------------

    // *********************************************** COLLECTABLES ********************************************

        // Collectables "Overworld"
        
            this.load.spritesheet('fireFlower', 'assets/collectibles/overworld/fire-flower.png',
                {
                    frameWidth: 16, frameHeight: 16 
                }
            )

        // Collectables "Underground"
            
            this.load.spritesheet('coin', 'assets/collectibles/coin.png',
                {
                    frameWidth: 16, frameHeight: 16 
                }
            )

            this.load.image('liveMushroom', 'assets/collectibles/live-mushroom.png')
            this.load.image('superMushroom', 'assets/collectibles/super-mushroom.png')


    // *********************************************** COLLECTABLES ********************************************

    // ---------------------------------------------------------------------------------------------------------

    // *********************************************** ENTITIES ************************************************

        // Spritesheets "Overworld"

            this.load.spritesheet( 'goomba', 'assets/entities/overworld/goomba.png',
                {
                frameWidth: 16, frameHeight: 16 
                }
            )

        // Spritesheets "Underground"

            this.load.spritesheet( 'goombaUnderground', 'assets/entities/underground/goomba.png',
                {
                frameWidth: 16, frameHeight: 16 
                }
            )

        // Mario
        
            this.load.spritesheet('mario', 'assets/entities/mario.png'
                , {
                    frameWidth: 18, frameHeight: 16
                }
            )

            this.load.spritesheet('marioGrown', 'assets/entities/mario-grown.png'
                , {
                    frameWidth: 18, frameHeight: 32
                }
            )

            this.load.spritesheet('marioFire', 'assets/entities/mario-fire.png'
                , {
                    frameWidth: 18, frameHeight: 32
                }
            )

        // Fireball

            this.load.spritesheet('fire', 'assets/entities/fireball.png', {
                frameWidth: 8, frameHeight: 8
            })
            this.load.spritesheet('fireball', 'assets/entities/fireball-explosion.png'
                , {
                    frameWidth: 16, frameHeight: 16
                }
            )

        // Koopa (Tortuga)

            this.load.spritesheet('koopa', 'assets/entities/koopa.png',
                {
                    frameWidth: 16, frameHeight: 24
                }
            )
            
            this.load.spritesheet('koopaShell', 'assets/entities/shell.png',
                {
                    frameWidth: 16, frameHeight: 15
                }
            )


   
    // *********************************************** ENTITIES ************************************************
    // ---------------------------------------------------------------------------------------------------------
    // *********************************************** HUD *****************************************************
    
            this.load.image('gear', 'assets/hud/gear.png')
            this.load.spritesheet('npc', 'assets/hud/npc.png',
                {
                    frameWidth: 16, frameHeight: 24
                }
            )
            this.load.image('settings', 'assets/hud/settings-bubble.png')
            

    // *********************************************** HUD *****************************************************
    // ---------------------------------------------------------------------------------------------------------
    // *********************************************** AUDIO ***************************************************
            
            // Effects
                this.load.audio('blockBump', 'assets/sound/effects/block-bump.wav')
                this.load.audio('breakBlock', 'assets/sound/effects/break-block.wav')
                this.load.audio('coin', 'assets/sound/effects/coin.mp3')
                this.load.audio('consumePowerup', 'assets/sound/effects/consume-powerup.mp3')
                this.load.audio('cursed', 'assets/sound/effects/cursed-here-we-go.mp3')
                this.load.audio('fireball', 'assets/sound/effects/fireball.mp3')
                this.load.audio('flagpole', 'assets/sound/effects/flagpole.mp3')
                this.load.audio('goombaStomp', 'assets/sound/effects/goomba-stomp.wav')
                this.load.audio('hereWeGo', 'assets/sound/effects/here-we-go.mp3')
                this.load.audio('jump', 'assets/sound/effects/jump.mp3')
                this.load.audio('kick', 'assets/sound/effects/kick.mp3')
                this.load.audio('pause', 'assets/sound/effects/pause.wav')
                this.load.audio('powerdown', 'assets/sound/effects/powerdown.mp3')
                this.load.audio('powerupAppears', 'assets/sound/effects/powerup-appears.mp3')
                this.load.audio('timeWarning', 'assets/sound/effects/time-warning.mp3')

            // Music "Overworld"

                this.load.audio('hurryUpTheme', 'assets/sound/music/overworld/hurry-up-theme.mp3')
                this.load.audio('theme', 'assets/sound/music/overworld/theme.mp3')
            
            // Music "Underground"

                this.load.audio('hurryUpThemeUnderground', 'assets/sound/music/underground/hurry-up-theme.mp3')
                this.load.audio('themeUnderground', 'assets/sound/music/underground/theme.mp3')

            // Sound

                this.load.audio('gameover', 'assets/sound/music/gameover.mp3')
                this.load.audio('win', 'assets/sound/music/win.wav')


    // *********************************************** AUDIO ***************************************************
    // ---------------------------------------------------------------------------------------------------------

    

}