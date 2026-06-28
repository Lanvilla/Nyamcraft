ServerEvents.recipes(event => {

	const removeByOutput = [
	"farmersdelight:dog_food",
	"croptopia:dough",
	"croptopia:coffee",
	"croptopia:butter"
	]

	removeByOutput.forEach((item) => {
		event.remove({ output: item })
	})
	global.removedItems.forEach((item) => {
		event.remove({ output: item })
	})
})