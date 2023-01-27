function createWagon(filters, label, signal, loaderStations, dropOffStation) {
  loaderStations = Array.isArray(loaderStations)
    ? loaderStations
    : [loaderStations];

  return {
    blueprint: {
      label,
      icons: [
        {
          signal: {
            type: "item",
            name: "locomotive",
          },
          index: 1,
        },
        {
          signal,
          index: 2,
        },
      ],
      entities: [
        {
          entity_number: 1,
          name: "locomotive",
          position: {
            x: 318.375,
            y: 251,
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
            x: 325.375,
            y: 251,
          },
          orientation: 0.25,
          inventory: {
            filters,
          },
        },
      ],
      schedules: [
        {
          locomotives: [1],
          schedule: [
            ...loaderStations.map((name) => ({
              station: name,
              wait_conditions: [
                {
                  compare_type: "or",
                  type: "inactivity",
                  ticks: 60,
                },
              ],
            })),
            {
              station: "Outpost depot",
            },
            {
              station: dropOffStation,
              wait_conditions: [
                {
                  compare_type: "or",
                  type: "inactivity",
                  ticks: 120,
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
          ],
        },
      ],
      item: "blueprint",
      version: 281479276527617,
    },
  };
  // return {
  //   blueprint: {
  //     label,
  //     icons: [
  //       {
  //         signal: {
  //           type: "item",
  //           name: "locomotive",
  //         },
  //         index: 1,
  //       },
  //       {
  //         signal: signal,
  //         index: 2,
  //       },
  //     ],
  //     entities: [
  //       {
  //         entity_number: 1,
  //         name: "cargo-wagon",
  //         position: {
  //           x: 73.00390625,
  //           y: 119,
  //         },
  //         orientation: 0.25,
  //         inventory: {
  //           filters,
  //         },
  //       },
  //     ],
  //     item: "blueprint",
  //     version: 281479276527617,
  //   },
  // };
}

export { createWagon };
