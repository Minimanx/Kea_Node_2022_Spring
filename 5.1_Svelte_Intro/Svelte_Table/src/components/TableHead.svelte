<script>
    export let object;
</script>

{#each Object.keys(object) as key}
    <th>
        {key.charAt(0).toUpperCase() + key.slice(1)}
    </th>
{/each}
