export const createAnims = (game) => {
  const marioAnims = {
    small: {
      walk: {
        key: "mario-walk",
        frames: game.anims.generateFrameNumbers("mario", { start: 0, end: 3 }),
        frameRate: 12,
        repeat: -1,
      },

      idle: {
        key: "mario-idle",
        frames: [{ key: "mario", frame: 0 }],
      },

      jump: {
        key: "mario-jump",
        frames: [{ key: "mario", frame: 5 }],
        frameRate: 15,
        repeat: -1,
      },

      dies: {
        key: "mario-dies",
        frames: [{ key: "mario", frame: 4 }],
      },
    },

    grown: {
      walk: {
        key: "mario-grow-walk",
        frames: game.anims.generateFrameNumbers("marioGrown", {
          start: 0,
          end: 3,
        }),
        frameRate: 12,
        repeat: -1,
      },

      idle: {
        key: "mario-grow-idle",
        frames: [{ key: "marioGrown", frame: 0 }],
      },

      jump: {
        key: "mario-grow-jump",
        frames: [{ key: "marioGrown", frame: 5 }],
        frameRate: 15,
        repeat: -1,
      },

      dies: {
        key: "mario-grow-dies",
        frames: [{ key: "marioGrown", frame: 4 }],
      },

      
      bend: {
        key: "mario-grow-bend",
        frames: [{ key: "marioGrown", frame: 4 }]
      }

    },

    grownFire: {

      walk: {
        key: "mario-super-walk",
        frames: game.anims.generateFrameNumbers("marioFire", {
          start: 0,
          end: 3,
        }),
        frameRate: 12,
        repeat: -1,
      },

      idle: {
        key: "mario-super-idle",
        frames: [{ key: "marioFire", frame: 0 }],
      },

      jump: {
        key: "mario-super-jump",
        frames: [{ key: "marioFire", frame: 5 }],
        frameRate: 15,
        repeat: -1,
      },

      dies: {
        key: "mario-super-dies",
        frames: [{ key: "marioFire", frame: 4 }],
      },

      bend: {
        key: "mario-super-bend",
        frames: [{ key: "marioFire", frame: 4 }]
      },

      shootFireball: {
        key: "mario-super-shoot",
        frames: [{ key: "marioFire", frame: 6 }],
      },
    },
  };

  // WALK

  if (!game.anims.exists("mario-walk")) {
    game.anims.create(marioAnims.small.walk);
  }

  if (!game.anims.exists("mario-grow-walk")) {
    game.anims.create(marioAnims.grown.walk);
  }

  if (!game.anims.exists("mario-super-walk")) {
    game.anims.create(marioAnims.grownFire.walk);
  }

  // IDLE

  if (!game.anims.exists("mario-idle")) {
    game.anims.create(marioAnims.small.idle);
  }

  if (!game.anims.exists("mario-grow-idle")) {
    game.anims.create(marioAnims.grown.idle);
  }

  if (!game.anims.exists("mario-super-idle")) {
    game.anims.create(marioAnims.grownFire.idle);
  }

  // JUMP

  if (!game.anims.exists("mario-jump")) {
    game.anims.create(marioAnims.small.jump);
  }

  if (!game.anims.exists("mario-grow-jump")) {
    game.anims.create(marioAnims.grown.jump);
  }

  if (!game.anims.exists("mario-super-jump")) {
    game.anims.create(marioAnims.grownFire.jump);
  }

  // BEND

  if (!game.anims.exists("mario-grow-bend")) {
    game.anims.create(marioAnims.grown.bend);
  }

  if (!game.anims.exists("mario-super-bend")) {
    game.anims.create(marioAnims.grownFire.bend);
  }

  // DIES

  if (!game.anims.exists("mario-dies")) {
    game.anims.create(marioAnims.small.dies);
  }

  if (!game.anims.exists("mario-grow-dies")) {
    game.anims.create(marioAnims.grown.dies);
  }

  if (!game.anims.exists("mario-super-dies")) {
    game.anims.create(marioAnims.grownFire.dies);
  }

  // SHOOT

  if (!game.anims.exists("mario-super-shoot")) {
    game.anims.create(marioAnims.grownFire.shootFireball);
  }


  if (!game.anims.exists("goomba-crush")) {
    game.anims.create({
      key: "goomba-crush",
      frames: game.anims.generateFrameNumbers("goomba", { start: 0, end: 2 }),
      frameRate: 15,
      repeat: 1,
    });
  }

  if (!game.anims.exists("coin-rotate")) {
    game.anims.create({
      key: "coin-rotate",
      frames: game.anims.generateFrameNumbers("coin", { start: 0, end: 3 }),
      frameRate: 15,
      repeat: -1,
    });
  }

  if (!game.anims.exists("fireball-explosion")) {
    game.anims.create({
      key: "fireball-explosion",
      frames: game.anims.generateFrameNumbers("fireball", { start: 0, end: 2 }),
      frameRate: 15,
      repeat: 0,
    });
  }

  if (!game.anims.exists("fire-rotation")) {
    game.anims.create({
      key: "fire-rotation",
      frames: game.anims.generateFrameNumbers("fire", { start: 0, end: 3 }),
      frameRate: 15,
      repeat: -1,
    });
  }
  
  if (!game.anims.exists("flower-bright")) {
    game.anims.create({
      key: "flower-bright",
      frames: game.anims.generateFrameNumbers("fireFlower", { start: 0, end: 3 }),
      frameRate: 15,
      repeat: -1,
    });
  }

};
