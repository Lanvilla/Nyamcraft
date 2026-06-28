ServerEvents.recipes(event => {
event.remove({output: 'bakery:grilled_bacon_sandwich'})
event.custom({
  'type': 'farm_and_charm:stove',
  'ingredients': [
    { 'tag': 'bakery:bread' },
    { 'item': 'croptopia:bacon' },
    { 'item': 'croptopia:bacon' }
  ],
  'result': { 'id': 'bakery:grilled_bacon_sandwich', 'count': 2 },
  'experience': 0.2,
  'requiresLearning': false
})
})