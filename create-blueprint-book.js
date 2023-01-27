function createBlueprintBook(blueprints) {
  return {
    blueprint_book: {
      blueprints: blueprints,
      item: "blueprint-book",
      label: "Outpost supplies",
      icons: [
        {
          signal: {
            type: "item",
            name: "train-stop",
          },
          index: 1,
        },
      ],
      active_index: 0,
      version: 281479276527617,
    },
  };
}

export { createBlueprintBook };
