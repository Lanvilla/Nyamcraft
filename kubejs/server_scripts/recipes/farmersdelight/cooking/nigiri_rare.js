ServerEvents.recipes(event => {
event.remove({output: 'starcatcher_delight:nigiri_rare'})
event.custom({
  'type': 'farmersdelight:cooking',
  'cookingtime': 400,
  'experience': 1.0,
  'ingredients': [
    { 'item': 'starcatcher_delight:starcaught_fillet_rare' },
    { 'tag': 'c:grain/rice'}
  ],
  'recipe_book_tab': 'meals',
  'result': { 'count': 4, 'id': 'starcatcher_delight:nigiri_rare' }
})
})
