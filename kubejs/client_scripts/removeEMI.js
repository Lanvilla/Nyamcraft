RecipeViewerEvents.removeEntries("item", event => {
	event.remove('/^tinymultiblocklib:/')

	global.removedItems.forEach((item) => {
		event.remove(item)
	})
})

