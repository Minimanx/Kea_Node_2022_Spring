<script>
	let x = 0;
</script>

<input bind:value={x}>

{#if x > 1337}
	<p>Too high!</p>
{:else if Number(x) === 1337}
	<p>Ahoy!</p>
{:else}
	<p>Too low!</p>
{/if}