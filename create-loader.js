function createLoadBlueprint(requesterChests, station, signal) {
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
            name: "long-handed-inserter",
          },
          index: 4,
        },
      ],
      entities: [
        ...requesterChests,
        {
          entity_number: 13,
          name: "train-stop",
          position: {
            x: 175,
            y: 119,
          },
          direction: 6,
          station,
          manual_trains_limit: 2,
        },
        {
          entity_number: 14,
          name: "fast-inserter",
          position: {
            x: 179.5,
            y: 119.5,
          },
        },
        {
          entity_number: 15,
          name: "logistic-chest-requester",
          request_from_buffers: true,
          position: {
            x: 179.5,
            y: 118.5,
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
          entity_number: 16,
          name: "substation",
          position: {
            x: 181,
            y: 119,
          },
        },
        {
          entity_number: 17,
          name: "long-handed-inserter",
          position: {
            x: 182.5,
            y: 118.5,
          },
        },
        {
          entity_number: 18,
          name: "long-handed-inserter",
          position: {
            x: 182.5,
            y: 119.5,
          },
        },
        {
          entity_number: 19,
          name: "long-handed-inserter",
          position: {
            x: 183.5,
            y: 118.5,
          },
        },
        {
          entity_number: 20,
          name: "long-handed-inserter",
          position: {
            x: 183.5,
            y: 119.5,
          },
        },
        {
          entity_number: 21,
          name: "long-handed-inserter",
          position: {
            x: 184.5,
            y: 118.5,
          },
        },
        {
          entity_number: 22,
          name: "long-handed-inserter",
          position: {
            x: 184.5,
            y: 119.5,
          },
        },
        {
          entity_number: 23,
          name: "long-handed-inserter",
          position: {
            x: 185.5,
            y: 118.5,
          },
        },
        {
          entity_number: 24,
          name: "long-handed-inserter",
          position: {
            x: 185.5,
            y: 119.5,
          },
        },
        {
          entity_number: 25,
          name: "long-handed-inserter",
          position: {
            x: 186.5,
            y: 118.5,
          },
        },
        {
          entity_number: 26,
          name: "long-handed-inserter",
          position: {
            x: 186.5,
            y: 119.5,
          },
        },

        {
          entity_number: 11,
          name: "rail-signal",
          position: {
            x: 173.5,
            y: 119.5,
          },
          direction: 2,
        },
        {
          entity_number: 28,
          name: "rail-signal",
          position: {
            x: 189.5,
            y: 119.5,
          },
          direction: 2,
        },
        {
          entity_number: 29,
          name: "straight-rail",
          position: {
            x: 173,
            y: 121,
          },
          direction: 2,
        },
        {
          entity_number: 29,
          name: "straight-rail",
          position: {
            x: 175,
            y: 121,
          },
          direction: 2,
        },
        {
          entity_number: 30,
          name: "straight-rail",
          position: {
            x: 177,
            y: 121,
          },
          direction: 2,
        },
        {
          entity_number: 31,
          name: "straight-rail",
          position: {
            x: 179,
            y: 121,
          },
          direction: 2,
        },
        {
          entity_number: 32,
          name: "straight-rail",
          position: {
            x: 181,
            y: 121,
          },
          direction: 2,
        },
        {
          entity_number: 33,
          name: "straight-rail",
          position: {
            x: 183,
            y: 121,
          },
          direction: 2,
        },
        {
          entity_number: 34,
          name: "straight-rail",
          position: {
            x: 185,
            y: 121,
          },
          direction: 2,
        },
        {
          entity_number: 35,
          name: "straight-rail",
          position: {
            x: 187,
            y: 121,
          },
          direction: 2,
        },
        {
          entity_number: 35,
          name: "straight-rail",
          position: {
            x: 189,
            y: 121,
          },
          direction: 2,
        },
        {
          entity_number: 36,
          name: "long-handed-inserter",
          position: {
            x: 182.5,
            y: 123.5,
          },
          direction: 4,
        },
        {
          entity_number: 37,
          name: "long-handed-inserter",
          position: {
            x: 182.5,
            y: 122.5,
          },
          direction: 4,
        },
        {
          entity_number: 38,
          name: "long-handed-inserter",
          position: {
            x: 183.5,
            y: 123.5,
          },
          direction: 4,
        },
        {
          entity_number: 39,
          name: "long-handed-inserter",
          position: {
            x: 183.5,
            y: 122.5,
          },
          direction: 4,
        },
        {
          entity_number: 40,
          name: "long-handed-inserter",
          position: {
            x: 184.5,
            y: 123.5,
          },
          direction: 4,
        },
        {
          entity_number: 41,
          name: "long-handed-inserter",
          position: {
            x: 184.5,
            y: 122.5,
          },
          direction: 4,
        },
        {
          entity_number: 42,
          name: "long-handed-inserter",
          position: {
            x: 185.5,
            y: 123.5,
          },
          direction: 4,
        },
        {
          entity_number: 43,
          name: "long-handed-inserter",
          position: {
            x: 185.5,
            y: 122.5,
          },
          direction: 4,
        },
        {
          entity_number: 44,
          name: "long-handed-inserter",
          position: {
            x: 186.5,
            y: 123.5,
          },
          direction: 4,
        },
        {
          entity_number: 45,
          name: "long-handed-inserter",
          position: {
            x: 186.5,
            y: 122.5,
          },
          direction: 4,
        },
      ],
      item: "blueprint",
      version: 281479276527617,
    },
  };
}

export { createLoadBlueprint };
