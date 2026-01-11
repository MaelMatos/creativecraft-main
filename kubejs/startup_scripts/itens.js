/**
 * Configuration for all custom materials.
 * Key: Material Name (Display Name)
 * Value: Object containing properties (heavily optional, defaults provided in createOre)
 * 
 *   - hardness: Block hardness (float) - How long it takes to mine
 *       Examples:
 *       - 3.0: Diamond Ore
 *       - 50.0: Obsidian, Netherite Block
 *       - -1.0: Bedrock (Indestructible)
 * 
 *   - resistance: Explosion resistance (float)
 *       Examples:
 *       - 3.0: Diamond Ore
 *       - 1200.0: Obsidian, Netherite Block
 *       - 3600000.0: Bedrock
 * 
 *   - harvestLevel: Mining level required
 *       - 0: Wood
 *       - 1: Stone
 *       - 2: Iron
 *       - 3: Diamond
 *       - 4: Netherite
 */

// Materials that generate both Ingots and Ores
const oreMaterials = {
    //'Winsdom Sight': { hardness: 4.0, resistance: 4.0, harvestLevel: 3 },
    'Uru': { hardness: 50.0, resistance: 2000.0, harvestLevel: 7 }, // Very strong
    'Adamantium': { hardness: 45.0, resistance: 1500.0, harvestLevel: 6 },
    'Katchim Katchim': { hardness: 10.0, resistance: 10.0, harvestLevel: 5 },
    'Kairoseki': { hardness: 6.0, resistance: 6.0, harvestLevel: 2 },
};

// Materials that ONLY generate Ingots (no ores)
const ingotOnlyMaterials = [
    'MSSD',
    'MHFD',
    'Hex Tech Steel',
    'Athum',
    'Wapol Metal'
];

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

    // Create ingots for Ore Materials
    Object.keys(oreMaterials).forEach(ingotName => {
        createIngot(ingotName);
    });

    // Create ingots for Ingot-Only Materials
    ingotOnlyMaterials.forEach(ingotName => {
        createIngot(ingotName);
    });
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

        const builder = event.create(oreId)
            .displayName(displayName)
            .material('stone')
            .hardness(hardness)
            .resistance(resistance)
            .harvestTool(harvestTool, harvestLevel) // Explicitly set tool and level
            .requiresTool(true)
            .tag(`forge:ores/${tagName}`)
            .tag('forge:ores')
            .textureAll(`kubejs:block/${oreId}`);

        if (harvestLevel === 1) builder.tag('minecraft:needs_stone_tool');
        else if (harvestLevel === 2) builder.tag('minecraft:needs_iron_tool');
        else if (harvestLevel === 3) builder.tag('minecraft:needs_diamond_tool');
        else if (harvestLevel === 4) builder.tag('minecraft:needs_netherite_tool');
        else if (harvestLevel === 5) builder.tag('forge:needs_allthemodium_tool');
        else if (harvestLevel === 6) builder.tag('forge:needs_vibranium_tool');
        else if (harvestLevel >= 7) builder.tag('forge:needs_unobtainium_tool');
    }

    // Create ores ONLY for the oreMaterials list
    Object.keys(oreMaterials).forEach(function (oreName) {
        var config = oreMaterials[oreName];
        createOre(oreName, config);
    });
});
