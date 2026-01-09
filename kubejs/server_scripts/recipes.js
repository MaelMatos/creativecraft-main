/* function shaped(a1,a2,a3,b1,b2,b3,c1,c2,c3,result){
    event.shaped(result, [
        a1,a2,a3,
        b1,b2,b3,
        c1,c2,c3
    ],{
        a1: a1,
        a2: a2,
        a3: a3,
        b1: b1,
        b2: b2,
        b3: b3,
        c1: c1,
        c2: c2,
        c3: c3
    })
} */
function pickaxe(event, mat, handle) {
  if (typeof handle !== 'string') {
    handle = 'minecraft:stick'
  }
  const item = mat.includes(':') ? mat.split(':')[1] : mat;
  event.shaped(item + '_pickaxe', [
    'MMM',
    ' X ',
    ' X '
  ], {
    M: mat,
    X: handle
  })
}
function shovel(event, mat, handle) {
  if (typeof handle !== 'string') {
    handle = 'minecraft:stick'
  }
  const item = mat.includes(':') ? mat.split(':')[1] : mat;
  event.shaped(item + '_shovel', [
    ' M ',
    ' X ',
    ' X '
  ], {
    M: mat,
    X: handle
  })
}
function axe(event, mat, handle) {
  if (typeof handle !== 'string') {
    handle = 'minecraft:stick'
  }
  const item = mat.includes(':') ? mat.split(':')[1] : mat;
  event.shaped(item + '_axe', [
    'MM',
    'MX ',
    ' X '
  ], {
    M: mat,
    X: handle
  })
}
function hoe(event, mat, handle) {
  if (typeof handle !== 'string') {
    handle = 'minecraft:stick'
  }
  const item = mat.includes(':') ? mat.split(':')[1] : mat;
  event.shaped(item + '_hoe', [
    'MM',
    ' X ',
    ' X '
  ], {
    M: mat,
    X: handle
  })
}
function sword(event, mat, handle) {
  if (typeof handle !== 'string') {
    handle = 'minecraft:stick'
  }
  const item = mat.includes(':') ? mat.split(':')[1] : mat;
  event.shaped(item + '_sword', [
    'M',
    'M',
    'X'
  ], {
    M: mat,
    X: handle
  })
}
function tools(event, mat, handle) {
  pickaxe(event, mat, handle)
  shovel(event, mat, handle)
  axe(event, mat, handle)
  hoe(event, mat, handle)
  sword(event, mat, handle)
}

/* ---------fim definição de funções--------- */


onEvent('recipes', event => {

  //Creative Umbrella 

  event.shaped('vampiresneedumbrellas:creative_umbrella', [
    '  C',
    ' P ',
    'N  '
  ], {
    P: 'vampiresneedumbrellas:purple_diamond_umbrella',
    C: 'mysticalagradditions:creative_essence',
    N: 'minecraft:nether_star'
  })

  // ====== Creative Container ======
  event.remove({ output: 'elementalcraft:tank_creative' })
  event.shaped('elementalcraft:tank_creative', [
    'CTC',
    'ESE',
    'EEE'
  ], {
    S: 'ars_nouveau:creative_mana_jar',
    C: 'elementalcraft:purecrystal',
    E: 'mysticalagradditions:creative_essence',
    T: 'elementalcraft:tank' // <-- Supondo que o item do meio seja um tanque comum, ajuste se for outro
  })

  // Remove a receita original
  event.remove({ output: 'bessererteleporter:teleporter' })

  // Adiciona nova receita (linhas precisam ter exatamente 3 caracteres)
  event.shaped('bessererteleporter:teleporter', [
    'EEE',
    'GVG',
    'CCC'
  ], {
    V: 'allthemodium:vibranium_block',
    G: '#forge:glass_panes',
    E: '#forge:ender_pearls',
    C: '#forge:storage_blocks/coal'
  })

  // Vibranium + Allthemodium
  event.remove({ output: 'allthemodium:vibranium_allthemodium_alloy_ingot' })

  event.shaped('allthemodium:vibranium_allthemodium_alloy_ingot', [
    'MFC',
    'AVC',
    'CCC'
  ], {
    A: 'allthemodium:allthemodium_ingot',
    V: 'allthemodium:vibranium_ingot',
    C: 'mysticalagradditions:creative_essence',
    M: 'mekanism:pellet_antimatter',
    F: 'elementalcraft:fireite_ingot'
  })


  // Unobtainium + Allthemodium

  event.remove({ output: 'allthemodium:unobtainium_allthemodium_alloy_ingot' })

  event.shaped('allthemodium:unobtainium_allthemodium_alloy_ingot', [
    'MFC',
    'AUC',
    'CCC'
  ], {
    A: 'allthemodium:allthemodium_ingot',
    U: 'allthemodium:unobtainium_ingot',
    C: 'mysticalagradditions:creative_essence',
    M: 'mekanism:pellet_antimatter',
    F: 'elementalcraft:fireite_ingot'
  })
  //todo event.shaped('mekanism:creative_bin')
  //todo event.shaped('mekanism:creative_energy_cube')
  //todo 'iceandfire:creative_dragon_meal'
  //todo 'pipez:infinity_upgrade' 
  //todo 'mysticalagriculture:creative_soulium_dagger'
  //todo 'appliedenergistics2:creative_storage_cell'
  //todo 'draconicevolution:creative_capacitor'
  //todo 'bigreactors:reinforced_turbinecreativesteamgenerator'
  //todo Item.of('tconstruct:creative_slot', '{slot:"upgrades"}')Item.of('tconstruct:creative_slot', '{slot:"souls"}')
  //todo Item.of('mekanism:creative_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:"allthemodium:molten_bluelava",Amount:2147483647}}]}}')
  //todo 

  // Mana Tablet criativa (cheia)
  event.shaped(Item.of('botania:mana_tablet', '{mana:500000,creative:1b}'), [
    'ACA',
    'JTM',
    'ACA'
  ], {
    A: 'mekanism:pellet_antimatter',
    C: 'mysticalagradditions:creative_essence',
    J: 'ars_nouveau:creative_mana_jar',
    T: 'botania:mana_tablet',
    M: 'botania:creative_pool'
  })

  // Unobtainium + Vibranium

  event.remove({ output: 'allthemodium:unobtainium_vibranium_alloy_ingot' })

  event.shaped('allthemodium:unobtainium_vibranium_alloy_ingot', [
    'MFC',
    'VUC',
    'CCC'
  ], {
    V: 'allthemodium:vibranium_ingot',
    U: 'allthemodium:unobtainium_ingot',
    C: 'mysticalagradditions:creative_essence',
    M: 'mekanism:pellet_antimatter',
    F: 'elementalcraft:fireite_ingot'
  })
  //-----------------------------------


  // Alembic

  event.remove({ output: 'tardis:alembic' })
  event.shaped('tardis:alembic', [
    'BBB',
    'GFG',
    'SKS'
  ], {
    F: 'ironfurnaces:copper_furnace',
    B: '#forge:ingots/brass',
    G: '#forge:glass_bottles',
    S: '#minecraft:logs',
    K: '#forge:buckets'
  })

  // Remove a receita original
  event.remove({ output: 'tardis:key_gallifreyan' })

  // Adiciona nova receita (linhas precisam ter exatamente 3 caracteres)
  event.shaped('tardis:key_gallifreyan', [
    'XXI',
    'UPT',
    '   '
  ], {
    I: '#forge:ingots/iron',
    U: 'allthemodium:unobtainium_ingot',
    T: 'tardis:circuits',
    P: '#forge:ender_pearls',
    X: 'tardis:xion_crystal'
  })

  // Remove a receita original
  event.remove({ output: 'tardis:tardis_key' })

  // Adiciona nova receita (linhas precisam ter exatamente 3 caracteres)
  event.shaped('tardis:tardis_key', [
    'XXG',
    'UPT',
    '   '
  ], {
    G: '#forge:ingots/gold',
    U: 'allthemodium:unobtainium_ingot',
    T: 'tardis:circuits',
    P: '#forge:ender_pearls',
    X: 'tardis:xion_crystal'
  })


  // Remove a receita original
  event.remove({ output: 'tardis:key_pirate' })

  // Adiciona nova receita
  event.shaped('tardis:key_pirate', [
    'XXC',
    'UPT',
    '   '
  ], {
    C: '#forge:storage_blocks/coal',
    U: 'allthemodium:unobtainium_ingot',
    T: 'tardis:circuits',
    P: '#forge:ender_pearls',
    X: 'tardis:xion_crystal'
  })


  // Remove a receita original
  event.remove({ output: 'tardis:blank_upgrade' })

  // Adiciona nova receita
  event.shaped('tardis:blank_upgrade', [
    'KKA',
    'KKA',
    'KKA'
  ], {
    A: 'allthemodium:allthemodium_nugget',
    K: '#forge:dried_kelp'
  })


  // Remove a receita original
  event.remove({ output: 'tardis:artron_battery_creative' })

  // Adiciona nova receita
  event.shaped('tardis:artron_battery_creative', [
    'CAC',
    'XUX',
    'MAM'
  ], {
    A: 'tardis:artron_battery_high',
    U: 'allthemodium:unobtainium_ingot',
    C: 'mysticalagradditions:creative_essence',
    M: 'mekanism:pellet_antimatter',
    X: 'tardis:xion_crystal'
  })


  // Remove a receita original
  event.remove({ output: 'tardis:circuits' })

  // Adiciona nova receita (linhas precisam ter exatamente 3 caracteres)
  event.shaped('tardis:circuits', [
    'PPG',
    'XXG',
    'PPG'
  ], {
    P: 'tardis:circuit_paste',
    X: 'tardis:xion_crystal',
    G: '#forge:ingots/gold'
  })


  // Remove a receita original
  event.remove({ output: 'tardis:quantiscope_brass' })

  // Adiciona nova receita (linhas precisam ter exatamente 3 caracteres)
  event.shaped('tardis:quantiscope_brass', [
    'EBE',
    'XDX',
    'BEB'
  ], {
    B: '#forge:storage_blocks/brass',
    X: 'tardis:xion_crystal',
    E: 'tardis:circuits',
    D: '#forge:gems/diamond'
  })


  // Remove a receita original
  event.remove({ output: 'tardis:quantiscope_iron' })

  // Adiciona nova receita
  event.shaped('tardis:quantiscope_iron', [
    'EIE',
    'XYX',
    'IEI'
  ], {
    I: '#forge:storage_blocks/iron',
    X: 'tardis:xion_crystal',
    E: 'tardis:circuits',
    Y: '#forge:gems/emerald'
  })


  // Remove a receita original
  event.remove({ output: 'tardis:vm_strap' })

  // Adiciona nova receita (linhas precisam ter exatamente 3 caracteres)
  event.shaped('tardis:vm_strap', [
    'LSL',
    'IAI',
    'LSL'
  ], {
    I: '#forge:ingots/iron',
    S: '#forge:string',
    A: 'allthemodium:allthemodium_ingot',
    L: '#forge:leather'
  })


  // Remove a receita original
  event.remove({ output: 'tardis:vm_module' })

  // Adiciona nova receita
  event.shaped('tardis:vm_module', [
    'IVI',
    'DED',
    'IVI'
  ], {
    I: '#forge:ingots/iron',
    D: 'tardis:subsystem/dematerialisation_circuit',
    V: 'allthemodium:vibranium_dust',
    E: 'tardis:circuits' // ou 'tardis:exotronic_circuit' dependendo do nome correto
  })


  // Remove a receita original
  event.remove({ output: 'tardis:vm' })

  // Adiciona nova receita
  event.shaped('tardis:vm', [
    'SMN',
    'E A',
    '   '
  ], {
    S: 'tardis:vm_strap',
    M: 'tardis:vm_module',
    N: 'naturescompass:naturescompass',
    E: 'explorerscompass:explorerscompass',
    A: 'appliedenergistics2:sky_compass'
  })


  // Remove a receita original
  event.remove({ output: 'tardis:neutronic_spectrometer' })

  // Adiciona nova receita (linhas precisam ter exatamente 3 caracteres)
  event.shaped('tardis:neutronic_spectrometer', [
    'IXI',
    'EGE',
    'VIV'
  ], {
    I: '#forge:ingots/iron',
    X: 'tardis:xion_crystal',
    E: 'tardis:circuits',
    V: 'allthemodium:vibranium_ingot',
    G: '#forge:glass'
  })


  // Remove a receita original
  event.remove({ output: 'tardis:air_lock' })

  // Adiciona nova receita (linhas precisam ter exatamente 3 caracteres)
  event.shaped('tardis:air_lock', [
    ' O ',
    ' E ',
    ' O '
  ], {
    E: 'tardis:circuits',
    O: '#forge:obsidian'
  })

  event.shaped('kubejs:athum_ingot', [
    ' S ',
    'DBM',
    'AVU'
  ], {
    A: 'kubejs:adamantium_ingot',
    M: 'allthemodium:allthemodium_ingot',
    V: 'allthemodium:vibranium_ingot',
    U: 'allthemodium:unobtainium_ingot',
    S: 'appliedenergistics2:singularity',
    D: 'draconicevolution:awakened_draconium_ingot'
  })


  // Remove a receita original
  event.remove({ output: 'playertrackingcompass:tracking_compass' })

  // Adiciona nova receita (linhas precisam ter exatamente 3 caracteres)
  event.shaped('playertrackingcompass:tracking_compass', [
    'FMF',
    'VCV',
    'FMF'
  ], {
    C: 'mysticalagradditions:creative_essence',
    F: 'elementalcraft:fireite_ingot',
    M: 'mekanism:pellet_antimatter',
    V: 'allthemodium:vibranium_allthemodium_alloy_ingot'
  })
  event.recipes.bloodmagic.alchemytable('kubejs:mssd_ingot', ['kubejs:athum_ingot', 'iceandfire:dragonsteel_ice_ingot', 'iceandfire:dragonsteel_fire_ingot', 'iceandfire:dragonsteel_lightning_ingot', 'botania:gaia_ingot', 'mythicbotany:alfsteel_ingot', 'astralsorcery:starmetal_ingot', 'kubejs:hex_tech_steel_ingot'], 10000000, 72000, 5)
  /*   bloodmagic
    event.recipes.bloodmagic.alchemytable(output, input[]).syphon(int).ticks(int).upgradeLevel(int)
    event.recipes.bloodmagic.altar(output, input).upgradeLevel(int).altarSyphon(int).consumptionRate(int).drainRate(int)
    event.recipes.bloodmagic.arc(output, input, tool, addedOutput[]).consumeIngredient(boolean).outputFluid(fluid)
    event.recipes.bloodmagic.array(output, baseInput, addedInput).texture(string)
    event.recipes.bloodmagic.soulforge(output, input[]).minimumDrain(double).drain(double)
  
    mekanism
    event.recipes.mekanism.energy_conversion(input, output)
    event.recipes.mekanism.dissolution(gasOutput, gasInput, itemInput)
    event.recipes.mekanism.crystallizing(output, inputGas)
    event.recipes.mekanism.chemical_infusing(output, inputLeft, inputRight)
    event.recipes.mekanism.sawing(output, input, extraOutput)
    event.recipes.mekanism.metallurgic_infusing(output, inputItem, infusionInput, infusionAmount)
    event.recipes.mekanism.compressing(output, inputItem, inputGas)
    event.recipes.mekanism.purifying(output, inputItem, inputGas)
    event.recipes.mekanism.injecting(output, inputItem, inputGas)
    event.recipes.mekanism.combining(output, input1, input2)
    event.recipes.mekanism.crushing(output, input)
    event.recipes.mekanism.enriching(output, input)
    event.recipes.mekanism.smelting(output, input)
  
    tconstruct
    event.recipes.tconstruct.casting_table(outputItem, inputFluidId, inputFluidAmount)
    event.recipes.tconstruct.casting_basin(output, inputFluidId, inputFluidAmount)
    .coolingTime(ticks) */
})













