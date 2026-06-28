ServerEvents.recipes(event => {
event.remove({output: 'starcatcher_delight:hosomaki_epic'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 400,
  'experience': 1.0,
  'ingredients': [
    { 'item': 'starcatcher_delight:starcaught_fillet_epic' },
    { 'item': 'minecraft:kelp' },
    { 'tag': 'c:grain/rice'}
  ],
  'recipe_book_tab': 'meals',
  'result': { 'count': 4, 'id': 'starcatcher_delight:hosomaki_epic' }
})
})