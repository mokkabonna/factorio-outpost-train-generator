import _ from "lodash";
import { createUnloadCombinator } from "./create-unload-combinator.js";
function createWagonFilter(allItems, map, allItemStacks) {
  let base = 1;
  const filtered = allItems.filter(([name]) => Object.keys(map).includes(name));
  return filtered.flatMap(([name, item], itemIndex) => {
    const count = allItemStacks[name] / item.stack_size;

    const all = Array(count)
      .fill(0)
      .map((n, i) => ({
        index: base + i,
        name,
      }));

    base += count;
    return all;
  });
}

function createRequesterChests(allItems, map) {
  const filtered = allItems.filter(([name]) => Object.keys(map).includes(name));
  return _.chunk(filtered, 6).flatMap((topOrbottom, rowIndex) => {
    const posMap = {
      0: 90.5,
      1: 95.5,
    };
    let basePosY = posMap[rowIndex];
    const basePosX = 190.5;
    return topOrbottom.map(([name, item], i) => {
      return {
        entity_number: i + 100,
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
            count: item.stack_size * 10,
          },
        ],
      };
    });
  });
}

function createCombinatorForWagonItems(
  wagonChunk,
  wantedItemsStacksMap,
  label,
  iconSignal
) {
  const combinatorsForWagon = _.chunk(wagonChunk, 20).map((chunk, i) => {
    return {
      entity_number: i + 1,
      name: "constant-combinator",
      position: {
        x: 201.5 + i,
        y: 168.5,
      },
      control_behavior: {
        filters: chunk.map(([name, item], i) => {
          return {
            index: i + 1,
            count: Math.max(wantedItemsStacksMap[name], 10),
            signal: {
              type: "item",
              name: name,
            },
          };
        }),
      },
    };
  });

  return createUnloadCombinator(combinatorsForWagon, label, iconSignal);
}

export {
  createWagonFilter,
  createRequesterChests,
  createCombinatorForWagonItems,
};
