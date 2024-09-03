export const createAnims = (game) => {

    const marioAnims = {

        small: {

            walk: { 
                key: 'mario-walk',
                frames: game.anims.generateFrameNumbers('mario', { start: 0, end: 3 }),
                frameRate: 12,
                repeat: -1
            },

            idle: {
                key: 'mario-idle',
                frames: [{ key: 'mario', frame: 0 }]
            },

            jump: {
                key: 'mario-jump',
                frames: [{ key: 'mario', frame: 5 }],
                frameRate: 15,
                repeat: -1,
            },

            dies: {
                key: 'mario-dies',
                frames: [{ key: 'mario', frame: 4 }]
            }

        },

        grown: {

            walk: { 
                key: 'mario-grow-walk',
                frames: game.anims.generateFrameNumbers('marioGrown', { start: 0, end: 3 }),
                frameRate: 12,
                repeat: -1
            },

            idle: {
                key: 'mario-grow-idle',
                frames: [{ key: 'marioGrown', frame: 0 }]
            },

            jump: {
                key: 'mario-grow-jump',
                frames: [{ key: 'marioGrown', frame: 5 }],
                frameRate: 15,
                repeat: -1,
            },

            dies: {
                key: 'mario-grow-dies',
                frames: [{ key: 'marioGrown', frame: 4 }]
            }

        },

        grownFire: {


        },

    }
    
        
            

        if (!game.anims.exists('mario-walk')){
            game.anims.create(
                marioAnims.small.walk
            )
        }
        


            if (!game.anims.exists('mario-grow-walk')){
                game.anims.create(
                    marioAnims.grown.walk
                )
            }
        
   

    
        
            if (!game.anims.exists('mario-idle')){
                game.anims.create(
                    marioAnims.small.idle
                )
            }
        
            if (!game.anims.exists('mario-grow-idle')){
                game.anims.create(
                    marioAnims.grown.idle
                )
            }
        
    

    
        
            if (!game.anims.exists('mario-jump')){
                game.anims.create(
                    marioAnims.small.jump
                )
            }
        
            if (!game.anims.exists('mario-grow-jump')){
                game.anims.create(
                    marioAnims.grown.jump
                )
            }
        

    
        
            if (!game.anims.exists('mario-dies')){
                game.anims.create(
                    marioAnims.small.dies
                )
            }
        
            if (!game.anims.exists('mario-grow-dies')){
                game.anims.create(
                    marioAnims.grown.dies
                )
            }
        
    

    if (!game.anims.exists('goomba-crush')){
        game.anims.create({
            key: 'goomba-crush',
            frames: game.anims.generateFrameNumbers('goomba', { start: 0, end: 2 }),
            frameRate: 15,
            repeat: 1,
        })
    }

    if (!game.anims.exists('coin-rotate')){
        game.anims.create({
            key: 'coin-rotate',
            frames: game.anims.generateFrameNumbers('coin', { start: 0, end: 3 }),
            frameRate: 15,
            repeat: -1,
        })
    }


}