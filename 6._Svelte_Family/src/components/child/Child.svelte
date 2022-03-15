<script>
    import { supermarket } from "../../store/supermarket";

    export let name;
    export let isGirl = false;
    export let stereotype = "";
    export let onCallMeeting;

    let eatenCereal = 0;

    function eatCereal() {
        if($supermarket.cereal > 0){
            $supermarket.cereal -= 1;
            eatenCereal += 1;
        }
    }
    
    function regurgitateCereal() {
        if(eatenCereal > 0){
            $supermarket.cereal += 1;
            eatenCereal -= 1;
        }
    }
</script>

<h2 on:click={onCallMeeting(name)} class:girl={isGirl} class={stereotype || "no-stereotype"}>I am a child. My name is {name}</h2>
<h3>I, {name}, only care about the amount of cereal: {$supermarket.cereal}</h3>
<button on:click={eatCereal}>Eat cereal</button>
<button on:click={regurgitateCereal}>Regurgitate cereal</button>

<style>
    .girl {
        background-color: blueviolet;
    }

    .cool {
        background-color: rgb(54, 236, 17);
    }

    .not-cool {
        background-color: antiquewhite;
    }
</style>