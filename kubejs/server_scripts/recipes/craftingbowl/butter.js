ServerEvents.recipes(event => {
event.remove({output: 'farm_and_charm:butter'})
event.custom({
  'type': 'farm_and_charm:crafting_bowl',
  'ingredients': [
    { 'tag': 'c:milk' },
    { 'tag': 'c:salt' }
  ],
  'result': { 'id': 'croptopia:butter', 'count': 2 },
})
})