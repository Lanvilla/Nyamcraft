ServerEvents.recipes(event => {
	event.remove('grapplemod:ender_staff')
	event.remove('grapplemod:forcefield' )
	event.remove('grapplemod:rocket')
	event.remove({id: 'grapplemod:base_upgrade_item'})
	event.remove('grapplemod:long_fall_boots')
	event.remove({type: 'grapplemod:hook_upgrade'})
	event.remove({id:/^grapplemod:smithing/})
	event.remove({output:'create:andesite_alloy' , input:'minecraft:iron_nugget'})
	event.remove({input:'waystones:warp_stone'})
	event.remove({output:'waystones:warp_plate'})
	event.remove({output:'waystones:dormant_shard'})

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