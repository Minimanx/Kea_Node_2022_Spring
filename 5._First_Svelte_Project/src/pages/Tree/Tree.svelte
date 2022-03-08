<script>
    import Apple from "./Apple.svelte";

    let apples = ['🍏', '🍎', '🍎', '🍏', '🍎', '🍏'];
    let apple;

    function pickAnApple() {
        apple = apples.pop();
        apples = apples;
        //apple = apples[Math.floor(Math.random() * 6)];
    }
</script>

<div id="tree">
    <h1>Tree</h1>
    {#each apples as a}
        <Apple apple={a}/>
    {/each}
    <button on:click={pickAnApple}>Pick an apple</button>
    <Apple apple={apple}/>
</div>

<div id="trunk">

</div>

<style>
    #tree {
        background-color: rgb(3, 212, 3);
    }

    #trunk {
        background-color: burlywood;
        height: 120px;
        width: 40px;
        margin:auto;
    }
</style>