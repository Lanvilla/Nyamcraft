RecipeViewerEvents.removeEntries("item", event => {
	event.remove('/^grapplemod:/')
	event.remove('/^tinymultiblocklib:/')

	global.removedItems.forEach((item) => {
		event.remove(item)
	})
})

