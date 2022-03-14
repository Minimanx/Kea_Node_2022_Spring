<script>
	let crewmate = { checkedIn: false };

	function toggle() {
		crewmate.checkedIn = !crewmate.checkedIn;
	}
</script>

{#if !crewmate.checkedIn}
	<button on:click={toggle}>
		Check In :)
	</button>
{/if}

{#if crewmate.checkedIn}
	<button on:click={toggle}>
		Check out :(
	</button>
{/if}