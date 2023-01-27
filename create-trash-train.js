function createTrashTrain() {
  return {
    blueprint: {
      icons: [
        {
          signal: {
            type: "item",
            name: "locomotive",
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
      ],
      entities: [
        {
          entity_number: 1,
          name: "locomotive",
          position: {
            x: 275.28125,
            y: 91,
          },
          orientation: 0.75,
          items: {
            "nuclear-fuel": 3,
          },
        },
        {
          entity_number: 2,
          name: "cargo-wagon",
          position: {
            x: 282.28125,
            y: 91,
          },
          orientation: 0.25,
          inventory: null,
        },
      ],
      schedules: [
        {
          locomotives: [1],
          schedule: [
            {
              station: "Outpost trash base",
              wait_conditions: [
                {
                  compare_type: "or",
                  type: "inactivity",
                  ticks: 120,
                },
                {
                  compare_type: "or",
                  type: "empty",
                },
              ],
            },
            {
              station: "Depot",
              wait_conditions: [
                {
                  compare_type: "or",
                  type: "inactivity",
                  ticks: 60,
                },
              ],
            },
            {
              station: "Outpost trash",
              wait_conditions: [
                {
                  compare_type: "or",
                  type: "inactivity",
                  ticks: 120,
                },
                {
                  compare_type: "or",
                  type: "full",
                },
              ],
            },
            {
              station: "Depot",
            },
          ],
        },
      ],
      item: "blueprint",
      label: "Trash train",
      version: 281479276527617,
    },
  };
}

export { createTrashTrain };
