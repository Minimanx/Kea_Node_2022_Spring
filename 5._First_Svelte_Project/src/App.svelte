<script>
	export let name;
	const extension = true;

	import Tree from "./pages/Tree/Tree.svelte";
	import Profile from "./pages/Profile/Profile.svelte";
	import Dog from "./pages/Dog/Dog.svelte";
</script>

<main>
	<h1>Hello {name}!</h1>
	<Profile name={name}/>
	<Tree/>
	<Dog name={name}/>
	<p>{2+2}{extension}</p>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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