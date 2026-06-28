LootJS.modifiers((event) => {
	event.addBlockModifier("farmersdelight:wild_onions").replaceLoot("farmersdelight:onion", "croptopia:onion")
	event.addBlockModifier("farmersdelight:wild_onions").replaceLoot("farmersdelight:wild_onions", "croptopia:onion")
	event.addBlockModifier("farmersdelight:onions").replaceLoot("farmersdelight:onion", "croptopia:onion")
	event.addBlockModifier("farm_and_charm:wild_onions").replaceLoot("farm_and_charm:onion", "croptopia:onion")
	event.addBlockModifier("farm_and_charm:wild_onions").replaceLoot("farm_and_charm:wild_onions", "croptopia:onion")
	event.addBlockModifier("farm_and_charm:onion_crop").replaceLoot("farm_and_charm:onion", "croptopia:onion")
})