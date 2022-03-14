<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function confused() {
		dispatch('message', {
			text: "I don't know if I understand this. Sad ahoy! :("
		});
	}
</script>

<button on:click={confused}>
	Click to not understand
</button>