ServerEvents.recipes(event => {
event.remove({output: 'farm_and_charm:bacon_with_eggs'})
event.custom({
  'type': 'farm_and_charm:roaster',
  'ingredients': [
    { 'item': 'croptopia:bacon' },
    { 'item': 'croptopia:bacon' },
    { 'tag': 'c:eggs' },
    { 'tag': 'c:eggs' },
    { 'item': 'croptopia:butter' }
  ],
  'container': { 'id': 'minecraft:bowl', 'count': 1 },
  'result': { 'id': 'farm_and_charm:bacon_with_eggs', 'count': 3 },
  'requiresLearning': false
})
})