<script>
    import BoatForKeyed from "./BoatForKeyed.svelte";

	let boats = [
		{ id: 1, name: 'speedboat' },
		{ id: 2, name: 'sailboat' },
		{ id: 3, name: 'rowboat' }
	];

	function handleClick() {
		boats = boats.slice(1);
	}
    
</script>

{#if boats.length !== 0}
    <button on:click={handleClick}>
	    Remove the first boat :,(
    </button>
{/if}

{#each boats as boat (boat.id) }
	<BoatForKeyed name={boat.name} />
{/each}

{#if boats.length === 0}
    <BoatForKeyed name={"ahoy"} />
{/if}