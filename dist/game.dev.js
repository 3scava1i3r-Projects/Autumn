"use strict";

var createGame = require("voxel-engine-stackgl"); // browserify game.js -o builtgame.js


var init = function init() {
  createGame({
    exposeGlobal: true,
    pluginLoaders: {
      "voxel-bedrock": require("voxel-bedrock"),
      "voxel-flatland": require("voxel-flatland"),
      "voxel-land": require("voxel-land"),
      "voxel-carry": require("voxel-carry"),
      //"voxel-bucket": require("voxel-bucket"),
      "voxel-fluid": require("voxel-fluid"),
      //"voxel-inventory-creative": require("voxel-inventory-creative"),
      //"voxel-inventory-hotbar": require("voxel-inventory-hotbar"),
      //"voxel-inventory-crafting": require("voxel-inventory-crafting"),
      "voxel-pickaxe": require("voxel-pickaxe"),
      "voxel-webview": require("voxel-webview")
    },
    pluginOpts: {
      "voxel-engine-stackgl": {
        generateChunks: false
      },
      "voxel-stitch": {
        artpacks: ["ProgrammerArt-ResourcePack.zip"]
      },
      "game-shell-fps-camera": {
        position: [0, -100, 0]
      },
      "voxel-bedrock": {},
      "voxel-flatland": {
        block: "bedrock",
        onDemand: true
      },
      "voxel-land": {
        populateTrees: true,
        seed: "ggwpscvjshjcvgsjvcbuisdfvsvb"
      },
      "voxel-carry": {},
      //"voxel-bucket": { fluids: ["water", "lava"] },
      "voxel-fluid": {},
      //"voxel-inventory-creative": {},
      //"voxel-inventory-hotbar": { inventorySize: 9, wheelEnable: true },
      //"voxel-inventory-crafting": {},
      "voxel-pickaxe": {},
      "voxel-webview": {
        planeWidth: 20,
        planeHeight: 20
      }
    }
  });
};

init();