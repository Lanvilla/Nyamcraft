LootJS.modifiers((event) => {
	event.addBlockModifier("farmersdelight:wild_rice").replaceLoot("farmersdelight:wild_rice", "croptopia:rice_seed")
	event.addBlockModifier("farmersdelight:wild_rice").replaceLoot("farmersdelight:rice", "croptopia:rice")
	event.addBlockModifier("farmersdelight:rice_panicles").replaceLoot("farmersdelight:rice", "croptopia:rice_seed")
	event.addBlockModifier("farmersdelight:rice_panicles").replaceLoot("farmersdelight:rice_panicle", "croptopia:rice")
	event.addBlockModifier("farmersdelight:rice").replaceLoot("farmersdelight:rice", "croptopia:rice")
})