LootJS.modifiers((event) => {
	event.addBlockModifier("farm_and_charm:strawberry_crop").replaceLoot("farm_and_charm:strawberry_seeds", "croptopia:strawberry_seed")
	event.addBlockModifier("farm_and_charm:strawberry_crop").replaceLoot("farm_and_charm:strawberry", "2x croptopia:strawberry")
})