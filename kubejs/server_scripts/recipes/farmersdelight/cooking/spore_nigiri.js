ServerEvents.recipes(event => {
event.remove({output: 'starcatcher_delight:spore_nigiri'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 400,
  'experience': 1.0,
  'ingredients': [
    { 'item': 'starcatcher:sporefish' },
    { 'tag': 'c:grain/rice'},
    { 'item': 'croptopia:salt' }
  ],
  'recipe_book_tab': 'meals',
  'result': {'id': 'starcatcher_delight:spore_nigiri' }
})
})