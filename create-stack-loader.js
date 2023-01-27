function createStackLoader(requesterChests, station, signal) {
  return {
    blueprint: {
      label: station,
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
            name: "locomotive",
          },
          index: 2,
        },
        {
          signal,
          index: 3,
        },
        {
          signal: {
            type: "item",
            name: "stack-inserter",
          },
          index: 4,
        },
      ],
      entities: [
        ...requesterChests,
        {
          entity_number: 1,
          name: "rail-signal",
          position: {
            x: 181.5,
            y: 91.5,
          },
          direction: 2,
        },
        {
          entity_number: 2,
          name: "train-stop",
          position: {
            x: 183,
            y: 91,
          },
          direction: 6,
          station,
        },
        {
          entity_number: 3,
          name: "fast-inserter",
          position: {
            x: 187.5,
            y: 91.5,
          },
        },
        {
          entity_number: 15,
          name: "logistic-chest-requester",
          request_from_buffers: true,
          position: {
            x: 187.5,
            y: 90.5,
          },
          request_filters: [
            {
              index: 1,
              name: "nuclear-fuel",
              count: 6,
            },
          ],
        },

        {
          entity_number: 5,
          name: "substation",
          position: {
            x: 189,
            y: 91,
          },
        },
        {
          entity_number: 6,
          name: "stack-inserter",
          position: {
            x: 191.5,
            y: 91.5,
          },
        },
        {
          entity_number: 7,
          name: "stack-inserter",
          position: {
            x: 190.5,
            y: 91.5,
          },
        },

        {
          entity_number: 10,
          name: "stack-inserter",
          position: {
            x: 193.5,
            y: 91.5,
          },
        },
        {
          entity_number: 11,
          name: "stack-inserter",
          position: {
            x: 192.5,
            y: 91.5,
          },
        },

        {
          entity_number: 14,
          name: "stack-inserter",
          position: {
            x: 195.5,
            y: 91.5,
          },
        },
        {
          entity_number: 15,
          name: "stack-inserter",
          position: {
            x: 194.5,
            y: 91.5,
          },
        },

        {
          entity_number: 18,
          name: "rail-signal",
          position: {
            x: 197.5,
            y: 91.5,
          },
          direction: 2,
        },
        {
          entity_number: 19,
          name: "straight-rail",
          position: {
            x: 181,
            y: 93,
          },
          direction: 2,
        },
        {
          entity_number: 20,
          name: "straight-rail",
          position: {
            x: 183,
            y: 93,
          },
          direction: 2,
        },
        {
          entity_number: 21,
          name: "straight-rail",
          position: {
            x: 185,
            y: 93,
          },
          direction: 2,
        },
        {
          entity_number: 22,
          name: "straight-rail",
          position: {
            x: 187,
            y: 93,
          },
          direction: 2,
        },
        {
          entity_number: 23,
          name: "straight-rail",
          position: {
            x: 189,
            y: 93,
          },
          direction: 2,
        },
        {
          entity_number: 24,
          name: "straight-rail",
          position: {
            x: 191,
            y: 93,
          },
          direction: 2,
        },
        {
          entity_number: 25,
          name: "straight-rail",
          position: {
            x: 193,
            y: 93,
          },
          direction: 2,
        },
        {
          entity_number: 26,
          name: "straight-rail",
          position: {
            x: 195,
            y: 93,
          },
          direction: 2,
        },
        {
          entity_number: 27,
          name: "straight-rail",
          position: {
            x: 197,
            y: 93,
          },
          direction: 2,
        },

        {
          entity_number: 30,
          name: "stack-inserter",
          position: {
            x: 191.5,
            y: 94.5,
          },
          direction: 4,
        },
        {
          entity_number: 31,
          name: "stack-inserter",
          position: {
            x: 190.5,
            y: 94.5,
          },
          direction: 4,
        },

        {
          entity_number: 34,
          name: "stack-inserter",
          position: {
            x: 193.5,
            y: 94.5,
          },
          direction: 4,
        },
        {
          entity_number: 35,
          name: "stack-inserter",
          position: {
            x: 192.5,
            y: 94.5,
          },
          direction: 4,
        },

        {
          entity_number: 38,
          name: "stack-inserter",
          position: {
            x: 195.5,
            y: 94.5,
          },
          direction: 4,
        },
        {
          entity_number: 39,
          name: "stack-inserter",
          position: {
            x: 194.5,
            y: 94.5,
          },
          direction: 4,
        },
      ],
      item: "blueprint",
      version: 281479276527617,
    },
  };
}

export { createStackLoader };
