<script>
    let count = 0;
    $: doubled = count * 2;

    function dontClickFaster() {
        count += 1;

    }
</script>

<button on:click={dontClickFaster}>
    Absolutely don't click this button!! (it's faster){#each Array(doubled) as _}{" again"}{/each}
</button>