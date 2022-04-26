<script>
import UserRegistration from "./Pages/UserRegistration/UserRegistration.svelte";
import { onMount } from "svelte";
import { Circle3 } from "svelte-loading-spinners";
import Colors from "./Pages/Colors/Colors.svelte";



let username = false;

onMount(async () => {
	const response = await fetch("/api/fetchuser");
	const { data } = await response.json();
	username = data;
});
</script>

<main>
	{#if username === false}
		<div id="loading"><Circle3 /></div>
	{:else if username}
		<Colors />
	{:else}
		<UserRegistration />
	{/if}
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	#loading {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>