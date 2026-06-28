ServerEvents.recipes(event => {
event.remove({output: 'starcatcher_delight:temaki_uncommon'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 400,
  'experience': 1.0,
  'ingredients': [
    { 'item': 'starcatcher_delight:starcaught_fillet_uncommon' },
    { 'item': 'minecraft:kelp' },
    { 'item': 'minecraft:kelp' },
    { 'tag': 'c:grain/rice'},
    { 'item': 'croptopia:lettuce' }
  ],
  'recipe_book_tab': 'meals',
  'result': { 'count': 4, 'id': 'starcatcher_delight:temaki_uncommon' }
})
})
