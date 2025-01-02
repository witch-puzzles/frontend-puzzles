<script lang="ts">
  import type { Snippet } from "svelte";
  import "../app.css";
  import TopBar from "../lib/TopBar.svelte";
  import BackgroundWrapper from "$lib/components/BackgroundWrapper.svelte";
  interface Props {
    children: Snippet<[]>;
    isLoggedIn: boolean;
  }

  let { children, isLoggedIn }: Props = $props();
</script>

<BackgroundWrapper>
  <div class="flex flex-col">
    <TopBar {isLoggedIn} />

    {@render children()}
  </div>
</BackgroundWrapper>
