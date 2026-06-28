ServerEvents.recipes(event => {
event.remove({output: 'farm_and_charm:chicken_wrapped_in_bacon'})
event.custom({
  'type': 'farm_and_charm:roaster',
  'ingredients': [
    { 'item': 'croptopia:bacon' },
    { 'item': 'farm_and_charm:chicken_parts' },
    { 'tag': 'farm_and_charm:pasta' },
    { 'item': 'croptopia:butter' }
  ],
  'container': { 'id': 'minecraft:bowl', 'count': 1 },
  'result': { 'id': 'farm_and_charm:chicken_wrapped_in_bacon', 'count': 1 },
  'requiresLearning': false
})
})