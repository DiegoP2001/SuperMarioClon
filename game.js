import { WORLD_HEIGHT, WORLD_WIDTH } from './const.js'
import { preload } from './preload.js';
import { create } from './create.js';
import { update } from './update.js';


export const config = {
    type: Phaser.AUTO,
    width: WORLD_WIDTH,
    height: WORLD_HEIGHT,
    backgroundColor: "#09f",
    parent: "game",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
};

new Phaser.Game(config);






