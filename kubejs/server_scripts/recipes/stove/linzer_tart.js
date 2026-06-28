ServerEvents.recipes(event => {
event.remove({output: 'bakery:linzer_tart'})
event.custom({
  'type': 'farm_and_charm:stove',
  'ingredients': [
    { 'tag': 'c:strawberries' },
    { 'item': 'bakery:sweet_dough' },
    { 'item': 'minecraft:sugar' }
  ],
  'result': { 'id': 'bakery:linzer_tart', 'count': 1 },
  'experience': 0.2,
  'requiresLearning': false
})
})