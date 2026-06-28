ServerEvents.recipes(event => {
event.remove({output: 'croptopia:wine'})
event.shapeless('croptopia:wine',
  [
    'minecraft:glass_bottle',
    '#vinery:red_wine'
  ])
})