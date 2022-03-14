<script>
    const boatEmojis = {
        speedboat: "🚤",
        sailboat: "⛵",
        rowboat: "🛶",
        ahoy: "👨‍✈️"
	}

	export let name;

	const emoji = boatEmojis[name];
</script>

<p>
	<span>The emoji for { name } is { emoji }</span>
</p>



<style>
	p {
		margin: 0.8em 0;
	}
	span {
		display: inline-block;
		padding: 0.2em 1em 0.3em;
		text-align: center;
		border-radius: 0.2em;
		background-color: #FFDFD3;
	}
</style>