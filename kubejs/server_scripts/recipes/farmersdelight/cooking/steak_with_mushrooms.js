ServerEvents.recipes(event => {
event.remove({output: 'fungidelight:steak_with_mushrooms'})
event.custom({
  'type': 'farmersdelight:cooking',
  'container': { 'id': 'minecraft:bowl' },
  'cookingtime': 200,
  'experience': 1.0,
  'ingredients': [
    { 'item': 'minecraft:beef' },
    { 'item': 'minecraft:brown_mushroom' },
    { 'tag': 'c:crops/onion' },
    { 'tag': 'c:milks' }
  ],
  'recipe_book_tab': 'meals',
  'result': { 'id': 'fungidelight:steak_with_mushrooms' }
})
})