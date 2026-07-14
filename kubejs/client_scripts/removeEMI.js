RecipeViewerEvents.removeEntries("item", event => {
	event.remove('/^tinymultiblocklib:/')

	event.remove('farmersdelight:dog_food')
	event.remove('croptopia:dough')
	event.remove('croptopia:coffee')
	event.remove('croptopia:butter')

	global.removedItems.forEach((item) => {
		event.remove(item)
	})
})

