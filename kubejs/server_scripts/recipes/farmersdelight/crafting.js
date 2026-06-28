ServerEvents.recipes(event => {
	event.replaceInput(
		{id: 'farmersdelight:bacon_sandwich' },
		'farmersdelight:cooked_bacon',
		'#c:cooked_bacon'
	)
	event.replaceInput(
		{id: 'farmersdelight:bacon_and_eggs' },
		'farmersdelight:cooked_bacon',
		'#c:cooked_bacon'
	)
})