<script lang="ts">
  import LeaderboardEntry from "$lib/LeaderboardEntry";
  import LeaderboardCard from "./LeaderboardCard.svelte";

  interface Props {
    entries: LeaderboardEntry[];
  }

  let { entries }: Props = $props();
</script>

<div class="container">
  {#each entries as entry}
    <LeaderboardCard {entry} />
  {/each}
</div>

<style lang="postcss">
  .container {
    @apply w-10/12 flex flex-col gap-2 shadow shadow-black;
    height: 30rem;
  }
</style>
