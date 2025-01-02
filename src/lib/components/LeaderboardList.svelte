<script lang="ts">
  import LeaderboardEntry from "$lib/LeaderboardEntry";
  import LeaderboardCard from "./LeaderboardCard.svelte";
  import { slide } from "svelte/transition";

  interface Props {
    entries: LeaderboardEntry[];
  }

  let { entries }: Props = $props();
</script>

<div class="max-w-3xl mx-auto p-6">
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <!-- Header -->
    <div
      class="bg-gray-50 border-b border-gray-200 px-6 py-3 grid grid-cols-12 gap-4 text-sm font-semibold text-gray-600"
    >
      <div class="col-span-2 text-center">Rank</div>
      <div class="col-span-6">Player</div>
      <div class="col-span-4 text-right">Score</div>
    </div>

    <!-- Scrollable container -->
    <div
      class="divide-y divide-gray-200 max-h-[30rem] overflow-y-auto custom-scrollbar"
    >
      {#each entries as entry, i (entry.position)}
        <div transition:slide|local={{ duration: 150 }}>
          <LeaderboardCard {entry} isTop={i < 3} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .custom-scrollbar {
    @apply scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100;
  }

  :global(.scrollbar-thin::-webkit-scrollbar) {
    @apply w-2;
  }

  :global(.scrollbar-thin::-webkit-scrollbar-track) {
    @apply bg-gray-100 rounded-full;
  }

  :global(.scrollbar-thin::-webkit-scrollbar-thumb) {
    @apply bg-gray-300 rounded-full hover:bg-gray-400 transition-colors;
  }
</style>

