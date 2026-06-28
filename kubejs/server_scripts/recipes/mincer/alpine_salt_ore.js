ServerEvents.recipes(event => {
event.custom({
  'type': 'farm_and_charm:mincer',
  'ingredient': { 'item': 'meadow:alpine_salt_ore' },
  'recipe_type': 'STONE',
  'result': { 'id': 'croptopia:salt', 'count': 2 }
})
})