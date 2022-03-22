<script>
	import { Router, Link, Route } from "svelte-navigator";

	import About from "./pages/about/About.svelte";
	import Home from "./pages/home/Home.svelte";
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<a href="/about">about2</a>
	</nav>

	<Route path="/about" component={About}></Route>
	<Route path="/" component={Home}></Route>
</Router>

<style>
	nav {
		background-color: azure;
	}
</style>