onEvent('worldgen.add', event => {
    event.addOre(ore => {
        ore.block = "kubejs:uru_ore" // Block ID (Use [] syntax for properties)
        ore.spawnsIn.blacklist = false // Inverts spawn whitelist
        ore.spawnsIn.values = [ // List of valid block IDs or tags that the ore can spawn in
            "#minecraft:base_stone_overworld" // Default behavior - ores spawn in all stone types
        ]

        ore.biomes.blacklist = true // Inverts biome whitelist
        ore.biomes.values = [ // Biomes this ore can spawn in
            "ars_nouveau:archwood_forest" // Biome ID
        ]

        ore.clusterMinSize = 1 // Min blocks per cluster (currently ignored, will be implemented later, it's always 1)
        ore.clusterMaxSize = 2 // Max blocks per cluster
        ore.clusterCount = 1 // Clusters per chunk
        ore.minHeight = 0 // Min Y ore spawns in
        ore.maxHeight = 64 // Max Y ore spawns in
        ore.squared = true // Adds random value to X and Z between 0 and 16. Recommended to be true
        ore.chance = 5 // Spawns the ore every ~4 chunks. You usually combine this with clusterCount = 1 for rare ores
    })
    event.addOre(ore => {
        ore.block = "kubejs:adamantium_ore"
        ore.spawnsIn.values = ["#minecraft:base_stone_overworld"] // Replace Stone

        // TEMPORARY: Removed biome filter for testing
        // ore.biomes.blacklist = false // Whitelist: Only spawn in these biomes
        // ore.biomes.values = [
        //     "#icy",
        //     "#cold"
        // ]

        ore.clusterMinSize = 1
        ore.clusterMaxSize = 2
        ore.clusterCount = 1
        ore.minHeight = 0
        ore.maxHeight = 64
        ore.squared = true
        ore.chance = 5
    })
    event.addOre(ore => {
        ore.block = "kubejs:kairoseki_ore"
        ore.spawnsIn.values = ["#minecraft:base_stone_overworld"] // Replace Stone

        // TEMPORARY: Removed biome filter for testing
        // ore.biomes.blacklist = false // Whitelist: Only spawn in these biomes
        // ore.biomes.values = [
        //     "#ocean",
        //     "#wet"
        // ]

        ore.clusterMinSize = 1
        ore.clusterMaxSize = 2
        ore.clusterCount = 1
        ore.minHeight = 0
        ore.maxHeight = 64
        ore.squared = true
        ore.chance = 5
    })
    event.addOre(ore => {
        ore.block = "kubejs:katchim_katchim_ore"
        ore.spawnsIn.values = ["#minecraft:base_stone_overworld"] // Replace Stone

        // TEMPORARY: Removed biome filter for testing
        // ore.biomes.blacklist = false // Whitelist: Only spawn in these biomes
        // ore.biomes.values = [
        //     "#extreme_hills"
        // ]

        ore.clusterMinSize = 1
        ore.clusterMaxSize = 2
        ore.clusterCount = 1
        ore.minHeight = 0
        ore.maxHeight = 128
        ore.squared = true
        ore.chance = 5
    })
})
