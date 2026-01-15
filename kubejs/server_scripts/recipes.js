// Priority: 0
// Recipes Script including all custom crafting changes

onEvent('recipes', event => {

  // ==========================================
  // Creative Items
  // ==========================================

  // Vampires Need Umbrellas: Creative Umbrella
  event.shaped('vampiresneedumbrellas:creative_umbrella', [
    '  C',
    ' P ',
    'N  '
  ], {
    P: 'vampiresneedumbrellas:purple_diamond_umbrella',
    C: 'mysticalagradditions:creative_essence',
    N: 'minecraft:nether_star'
  })

  // Elemental Craft: Creative Tank
  event.remove({ output: 'elementalcraft:tank_creative' })
  event.shaped('elementalcraft:tank_creative', [
    'CTC',
    'ESE',
    'EEE'
  ], {
    S: 'ars_nouveau:creative_mana_jar',
    C: 'elementalcraft:purecrystal',
    E: 'mysticalagradditions:creative_essence',
    T: 'elementalcraft:tank'
  })

  // Ars Nouveau: Creative Mana Jar
  event.shaped('ars_nouveau:creative_mana_jar', [
    'SMN',
    'WCN',
    '   '
  ], {
    S: 'ars_nouveau:mana_jar',
    M: 'mekanism:pellet_antimatter',
    N: 'minecraft:nether_star',
    W: 'ars_nouveau:wilden_tribute',
    C: 'mysticalagradditions:creative_essence'
  })

  // Ars Nouveau: Creative Spell Book
  event.shaped('ars_nouveau:creative_spell_book', [
    'CAS',
    'W  ',
    '   '
  ], {
    S: 'ars_nouveau:creative_mana_jar',
    C: 'mysticalagradditions:creative_essence',
    A: 'ars_nouveau:archmage_spell_book',
    W: 'ars_nouveau:wilden_tribute'
  })

  // Tardis: Artron Battery Creative
  event.remove({ output: 'tardis:artron_battery_creative' })
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

  // ==========================================
  // Allthemodium Alloys
  // ==========================================

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

  // ==========================================
  // Tardis Mod
  // ==========================================

  /*   // Alembic
    event.remove({ output: 'tardis:alembic' })
    event.shaped('tardis:alembic', [
      'BBB',
      'GFG',
      'SKS'
    ], {
      F: 'ironfurnaces:copper_furnace',
      B: '#forge:ingots/brass',
      G: 'minecraft:glass_bottle',
      S: '#minecraft:logs',
      K: 'minecraft:bucket'
    }) */

  // Gallifreyan Key
  event.remove({ output: 'tardis:key_gallifreyan' })
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

  // Tardis Key
  event.remove({ output: 'tardis:tardis_key' })
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

  // Pirate Key
  event.remove({ output: 'tardis:key_pirate' })
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

  // Blank Upgrade
  event.remove({ output: 'tardis:blank_upgrade' })
  event.shaped('tardis:blank_upgrade', [
    'KKA',
    'KKA',
    'KKA'
  ], {
    A: 'allthemodium:allthemodium_nugget',
    K: '#forge:dried_kelp'
  })

  // Circuits
  event.remove({ output: 'tardis:circuits' })
  event.shaped('tardis:circuits', [
    'PPG',
    'XXG',
    'PPG'
  ], {
    P: 'tardis:circuit_paste',
    X: 'tardis:xion_crystal',
    G: '#forge:ingots/gold'
  })

  // Quantiscope Brass
  event.remove({ output: 'tardis:quantiscope_brass' })
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

  // Quantiscope Iron
  event.remove({ output: 'tardis:quantiscope_iron' })
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

  // Stattenheim Remote
  event.shaped('tardis:stattenheim_remote ', [
    'NXN',
    'CXC',
    'NXN'
  ], {
    X: 'tardis:xion_crystal',
    C: 'tardis:circuits', // Fixed typo 'tardis:circuit' to 'tardis:circuits'
    N: 'minecraft:netherite_ingot'
  })

  // Neutronic Spectrometer
  event.remove({ output: 'tardis:neutronic_spectrometer' })
  // Adiciona nova receita (linhas precisam ter exatamente 3 caracteres)
  event.shaped('tardis:neutronic_spectrometer', [
    'IXI',
    'EGE',
    'III'
  ], {
    I: 'minecraft:iron_ingot',
    X: 'tardis:xion_crystal',
    E: 'tardis:circuits',
    G: 'minecraft:glass'
  })

  // VM Strap
  event.remove({ output: 'tardis:vm_strap' })
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

  // VM Module
  event.remove({ output: 'tardis:vm_module' })
  event.shaped('tardis:vm_module', [
    'IVI',
    'DED',
    'IVI'
  ], {
    I: '#forge:ingots/iron',
    D: 'tardis:subsystem/dematerialisation_circuit',
    V: 'allthemodium:vibranium_dust',
    E: 'tardis:circuits'
  })

  // VM
  event.remove({ output: 'tardis:vm' })
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

  // Air Lock
  event.remove({ output: 'tardis:air_lock' })
  event.shaped('tardis:air_lock', [
    ' O ',
    ' E ',
    ' O '
  ], {
    E: 'tardis:circuits',
    O: '#forge:obsidian'
  })


  // ==========================================
  // Custom Items / Other
  // ==========================================

  // Besserer Teleporter
  event.remove({ output: 'bessererteleporter:teleporter' })
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

  // Player Tracking Compass
  event.remove({ output: 'playertrackingcompass:tracking_compass' })
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



  // MSSD Ingot (Blood Magic)
  event.recipes.bloodmagic.alchemytable('kubejs:mssd_ingot', [
    'kubejs:athum_ingot',
    'iceandfire:dragonsteel_ice_ingot',
    'iceandfire:dragonsteel_fire_ingot',
    'iceandfire:dragonsteel_lightning_ingot',
    'extrabotany:orichalcos',
    'mythicbotany:alfsteel_ingot',
    'astralsorcery:starmetal_ingot',
    'kubejs:hex_tech_steel_ingot'
  ], 10000000, 72000, 5)

  // Removals
  event.remove({ output: 'industrialforegoing:infinity_trident' })
  event.remove({ output: 'industrialforegoing:infinity_nuke' })

})
