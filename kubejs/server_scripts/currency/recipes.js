ServerEvents.recipes(event => {
  event.shaped('currency:currencyblock',
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {  A: 'currency:currencycoin'}
  )

  event.shapeless('9x currency:currencycoin',
    [
      'currency:currencyblock'
    ])

event.remove({output: 'waystones:warp_stone'})
  event.shaped('waystones:warp_stone',
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'minecraft:ender_pearl',
      B: 'minecraft:amethyst_shard',
      C: 'currency:currencycoin'
    }
  )
})