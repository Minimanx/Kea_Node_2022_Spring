<script>
    const words = ["console!", "the ", "in ", "look ", "don't ", " but "];
    let usedWords = [];

    function addWords() { 
        if(words[0] !== undefined){
            usedWords.push(words.pop());
            usedWords = usedWords;
        }
    }

    $: if(usedWords[5] === "console!"){
        console.log("Ahoy!");
    }
</script>

<button on:click={addWords}>You can click this one if you want... {#each usedWords as word}{word}{/each}</button>
