<script>
	let m = { x: 0, y: 0 };
</script>

<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
	Sorry, I'm slo{"o".repeat(Math.floor(m.x / 100))}wly running out of ideas
</div>

<style>
	div { width: 100%; height: 100%; }
</style>