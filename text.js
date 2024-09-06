export const createText = (game) => {

    game.scoreText = game.add.text(20, 20, 'Score: 0', {
        font: 'bold 32px "Calibri"',
        fill: '#ffffff',
        align: 'left' 
    })
    
    game.scoreText.setScrollFactor(0);
    game.scoreText.setOrigin(0, 0);


    game.texts.push( 
        game.add.text(210, 20, 'World', {
            font: 'bold 32px "Calibri"',
            fill: '#ffffff',
            align: 'left' 
        })
    )

    game.texts.push( 
        game.add.text(230, 50, '1-1', {
            font: 'bold 24px "Calibri"',
            fill: '#ffffff',
            align: 'center' 
        })
    )

    game.texts.push( 
        game.add.text(350, 20, 'Time', {
            font: 'bold 32px "Calibri"',
            fill: '#ffffff',
            align: 'center' 
        })
    )

    game.texts.forEach((text) => {

        text.setScrollFactor(0);
        text.setOrigin(0, 0);

    })



    game.textTime = game.add.text(365, 50, game.time , {
            font: 'bold 24px "Calibri"',
            fill: '#ffffff',
            align: 'center' 
    }).setScrollFactor(0).setOrigin(0, 0)


}