onEvent("lootjs", (event) => {
    event
        .addLootTypeModifier(LootType.CHEST) // Aplica a todos os baús
        .randomChance(0.25) // Chance mediana (50%)
        .thenAdd("kubejs:wapol_metal_ingot"); // Adiciona o item
    event
        .addLootTypeModifier(LootType.CHEST) // Aplica a todos os baús
        .randomChance(0.08) // Chance mediana (50%)
        .thenAdd("vampirism:vampire_book"); // Adiciona o item
});