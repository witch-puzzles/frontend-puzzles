<script>
	import '../app.css';
	import TopBar from '../lib/TopBar.svelte';
  
	let isLoggedIn = false;
  </script>
  
  <TopBar {isLoggedIn} />
  
  <slot />
  