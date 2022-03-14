<script>
	function ahoyOnce() {
		alert('Ahoy! You only get this one, once!')
	}
</script>

<button on:click|once={ahoyOnce}>
	You only have one chance to click me
</button>