RecipeViewerEvents.removeEntries("item", event => {
	event.remove(/^grapplemod:/)
	//event.remove(Ingredient.of('grapplemod:grappling_hook').strongNBT())

	global.removedItems.forEach((item) => {
		event.remove(item)
	})
})

