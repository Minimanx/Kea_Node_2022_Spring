<script>
	const random = Math.floor(Math.random() * 5);
</script>

{#if random === 1}
    <p>You got lucky! Ahoy!</p>
{:else}
    <p>This one is based on chance, unfortunately you're unlucky</p>
{/if}