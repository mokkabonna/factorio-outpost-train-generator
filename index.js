import items from "./item.js";
import { encode, decode } from "@jensforstmann/factorio-blueprint-tools";
import { createWagon } from "./create-wagon.js";
import copy from "node-clipboardy";

import _ from "lodash";
import { createBlueprintBook } from "./create-blueprint-book.js";
import { createLoadBlueprint } from "./create-loader.js";
import {
  createCombinatorForWagonItems,
  createRequesterChests,
  createWagonFilter,
} from "./utils.js";
import { createStackLoader } from "./create-stack-loader.js";
import { createTrashTrain } from "./create-trash-train.js";
import { createTrashDropoff } from "./create-trash-dropoff.js";
const entries = Object.entries(items).sort(([name1], [name2]) =>
  name1.localeCompare(name2)
);

const militarySignal = {
  type: "item",
  name: "gun-turret",
};

const constructionSignal = {
  type: "item",
  name: "express-transport-belt",
};

const baseSignal = {
  type: "item",
  name: "roboport",
};

const createVirtualSignal = (i) => ({
  type: "virtual",
  name: "signal-" + (i + 1),
});

// const ores = entries.filter(([name]) => /-ore$/.test(name));

const ignoredItems = [
  "advanced-circuit",
  "artillery-targeting-remote",
  "artillery-wagon-cannon",
  "assembling-machine-1",
  "assembling-machine-2",
  "atomic-bomb",
  "automation-science-pack",
  "battery-equipment",
  "battery-mk2-equipment",
  "battery",
  "belt-immunity-equipment",
  "blueprint-book",
  "blueprint",
  "boiler", // used for nuclear??
  "burner-inserter",
  "burner-generator",
  "burner-mining-drill",
  "cannon-shell",
  "car",
  "chemical-science-pack",
  "cluster-grenade",
  "coal",
  "coin",
  "combat-shotgun",
  "copper-cable",
  "copper-ore",
  "copper-plate",
  "copy-paste-tool",
  "crude-oil-barrel",
  "cut-paste-tool",
  "deconstruction-planner",
  "defender-capsule",
  "destroyer-capsule",
  "discharge-defense-equipment",
  "discharge-defense-remote",
  "distractor-capsule",
  "dummy-steel-axe",
  "effectivity-module-2",
  "effectivity-module",
  "electric-energy-interface",
  "electric-engine-unit",
  "electronic-circuit",
  "empty-barrel",
  "energy-shield-equipment",
  "energy-shield-mk2-equipment",
  "engine-unit",
  "exoskeleton-equipment",
  "explosive-cannon-shell",
  "explosive-rocket",
  "explosive-uranium-cannon-shell",
  "explosive-uranium-rocket",
  "explosives",
  "express-loader",
  "fast-loader",
  "fast-splitter",
  "fast-transport-belt",
  "fast-underground-belt",
  "firearm-magazine",
  "flamethrower-ammo",
  "flamethrower",
  "flying-robot-frame",
  "fusion-reactor-equipment",
  "green-wire",

  "grenade",

  "heat-interface",
  "heavy-armor",
  "heavy-oil-barrel",
  "infinity-chest", // creative mode i think
  "infinity-pipe",
  "iron-chest",
  "iron-gear-wheel",
  "iron-ore",
  "iron-plate",
  "iron-stick",
  "item-unknown",
  "item-with-inventory",
  "item-with-label",
  "item-with-tags",
  "light-armor",

  "linked-belt",
  "linked-chest",
  "loader", // not in the game actually i think
  "logistic-science-pack",
  "low-density-structure",
  "lubricant-barrel",
  "military-science-pack",
  "modular-armor",
  "night-vision-equipment",
  "personal-laser-defense-equipment",
  "personal-roboport-equipment",
  "personal-roboport-mk2-equipment",
  "petroleum-gas-barrel",
  "piercing-rounds-magazine",
  "piercing-shotgun-shell",
  "pistol",
  "plastic-bar",
  "player-port",
  "poison-capsule",
  "power-armor-mk2",
  "power-armor",
  "processing-unit",
  "production-science-pack",
  "productivity-module-2",
  "productivity-module",
  "raw-fish",
  "red-wire",
  "rocket-control-unit",
  "rocket-fuel",
  "rocket-launcher",
  "rocket-part",
  "rocket",
  "satellite",
  "selection-tool",
  "shotgun-shell",
  "shotgun",
  "simple-entity-with-force",
  "simple-entity-with-owner",
  "slowdown-capsule",
  "small-electric-pole",
  "solar-panel-equipment",
  "solid-fuel",
  "space-science-pack",
  "speed-module-2",
  "speed-module",
  "spidertron-remote",
  "spidertron-rocket-launcher-1",
  "spidertron-rocket-launcher-2",
  "spidertron-rocket-launcher-3",
  "spidertron-rocket-launcher-4",
  "spidertron",
  "splitter",
  "steam-turbine",
  "steel-furnace",
  "steel-plate",
  "stone-furnace",
  "stone",
  "submachine-gun",
  "sulfur",
  "sulfuric-acid-barrel",
  "tank-cannon-shell",
  "tank-cannon",
  "tank-flamethrower",
  "tank-machine-gun",
  "tank-rocket",
  "tank",
  "transport-belt",
  "underground-belt",
  "upgrade-planner",
  "uranium-235",
  "uranium-238",
  "uranium-cannon-shell",
  "uranium-fuel-cell",
  "uranium-ore",
  "used-up-uranium-fuel-cell",
  "utility-science-pack",
  "vehicle-machine-gun",
  "water-barrel",
  "wood",
  "wooden-chest",
  "steam-engine",
  // "stone-brick",
  // "concrete",
  // "hazard-concrete",

  // usually only in base

  "rocket-silo",
  "lab",
  "nuclear-reactor",
  "heat-exchanger",
  "heat-pipe",
  "artillery-wagon",
];

const ignoreForInefficient = [];

const restStacks = {
  "train-stop": 10,

  "oil-refinery": 10,
  "chemical-plant": 10,
  "offshore-pump": 20,
  pumpjack: 20,
  "cliff-explosives": 20,

  "steel-chest": 50,
  "small-lamp": 50,

  "storage-tank": 50,
  inserter: 50,
  pump: 50,

  "assembling-machine-3": 50,
  "arithmetic-combinator": 50,
  "decider-combinator": 50,
  "constant-combinator": 50,
  "effectivity-module-3": 50,
  "electric-furnace": 50,
  "long-handed-inserter": 50,
  "productivity-module-3": 50,

  "fast-inserter": 50,
  "power-switch": 50,
  "programmable-speaker": 50,

  "solar-panel": 50,
  accumulator: 50,
  "filter-inserter": 50,
  "stack-inserter": 50,
  centrifuge: 50,
  "stack-filter-inserter": 50,

  "stone-brick": 100,
  concrete: 100,
  "hazard-concrete": 100,
  "refined-concrete": 100 * 2,
  "refined-hazard-concrete": 100,
  "cargo-wagon": 5 * 2,
  "fluid-wagon": 5 * 2,
  locomotive: 5,
  "light-oil-barrel": 10,
};

const baseTrainStacks = {
  "nuclear-fuel": 1 * 5,
  "logistic-robot": 50 * 6,
  "construction-robot": 50 * 6,
  roboport: 10 * 10,
  "rail-signal": 50,
  "rail-chain-signal": 50,
  "logistic-chest-active-provider": 50,
  "logistic-chest-passive-provider": 50,
  "logistic-chest-storage": 50,
  "logistic-chest-buffer": 50,
  "logistic-chest-requester": 50,
  landfill: 100 * 6,
};

const setupTrainStacks = {
  pipe: 100 * 2,
  "pipe-to-ground": 50 * 2,
  "medium-electric-pole": 50 * 2,
  "big-electric-pole": 50 * 4,
  substation: 50,
  "electric-mining-drill": 50 * 2,
  "speed-module-3": 50 * 3,
  beacon: 10 * 7,
  rail: 100 * 2,
  "express-underground-belt": 50 * 4,
  "express-splitter": 50,
  "express-transport-belt": 100 * 10,
};

const militaryTrainStacks = {
  radar: 50,
  gate: 50,
  concrete: 100,

  "artillery-turret": 10,
  "repair-pack": 100 * 1,
  "land-mine": 100 * 1,
  "gun-turret": 50 * 2,
  "laser-turret": 50 * 4,
  "stone-wall": 100 * 5,
  "uranium-rounds-magazine": 200 * 2,
  "flamethrower-turret": 50,
  "artillery-shell": 1 * 20,
};

const allItemStacks = {
  ...baseTrainStacks,
  ...setupTrainStacks,
  ...restStacks,
  ...militaryTrainStacks,
};

const allIgnored = [...ignoredItems, ...ignoreForInefficient];
const filteredEntries = entries.filter(([name]) => !allIgnored.includes(name));

console.log(
  "baseTrainStacks",
  Object.keys(baseTrainStacks).length,
  calculateStacks(baseTrainStacks)
);

console.log(
  "setupTrainStacks",
  Object.keys(setupTrainStacks).length,
  calculateStacks(setupTrainStacks)
);

console.log(
  "militaryTrainStacks",
  Object.keys(militaryTrainStacks).length,
  calculateStacks(militaryTrainStacks)
);

console.log(
  "restStacks",
  Object.keys(restStacks).length,
  calculateStacks(restStacks)
);

console.log(Object.keys(allItemStacks).length, calculateStacks(allItemStacks));

function calculateStacks(mapping) {
  const mappingKeys = Object.keys(mapping);
  return filteredEntries
    .filter(([name]) => mappingKeys.includes(name))
    .reduce(
      (total, [name, { stack_size }]) =>
        total + allItemStacks[name] / stack_size,
      0
    );
}

const wagonsize = 40;

const restItems = filteredEntries.filter(([name]) =>
  Object.keys(restStacks).includes(name)
);

const itemChunks = _.chunk(restItems, wagonsize);

const wagons = itemChunks.map((chunkItems, miscWagonIndex) => {
  const trainNo = miscWagonIndex + 1;
  const wagonFilter = createWagonFilter(chunkItems, restStacks, allItemStacks);
  const loaderChunks = _.chunk(chunkItems, 20);
  const loaders = loaderChunks.map((chunkItems, loaderIndex) => {
    const topBottomChunks = _.chunk(chunkItems, 5);
    const allRequesterChests = topBottomChunks.flatMap(
      (chunkTopOrBottom, rowIndex) => {
        const posMap = {
          0: 116.5,
          1: 117.5,
          2: 124.5,
          3: 125.5,
        };
        let basePosY = posMap[rowIndex];

        const basePosX = 182.5;
        const requesterChests = chunkTopOrBottom.map(([name, item], i) => ({
          entity_number: i + 1,
          name: "logistic-chest-requester",
          request_from_buffers: true,
          position: {
            x: basePosX + i,
            y: basePosY,
          },
          request_filters: [
            {
              index: 1,
              name: item.name,
              count: item.stack_size * 3,
            },
          ],
        }));

        return requesterChests;
      }
    );

    return createLoadBlueprint(
      allRequesterChests,
      `Outpost misc ${trainNo} refill ${loaderIndex + 1}`,
      createVirtualSignal(miscWagonIndex)
    );
  });

  return {
    loaderBluePrints: loaders,
    wagonBluePrint: createWagon(
      wagonFilter,
      "Misc train " + trainNo,
      createVirtualSignal(miscWagonIndex),
      loaders.map((l, i) => `Outpost misc ${trainNo} refill ${i + 1}`),
      `Outpost misc ${trainNo} dropoff`
    ),
  };
});

const baseTrainFilter = createWagonFilter(
  filteredEntries,
  baseTrainStacks,
  allItemStacks
);

const setupFilter = createWagonFilter(
  filteredEntries,
  setupTrainStacks,
  allItemStacks
);

const militaryFilter = createWagonFilter(
  filteredEntries,
  militaryTrainStacks,
  allItemStacks
);

const baseRequesterChests = createRequesterChests(
  filteredEntries,
  baseTrainStacks
);
const setupRequesterChests = createRequesterChests(
  filteredEntries,
  setupTrainStacks
);
const militaryRequesterChests = createRequesterChests(
  filteredEntries,
  militaryTrainStacks
);

const baseWagon = createWagon(
  baseTrainFilter,
  "Base train",
  baseSignal,
  "Outpost base refill",
  "Outpost base dropoff"
);
const setupWagon = createWagon(
  setupFilter,
  "Construction train",
  constructionSignal,
  "Outpost construction refill",
  "Outpost construction dropoff"
);
const militaryWagon = createWagon(
  militaryFilter,
  "Military train",
  militarySignal,
  "Outpost military refill",
  "Outpost military dropoff"
);

const baseLoader = createStackLoader(
  baseRequesterChests,
  "Outpost base refill",
  baseSignal
);

const setupLoader = createStackLoader(
  setupRequesterChests,
  "Outpost construction refill",
  constructionSignal
);

const militaryLoader = createStackLoader(
  militaryRequesterChests,
  "Outpost military refill",
  militarySignal
);

const wagonBlueprints = wagons.map((wagon) => wagon.wagonBluePrint);
const restLoaderBlueprints = wagons.flatMap((wagon) => wagon.loaderBluePrints);

const baseItems = filteredEntries.filter(([name]) =>
  Object.keys(baseTrainStacks).includes(name)
);

const setupItems = filteredEntries.filter(([name]) =>
  Object.keys(setupTrainStacks).includes(name)
);

const militaryItems = filteredEntries.filter(([name]) =>
  Object.keys(militaryTrainStacks).includes(name)
);

const rest = filteredEntries.filter(([name]) =>
  Object.keys(restStacks).includes(name)
);

const baseCombinatorBluePrint = createCombinatorForWagonItems(
  baseItems,
  allItemStacks,
  "Base train wanted items combinator",
  baseSignal
);

const setupCombinatorBluePrint = createCombinatorForWagonItems(
  setupItems,
  allItemStacks,
  "Construction train wanted items combinator",
  constructionSignal
);

const militaryCombinatorBlueprint = createCombinatorForWagonItems(
  militaryItems,
  allItemStacks,
  "Military train wanted items combinator",
  militarySignal
);

const restCombinatorBlueprints = _.chunk(rest, wagonsize).map(
  (wagonChunk, i) => {
    return createCombinatorForWagonItems(
      wagonChunk,
      allItemStacks,
      `Misc train ${i + 1} wanted items combinator`,
      createVirtualSignal(i)
    );
  }
);

const trashTrainBluePrint = createTrashTrain();
const trashDropOffStation = createTrashDropoff();

const wl = wagonBlueprints.length;
const wrl = wl + restLoaderBlueprints.length;
const book = createBlueprintBook([
  { ...baseWagon, index: 0 },
  { ...setupWagon, index: 1 },
  { ...militaryWagon, index: 2 },
  ...wagonBlueprints.map((b, i) => ({
    ...b,
    index: i + 3,
  })),
  { ...trashTrainBluePrint, index: 3 + wl },
  {
    ...baseLoader,
    index: 6,
  },
  { ...setupLoader, index: 6 + wl },
  { ...militaryLoader, index: 7 + wl },
  ...restLoaderBlueprints.map((b, i) => ({
    ...b,
    index: i + 8 + wl,
  })),
  { ...trashDropOffStation, index: 8 + wrl },
  { ...baseCombinatorBluePrint, index: 9 + wrl },
  { ...setupCombinatorBluePrint, index: 10 + wrl },
  { ...militaryCombinatorBlueprint, index: 11 + wrl },
  ...restCombinatorBlueprints.map((b, i) => ({
    ...b,
    index: i + 12 + wrl,
  })),
]);

console.log(book.blueprint_book.blueprints.map((b) => b.index));

copy.writeSync(encode(book));
