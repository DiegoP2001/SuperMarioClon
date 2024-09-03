import { BLOCK_TYPE, BLOCK_TYPE_UNDERGROUND, EMPTY } from "../const.js";

export const createBlock = function (game, posX, posY, key) {
  game.blocks
    .create(posX, posY, key)
    .setOrigin(0, 0)
    .setFrame(0)
    .setScale(2, 1.5)
    .refreshBody();
};

export const createMisteryBlock = function (game, posX, posY, key) {
  game.blocks
    .create(posX, posY, key)
    .setOrigin(0, 0)
    .setFrame(0)
    .setScale(2, 1.5)
    .refreshBody();
};

export const createBlockPattern = (pattern, game, posX, posY) => {
  const BLOCK_WIDTH = 31;
  const BLOCK_HEIGHT = 24.5;
  const BARRIER_FINAL_POS = posX + pattern[0].length * BLOCK_WIDTH;

  let coordinates = {
    x: posX,
    y: posY,
  };

  let { x, y } = coordinates;
  const items = [
    "coin",
    "superMushroom",
    "coin",
    "coin",
    "superMushroom",
    "coin",
    "superMushroom",
    "coin",
    "coin",
    "coin",
    "coin",
    "coin",
    "coin"
]

  game.barriers.left.push(
    game.physics.add.staticImage(x - BLOCK_WIDTH / 2, y, null).setVisible(false)
  );

  game.barriers.right.push(
    game.physics.add
      .staticImage(BARRIER_FINAL_POS + BLOCK_WIDTH / 2, y, null)
      .setVisible(false)
  );

  pattern.map((row) => {
    row.forEach((block) => {
      if (block !== 0) {
        if (BLOCK_TYPE[block] === "misteryBlock") {
            game.blocks
                .create(x, y, BLOCK_TYPE[block])
                .setOrigin(0, 0)
                .setFrame(0)
                .setScale(2, 1.5)
                .refreshBody();
            
            game.blocks.children.entries.forEach((misteryBlock, index) => {

                if (items[index] === 'coin') {
                    misteryBlock.coins = 3
                } else {
                    misteryBlock.mushroom = 1
                }

            })

        } else {

            game.blocks
                .create(x, y, BLOCK_TYPE[block])
                .setOrigin(0, 0)
                .setFrame(0)
                .setScale(2, 1.5)
                .refreshBody();

        }
      }

      x += BLOCK_WIDTH;
    });

    x = coordinates.x;
    y += BLOCK_HEIGHT;
  });

  /*
        [0, 0, 0]
        [0, 1, 0] -> Pattern
        [1, 1, 1]
    */
};

export const createPipe = function (game, posX, posY, key) {
  game.pipes
    .create(posX, posY, key)
    .setOrigin(0, 0)
    .setFrame(0)
    .setScale(2, 1.5)
    .refreshBody();
};

export const createFlag = function (game, posX, posY, key = "flagMast") {
  game.flags
    .create(posX, posY, key)
    .setOrigin(1, 1)
    .setFrame(0)
    .setScale(2, 1.5)
    .refreshBody();
};

export const createCastle = function (game, posX, posY, key = "castle") {
  game.flags
    .create(posX, posY, key)
    .setOrigin(1, 1)
    .setFrame(0)
    .setScale(2, 1.5)
    .refreshBody();
};

export const getItemPositions = function (game, itemIndexes) {
  let itemPositions = [];
  let index = 0;

  game.blocks.children.entries.forEach((block) => {
    if (block.texture.key === "misteryBlock") {
      itemPositions.push({
        x: block.x,
        y: block.y,
        key: itemIndexes[index],
      });

      index++;
    }
  });

  return itemPositions;
};
