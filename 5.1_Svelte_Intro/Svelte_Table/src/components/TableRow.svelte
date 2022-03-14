<script>
    export let object;
</script>

<tr>
    {#each Object.values(object) as value}
    <td>
        {#if value.endsWith(".jpg")}
            <img src="{value}" alt="Avatar">
        {:else}
            {value}
        {/if}
    </td>
    {/each}
</tr>
