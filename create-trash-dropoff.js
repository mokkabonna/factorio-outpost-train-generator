function createTrashDropoff() {
  return {
    blueprint: {
      icons: [
        {
          signal: {
            type: "item",
            name: "train-stop",
          },
          index: 1,
        },
        {
          signal: {
            type: "item",
            name: "wood",
          },
          index: 2,
        },
        {
          signal: {
            type: "item",
            name: "logistic-chest-active-provider",
          },
          index: 3,
        },
        {
          signal: {
            type: "virtual",
            name: "signal-B",
          },
          index: 4,
        },
      ],
      entities: [
        {
          entity_number: 1,
          name: "rail-signal",
          position: {
            x: 251.5,
            y: 89.5,
          },
          direction: 2,
        },
        {
          entity_number: 2,
          name: "train-stop",
          position: {
            x: 253,
            y: 89,
          },
          direction: 6,
          station: "Outpost trash base",
          manual_trains_limit: 2,
        },
        {
          entity_number: 3,
          name: "logistic-chest-requester",
          position: {
            x: 257.5,
            y: 88.5,
          },
          request_filters: [
            {
              index: 1,
              name: "nuclear-fuel",
              count: 6,
            },
          ],
          request_from_buffers: true,
        },
        {
          entity_number: 4,
          name: "fast-inserter",
          position: {
            x: 257.5,
            y: 89.5,
          },
        },
        {
          entity_number: 5,
          name: "substation",
          position: {
            x: 259,
            y: 89,
          },
        },
        {
          entity_number: 6,
          name: "stack-inserter",
          position: {
            x: 260.5,
            y: 89.5,
          },
          direction: 4,
        },
        {
          entity_number: 7,
          name: "stack-inserter",
          position: {
            x: 261.5,
            y: 89.5,
          },
          direction: 4,
        },
        {
          entity_number: 8,
          name: "logistic-chest-active-provider",
          position: {
            x: 260.5,
            y: 88.5,
          },
        },
        {
          entity_number: 9,
          name: "logistic-chest-active-provider",
          position: {
            x: 261.5,
            y: 88.5,
          },
        },
        {
          entity_number: 10,
          name: "stack-inserter",
          position: {
            x: 262.5,
            y: 89.5,
          },
          direction: 4,
        },
        {
          entity_number: 11,
          name: "stack-inserter",
          position: {
            x: 263.5,
            y: 89.5,
          },
          direction: 4,
        },
        {
          entity_number: 12,
          name: "logistic-chest-active-provider",
          position: {
            x: 262.5,
            y: 88.5,
          },
        },
        {
          entity_number: 13,
          name: "logistic-chest-active-provider",
          position: {
            x: 263.5,
            y: 88.5,
          },
        },
        {
          entity_number: 14,
          name: "stack-inserter",
          position: {
            x: 264.5,
            y: 89.5,
          },
          direction: 4,
        },
        {
          entity_number: 15,
          name: "stack-inserter",
          position: {
            x: 265.5,
            y: 89.5,
          },
          direction: 4,
        },
        {
          entity_number: 16,
          name: "logistic-chest-active-provider",
          position: {
            x: 264.5,
            y: 88.5,
          },
        },
        {
          entity_number: 17,
          name: "logistic-chest-active-provider",
          position: {
            x: 265.5,
            y: 88.5,
          },
        },
        {
          entity_number: 18,
          name: "rail-signal",
          position: {
            x: 267.5,
            y: 89.5,
          },
          direction: 2,
        },
        {
          entity_number: 19,
          name: "straight-rail",
          position: {
            x: 251,
            y: 91,
          },
          direction: 2,
        },
        {
          entity_number: 20,
          name: "straight-rail",
          position: {
            x: 253,
            y: 91,
          },
          direction: 2,
        },
        {
          entity_number: 21,
          name: "straight-rail",
          position: {
            x: 255,
            y: 91,
          },
          direction: 2,
        },
        {
          entity_number: 22,
          name: "straight-rail",
          position: {
            x: 257,
            y: 91,
          },
          direction: 2,
        },
        {
          entity_number: 23,
          name: "straight-rail",
          position: {
            x: 259,
            y: 91,
          },
          direction: 2,
        },
        {
          entity_number: 24,
          name: "straight-rail",
          position: {
            x: 261,
            y: 91,
          },
          direction: 2,
        },
        {
          entity_number: 25,
          name: "straight-rail",
          position: {
            x: 263,
            y: 91,
          },
          direction: 2,
        },
        {
          entity_number: 26,
          name: "straight-rail",
          position: {
            x: 265,
            y: 91,
          },
          direction: 2,
        },
        {
          entity_number: 27,
          name: "straight-rail",
          position: {
            x: 267,
            y: 91,
          },
          direction: 2,
        },
        {
          entity_number: 28,
          name: "stack-inserter",
          position: {
            x: 260.5,
            y: 92.5,
          },
        },
        {
          entity_number: 29,
          name: "stack-inserter",
          position: {
            x: 261.5,
            y: 92.5,
          },
        },
        {
          entity_number: 30,
          name: "logistic-chest-active-provider",
          position: {
            x: 261.5,
            y: 93.5,
          },
        },
        {
          entity_number: 31,
          name: "logistic-chest-active-provider",
          position: {
            x: 260.5,
            y: 93.5,
          },
        },
        {
          entity_number: 32,
          name: "stack-inserter",
          position: {
            x: 262.5,
            y: 92.5,
          },
        },
        {
          entity_number: 33,
          name: "stack-inserter",
          position: {
            x: 263.5,
            y: 92.5,
          },
        },
        {
          entity_number: 34,
          name: "logistic-chest-active-provider",
          position: {
            x: 263.5,
            y: 93.5,
          },
        },
        {
          entity_number: 35,
          name: "logistic-chest-active-provider",
          position: {
            x: 262.5,
            y: 93.5,
          },
        },
        {
          entity_number: 36,
          name: "stack-inserter",
          position: {
            x: 264.5,
            y: 92.5,
          },
        },
        {
          entity_number: 37,
          name: "stack-inserter",
          position: {
            x: 265.5,
            y: 92.5,
          },
        },
        {
          entity_number: 38,
          name: "logistic-chest-active-provider",
          position: {
            x: 265.5,
            y: 93.5,
          },
        },
        {
          entity_number: 39,
          name: "logistic-chest-active-provider",
          position: {
            x: 264.5,
            y: 93.5,
          },
        },
      ],
      item: "blueprint",
      label: "Outpost trash base dropoff",
      version: 281479276527617,
    },
  };
}

export { createTrashDropoff };
