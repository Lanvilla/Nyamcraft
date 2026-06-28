ServerEvents.recipes(event => {
event.remove({output: 'brewery:dried_barley'})
event.custom({
  'type': 'farm_and_charm:drying',
  'ingredient': { 'item': 'croptopia:barley' },
  'recipe_type': 'MEAT',
  'result': { 'id': 'brewery:dried_barley', 'count': 1 }
})
})