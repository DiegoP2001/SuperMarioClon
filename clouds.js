export const createClouds = (game) => {
    
    game.add.image(100, 100, "cloud")
        .setOrigin(0, 0)
        .setScale(0.3)

    game.add.image(350, 80, "cloud")
        .setOrigin(0, 0)
        .setScale(0.2)

    game.add.image(550, 100, "cloud")
        .setOrigin(0, 0)
        .setScale(0.2)
    
    game.add.image(500, 100, "doubleCloud")
        .setOrigin(0, 0)
        .setScale(0.2)

    game.add.image(750, 80, "doubleCloud")
        .setOrigin(0, 0)
        .setScale(0.2)

}