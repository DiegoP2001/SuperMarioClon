export const createAnims = (game) => {

    if (!game.anims.exists('mario-walk')){
        game.anims.create({
            key: 'mario-walk',
            frames: game.anims.generateFrameNumbers('mario', { start: 0, end: 3 }),
            frameRate: 12,
            repeat: -1
        })
    }

    if (!game.anims.exists('mario-idle')){
        game.anims.create({
            key: 'mario-idle',
            frames: [{ key: 'mario', frame: 0 }] 
        })
    }

    if (!game.anims.exists('mario-jump')){
        game.anims.create({
            key: 'mario-jump',
            frames: [{ key: 'mario', frame: 5 }],
            frameRate: 15,
            repeat: -1,
        })
    }

    if (!game.anims.exists('mario-dies')){
        game.anims.create({
            key: 'mario-dies',
            frames: [{ key: 'mario', frame: 4 }]
        })
    }

    if (!game.anims.exists('goomba-crush')){
        game.anims.create({
            key: 'goomba-crush',
            frames: game.anims.generateFrameNumbers('goomba', { start: 0, end: 2 }),
            frameRate: 15,
            repeat: 1,
        })
    }


}