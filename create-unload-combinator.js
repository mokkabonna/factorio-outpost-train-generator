function createUnloadCombinator(entities, label, iconSignal, num) {
  return {
    blueprint: {
      label,
      icons: [
        {
          signal: {
            type: "item",
            name: "constant-combinator",
          },
          index: 1,
        },
        {
          signal: iconSignal,
          index: 2,
        },
      ],
      entities,
      item: "blueprint",
      version: 281479276527617,
    },
  };
}

export { createUnloadCombinator };
