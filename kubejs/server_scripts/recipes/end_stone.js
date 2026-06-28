ServerEvents.recipes(event => {
  event.recipes.create.compacting(Item.of('minecraft:end_stone'), [
    SizedIngredient.of('minecraft:glowstone_dust', 2),
    SizedIngredient.of('waystones:warp_dust', 2),
    Ingredient.of('minecraft:blaze_powder'),
    Ingredient.of('minecraft:quartz')
  ]).heated()
})