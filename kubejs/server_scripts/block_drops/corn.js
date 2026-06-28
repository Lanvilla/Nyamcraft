LootJS.modifiers((event) => {
	event.addBlockModifier("farm_and_charm:wild_corn").replaceLoot("farm_and_charm:wild_corn", "croptopia:corn_seed")
	event.addBlockModifier("farm_and_charm:wild_corn").replaceLoot("farm_and_charm:kernels", "croptopia:corn_seed")
	event.addBlockModifier("farm_and_charm:wild_corn").replaceLoot("farm_and_charm:corn", "croptopia:corn")
	event.addBlockModifier("farm_and_charm:corn_crop").replaceLoot("farm_and_charm:kernels", "croptopia:corn_seed")
	event.addBlockModifier("farm_and_charm:corn_crop").replaceLoot("farm_and_charm:corn", "croptopia:corn")
})