<script>
    import io from "socket.io-client";

    let lastPersonToChangeColor;

    const socket = io();

    socket.on("changedColor", ({ data, username }) => {
        // don't use document etc in svelte, do it the svelte way
        document.body.style.backgroundColor = data;
        lastPersonToChangeColor = username;
    });

    function changeColor(event) {
        socket.emit("colorChanged", { data: event.target.value });
    }
</script>

<div>Last person to change the color: {lastPersonToChangeColor || "Not changed yet"}</div>

<input type="color" on:change={changeColor} />