// kubejs/startup_scripts/items.js

/**
 * Configuration for all custom materials.
 * Key: Material Name (Display Name)
 * Value: Object containing properties (heavily optional, defaults provided in createOre)
 *   - hardness: Block hardness (float)
 *   - resistance: Explosion resistance (float)
 *   - harvestLevel: Mining level required (0=wood, 1=stone, 2=iron, 3=diamond, 4=netherite)
 */
const globalMaterials = {
    'Winsdom Sight': { hardness: 4.0, resistance: 4.0, harvestLevel: 3 },
    'Hex Tech Steel': { hardness: 5.0, resistance: 6.0, harvestLevel: 4 },
    'Uru': { hardness: 50.0, resistance: 2000.0, harvestLevel: 5 }, // Very strong
    'Adamantium': { hardness: 45.0, resistance: 1500.0, harvestLevel: 5 },
    'Athum': { hardness: 4.0, resistance: 4.0, harvestLevel: 3 },
    'MHFD': { hardness: 4.0, resistance: 4.0, harvestLevel: 3 },
    'MSSD': { hardness: 4.0, resistance: 4.0, harvestLevel: 3 },
    'Katchim Katchim': { hardness: 10.0, resistance: 10.0, harvestLevel: 4 },
    'Kairoseki': { hardness: 6.0, resistance: 6.0, harvestLevel: 4 },
    'Wapol Metal': { hardness: 5.5, resistance: 6.0, harvestLevel: 3 }
};

onEvent('item.registry', event => {
    // Function to create ingots automatically
    function createIngot(ingotName) {
        const itemId = ingotName.toLowerCase().replace(/\s+/g, '_') + '_ingot';
        const displayName = ingotName + ' Ingot';
        const tagName = ingotName.toLowerCase().replace(/\s+/g, '_');

        event.create(itemId)
            .displayName(displayName)
            .tag(`forge:ingots/${tagName}`)
            .texture(`kubejs:item/${itemId}`);
    }

    // Manual items
    event.create('deidic_essence_extractor')
        .displayName('Deidic Essence Extractor')
        .texture('kubejs:item/deidic_essence_extractor');

    // Create all ingots using the names from the global configuration
    Object.keys(globalMaterials).forEach(ingotName => {
        createIngot(ingotName);
    });

    // Examples...
});

onEvent('block.registry', event => {
    // Function to create ores automatically
    function createOre(oreName, config) {
        // Defaults to handle if config is missing or partial
        var c = config || {};
        var hardness = c.hardness !== undefined ? c.hardness : 3.0;
        var resistance = c.resistance !== undefined ? c.resistance : 3.0;
        var harvestLevel = c.harvestLevel !== undefined ? c.harvestLevel : 2;
        var harvestTool = c.harvestTool !== undefined ? c.harvestTool : 'pickaxe';

        const oreId = oreName.toLowerCase().replace(/\s+/g, '_') + '_ore';
        const displayName = oreName + ' Ore';
        const tagName = oreName.toLowerCase().replace(/\s+/g, '_');

        event.create(oreId)
            .displayName(displayName)
            .material('stone')
            .hardness(hardness)
            .resistance(resistance)
            .harvestTool(harvestTool)
            .harvestLevel(harvestLevel)
            .requiresTool(true)
            .tag(`forge:ores/${tagName}`)
            .tag('forge:ores')
            .texture(`kubejs:block/${oreId}`);
    }

    // Create all ores using the full configuration
    Object.keys(globalMaterials).forEach(function (oreName) {
        var config = globalMaterials[oreName];
        createOre(oreName, config);
    });
});
