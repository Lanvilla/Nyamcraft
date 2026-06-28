ServerEvents.recipes(event => {
	event.replaceInput(
		{id: 'farmersdelight:gleaming_salad_block' },
		'farmersdelight:cabbage',
		'#c:foods/cabbage'
	)
	event.replaceInput(
		{id: 'farm_and_charm:rope' },
		'farm_and_charm:barley',
		'croptopia:barley'
	)
	event.replaceInput(
		{id: 'farm_and_charm:barley_soup' },
		'farm_and_charm:barley',
		'croptopia:barley'
	)
	event.replaceInput(
		{id: 'farm_and_charm:barley_patties_with_potatoes' },
		'farm_and_charm:barley',
		'croptopia:barley'
	)
	event.replaceInput(
		{id: 'farm_and_charm:barley_soup' },
		'farm_and_charm:barley',
		'croptopia:barley'
	)
	event.replaceInput(
		{type: 'minecraft:smelting' },
		'croptopia:grape',
		'#c:fruits/grape'
	)
	event.replaceInput(
		{type: 'minecraft:smoking' },
		'croptopia:grape',
		'#c:fruits/grape'
	)
})