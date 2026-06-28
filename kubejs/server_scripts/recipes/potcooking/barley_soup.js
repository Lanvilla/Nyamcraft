ServerEvents.recipes(event => {
event.remove({output: 'farm_and_charm:barley_soup'})
event.custom({
  'type': 'farm_and_charm:pot_cooking',
  'ingredients': [
    { 'tag': 'c:crops/barley' },
    { 'tag': 'c:crops/barley' },
    { 'tag': 'c:water_bottles' },
    { 'tag': 'c:eggs' }
  ],
  'requireContainer': true,
  'container': { 'id': 'minecraft:bowl', 'count': 1 },
  'result': { 'id': 'farm_and_charm:barley_soup', 'count': 1 },
  'requiresLearning': false
})
})