ServerEvents.recipes(event => {
event.remove({output: 'farm_and_charm:oat_pancake'})
event.custom({
  'type': 'farm_and_charm:roaster',
  'ingredients': [
    { 'tag': 'farm_and_charm:oat' },
    { 'tag': 'farm_and_charm:oat' },
    { 'tag': 'farm_and_charm:oat' },
    { 'tag': 'farm_and_charm:dough' },
    { 'tag': 'c:butters' },
    { 'tag': 'c:strawberries' }
  ],
  'container': { 'id': 'minecraft:bowl', 'count': 1 },
  'result': { 'id': 'farm_and_charm:oat_pancake', 'count': 3 },
  'requiresLearning': false
})
})