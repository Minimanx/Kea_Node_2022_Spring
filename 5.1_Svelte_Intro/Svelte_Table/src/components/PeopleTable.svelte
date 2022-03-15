<script>
    import TableRow from "./TableRow.svelte";
    import TableHead from "./TableHead.svelte";
    import faker from "@faker-js/faker"
    
    function NewPerson() {
        const person = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            image: faker.image.avatar()
        };
        persons = [...persons, person];
    }

    let sortAscDesc = 1;

    function SortPerson() {
        if(sortAscDesc === 1) {
            persons.sort((a, b) => a.name.localeCompare(b.name));
            sortAscDesc = 0;
        }else {
            persons.sort((a, b) => b.name.localeCompare(a.name));
            sortAscDesc = 1;
        }
        
        persons = persons;
    }

    let persons = [
        {
            name: faker.name.findName(),
            email: faker.internet.email(),
            image: faker.image.avatar()
        }
    ];

    let pageNumberLow = 0;
    let pageNumberHigh = 5;
    let pageNumber = 1;

    function PreviousPage() {
        if(pageNumberLow != 0)
        {
            pageNumberLow -= 5;
            pageNumberHigh -= 5;
            pageNumber -= 1;
        }
    }
    function NextPage() {
        if(persons.length > pageNumberHigh)
        {
            pageNumberLow += 5;
            pageNumberHigh += 5;
            pageNumber += 1;
        }
    }
</script>

<button on:click={NewPerson}>Add random person</button>
<br>

<table>
    <TableHead object={persons[0]} />

    {#each persons.slice(pageNumberLow, pageNumberHigh) as person (person.name)}
        <TableRow object={person}/>
    {/each}
</table>

<br>

{#if persons.length > 5}
    <div class="pagebuttons">
        <button on:click={PreviousPage}>&larr</button>
        <p> Page {pageNumber} </p>
        <button on:click={NextPage}>&rarr</button>
    </div>
{/if}


<br>
<button on:click={SortPerson}>Sort</button>

<style>
    .pagebuttons {
        display: inline-flex;
    }

    p {
        padding: 0px 5px 0px 5px;
    }
</style>