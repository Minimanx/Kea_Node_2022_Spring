<script>
	import Introduction from "./pages/Introduction.svelte";

	export let title;
</script>

<main>
	<h1>{title}!</h1>
	<Introduction />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

		background: rgb(214,212,244);
		background: linear-gradient(180deg, rgb(212 215 237) 420px, rgb(180 194 221) 422px, rgb(87 134 189) 427px);
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>