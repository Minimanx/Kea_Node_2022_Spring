<script>
	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

    let xCheck1 = false;
    let xCheck2 = false;

    $: if(m.x > 890 && m.x < 910){
        xCheck1 = true;
    }
    $: if(m.x > 1040 && m.x < 1050){
        xCheck2 = true;
    }
</script>

<div on:mousemove={handleMousemove}>
	Scan: ||| ||||||| || ||||| | ||||||||||| || <br>
    {#if xCheck1 === true && xCheck2 === true}
        Ahoy!
    {/if}
</div>

<style>
	div { width: 100%; height: 100%; }
</style>