<script>
    import ComponentEvents from "../eventComponents/ComponentEvents.svelte";
import DomEvents from "../eventComponents/DOMEvents.svelte";
import EventForwarding from "../eventComponents/EventForwarding.svelte";
import EventModifier from "../eventComponents/EventModifier.svelte";
import InlineHandler from "../eventComponents/InlineHandler.svelte";
    import DynAttributes from "../introComponents/DynAttributes.svelte";
    import HelloWorld from "../introComponents/HelloWorld.svelte";
    import HtmLtags from "../introComponents/HTMLtags.svelte";
    import Styling from "../introComponents/StylingAndNested.svelte";
    import EachBlock from "../logicComponents/EachBlock.svelte";
    import ElseBlock from "../logicComponents/ElseBlock.svelte";
    import ElseIfBlock from "../logicComponents/ElseIfBlock.svelte";
    import IfBlock from "../logicComponents/IfBlock.svelte";
    import KeyedEachBlock from "../logicComponents/KeyedEachBlock.svelte";
    import DeclaringProp from "../propsComponents/DeclaringProp.svelte";
    import DefaultProp from "../propsComponents/DefaultProp.svelte";
    import SpreadProp from "../propsComponents/SpreadProp.svelte";
    import Assignments from "../reactiveComponents/Assignments.svelte";
    import Declarations from "../reactiveComponents/Declarations.svelte";
    import Statements from "../reactiveComponents/Statements.svelte";

    setTimeout(() => {
        lastRule = "It changed! Ahoy!";
    }, 120000)
    let lastRule = "This is the last rule, but beware! It could change at any moment";

    const crewmateCaptain = {
		name: "CoolCap",
		rank: "Captain",
		height: "181cm",
		country: "Sweden",
		funFact: "Has avoided almost all icebergs he has encountered."
	};

    function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<HelloWorld />
<DynAttributes />
<Styling />
<HtmLtags />
<Assignments />
<br>
<Declarations />
<br>
<Statements />
<DeclaringProp lastRule={lastRule} />
<DefaultProp />
<DefaultProp basicsCovered={"Let's go!"} />
<SpreadProp name={crewmateCaptain.name} rank={crewmateCaptain.rank} height={crewmateCaptain.height} country={crewmateCaptain.country} funFact={crewmateCaptain.funFact} />
<br>
<IfBlock />
<ElseBlock />
<ElseIfBlock />
<EachBlock />
<br>
<KeyedEachBlock />
<DomEvents />
<InlineHandler />
<EventModifier />
<br>
<ComponentEvents on:message={handleMessage} />
<EventForwarding on:message={handleMessage} />