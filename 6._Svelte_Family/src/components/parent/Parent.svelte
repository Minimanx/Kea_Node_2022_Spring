<script>
    export let name;
    export let onCallMeeting;
</script>

<h1 on:click={onCallMeeting(name)}>I'm the parent, {name}</h1>