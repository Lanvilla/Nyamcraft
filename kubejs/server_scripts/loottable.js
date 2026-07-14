LootJS.lootTables(event => {
  event.create("nv:storagehouse")
  .createPool(pool => {
    pool.addEntry(LootEntry.of("minecraft:baked_potato").setCount([3, 8]))
    pool.addEntry(LootEntry.of("minecraft:bread").setCount([3, 8]))
  })
  .createPool(pool => {
    pool.addEntry(LootEntry.of("minecraft:cooked_mutton").withWeight(4).setCount([3, 5]))
    pool.addEntry(LootEntry.of("minecraft:cooked_chicken").withWeight(4).setCount([3, 5]))
    pool.addEntry(LootEntry.of("minecraft:cooked_porkchop").withWeight(2).setCount([2, 4]))
    pool.addEntry(LootEntry.of("minecraft:cooked_beef").withWeight(2).setCount([2, 4]))
  })
  event.create("nv:minersguild")
  .createPool(pool => {
    pool.addEntry(LootEntry.of("minecraft:diamond").setCount([1, 2]))
    pool.addEntry(LootEntry.empty().withWeight(3))    
  })
  .createPool(pool => {
    pool.addEntry(LootEntry.of("minecraft:emerald").withWeight(2).setCount([1, 2]))
    pool.addEntry(LootEntry.empty().withWeight(2))    
  })
  .createPool(pool => {
    pool.addEntry(LootEntry.of("minecraft:gold_ingot").withWeight(4).setCount([2, 4]))
    pool.addEntry(LootEntry.of("minecraft:iron_ingot").withWeight(6).setCount([3, 9]))
  })
  .createPool(pool => {
    pool.addEntry(LootEntry.of("minecraft:cobblestone").withWeight(24).setCount([9, 16]))
    pool.addEntry(LootEntry.of("minecraft:cobbled_deepslate").withWeight(18).setCount([6, 16]))
    pool.addEntry(LootEntry.of("minecraft:mossy_cobblestone").withWeight(12).setCount([3, 16]))
  })
})