// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

// Geração de minérios no mundo
/* onEvent('worldgen.add', event => {
    // Função para gerar minérios automaticamente
    function generateOre(oreName, options = {}) {
        const {
            veinSize = 8,
            minHeight = 0,
            maxHeight = 64,
            spawnChance = 1.0,
            dimension = 'minecraft:overworld'
        } = options;
        
        const oreId = oreName.toLowerCase().replace(/\s+/g, '_') + '_ore';
        
        event.addOre((ore) => {
            ore.id = `kubejs:${oreId}`;
            ore.addTarget(`#minecraft:stone_ore_replaceables`, `kubejs:${oreId}`);
            ore.addTarget(`#minecraft:deepslate_ore_replaceables`, `kubejs:${oreId}`);
            ore.size(veinSize);
            ore.count(1);
            ore.squared();
            ore.minHeight(minHeight);
            ore.maxHeight(maxHeight);
            ore.chance(spawnChance);
        });
    }
    
    // Array com os nomes dos minérios (deve ser o mesmo do arquivo itens.js)
    const oreNames = [
        'Winsdom Sight',
        'Hex Tech Steel',
        'Uru',
        'Adamantium',
        'Athum',
        'MHFD',
        'MSSD',
        'Katchim Katchim',
        'Kairoseki',
        'Wapol Metal'
    ];
    
    // Gerar todos os minérios no mundo
    oreNames.forEach(oreName => {
        generateOre(oreName);
    });
}) */