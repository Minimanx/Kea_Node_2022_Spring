<script>
    import Child from "../../components/child/Child.svelte";
    import Parent from "../../components/parent/Parent.svelte";

    import { supermarket } from "../../store/supermarket";

    const parents = [{id: 1, name: "Gertrude"}, {id: 2, name: "Monica"}];

    function handleFamilyMeeting(name) {
        console.log("Family meeting time says ", name);
    }

</script>

<h1>Welcome to HOME</h1>

{#each parents as parent (parent.id)}
    <Parent onCallMeeting={handleFamilyMeeting} name={parent.name} />
{/each}

<Child onCallMeeting={handleFamilyMeeting} stereotype="cool" name={"Cool Child"} />
<Child onCallMeeting={handleFamilyMeeting} stereotype="somewhat-cool" isGirl={true} name={"Very Cool Child"} />
<Child onCallMeeting={handleFamilyMeeting} stereotype="not-cool" name={"Not Cool Child"} />

<h3>Online portal to the supermarket</h3>
<div>{JSON.stringify($supermarket, null, 4)}</div>
