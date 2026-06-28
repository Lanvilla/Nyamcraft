LootJS.modifiers((event) => {
	event.addBlockModifier("farm_and_charm:wild_barley").replaceLoot("farm_and_charm:wild_barley", "croptopia:barley_seed")
	event.addBlockModifier("farm_and_charm:wild_barley").replaceLoot("farm_and_charm:barley", "croptopia:barley")
	event.addBlockModifier("farm_and_charm:wild_barley").replaceLoot("farm_and_charm:barley_seeds", "croptopia:barley_seed")
	event.addBlockModifier("farm_and_charm:barley_crop").replaceLoot("farm_and_charm:barley_seeds", "croptopia:barley_seed")
	event.addBlockModifier("farm_and_charm:barley_crop").replaceLoot("farm_and_charm:barley", "croptopia:barley")
	event.addBlockModifier("farm_and_charm:barley_ball").replaceLoot("farm_and_charm:barley_ball", "9x croptopia:barley")
})