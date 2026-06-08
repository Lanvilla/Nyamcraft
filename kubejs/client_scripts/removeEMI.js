RecipeViewerEvents.removeEntries("item", event => {
	event.remove('/^grapplemod:/')

	global.removedItems.forEach((item) => {
		event.remove(item)
	})
})

