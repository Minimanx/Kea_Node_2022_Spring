<script>
	let boats = [
        { name: "The Black Pearl", funFact: "So so fast.", link: "https://i.imgur.com/9xylmnb.png" },
        { name: "The Flying Dutchman", funFact: "Not actually flying!", link: "https://i.imgur.com/8zNPncN.png" },
        { name: "Titanic", funFact: "Has avoided almost all icebergs it has encountered.", link: "https://i.imgur.com/RAWnS7p.jpeg"}
	];
</script>

<h1>Famous boats</h1>

<ul>
	{#each boats as { name, funFact, link }, i}
		<li>
            <a target="_blank" href="{link}">
			{i + 1}: {name}
		    </a>
             - Fun fact: {funFact}
        </li>
	{/each}
</ul>