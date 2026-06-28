ServerEvents.recipes(event => {
event.remove({output: 'starcatcher_delight:uramaki_rare'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 400,
  'experience': 1.0,
  'ingredients': [
    { 'item': 'starcatcher_delight:starcaught_fillet_rare' },
    { 'item': 'minecraft:kelp' },
    { 'tag': 'c:grain/rice'},
    { 'item': 'croptopia:avocado' },
    { 'item': 'croptopia:cucumber' }
  ],
  'recipe_book_tab': 'meals',
  'result': { 'count': 4, 'id': 'starcatcher_delight:uramaki_rare' }
})
})
