<script>
    let count = 0;
    let result = 0;

    function dontClick() {
        if (result !== 1){
            count += 1;
        }

        if (count === 13){
            count = 0;
            result = 1;
        }
    }

</script>

<button on:click={dontClick}>
    {result === 1 ? 'Ahoy!' : "Don't click this button"}{#each Array(count) as _}{" again"}{/each}
</button>