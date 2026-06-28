ServerEvents.recipes(event => {
event.remove({output: 'bakery:strawberry_jam'})
event.custom({
  'type': 'farm_and_charm:pot_cooking',
  'ingredients': [
    { 'tag': 'c:strawberries' },
    { 'item': 'minecraft:sugar' }
  ],
  'container': { 'id': 'bakery:jar' },
  'result': { 'id': 'bakery:strawberry_jam' },
  'requiresLearning': false,
  'requireContainer': true
})
})