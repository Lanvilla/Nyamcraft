const BonemealEvent = Java.loadClass('net.neoforged.neoforge.event.entity.player.BonemealEvent')
const TagKey = Java.loadClass('net.minecraft.tags.TagKey')
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const crop = TagKey.create(Registries.BLOCK, ResourceLocation.parse('minecraft:bee_growable'))
const sapling = TagKey.create(Registries.BLOCK, ResourceLocation.parse('minecraft:saplings'))

const MOD_IDS = [
  'vinery:white_grape_bush',
  'vinery:red_grape_bush',
  'vinery:savanna_grape_bush_white',
  'vinery:savanna_grape_bush_red',
  'vinery:taiga_grape_bush_white',
  'vinery:taiga_grape_bush_red',
  'vinery:jungle_grape_bush_white',
  'vinery:jungle_grape_bush_red'
  ]

NativeEvents.onEvent(BonemealEvent, event => {
  if (!event.level || !event.pos) return

  const block = event.level.getBlockState(event.pos)

  if (block.is(crop) || block.is(sapling) || MOD_IDS.includes(block.block.id)) {
    event.setCanceled(true)
  }
})