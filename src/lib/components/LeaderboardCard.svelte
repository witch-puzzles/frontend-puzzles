<script lang="ts">
  import LeaderboardEntry from "$lib/LeaderboardEntry";
  import { Medal, Trophy, Award } from "lucide-svelte";

  interface Props {
    entry: LeaderboardEntry;
    isTop: boolean;
  }

  let { entry, isTop }: Props = $props();

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return Trophy;
      case 2:
        return Medal;
      case 3:
        return Award;
      default:
        return null;
    }
  };

  const rankIcon = getRankIcon(entry.position);
</script>

<div
  class="group grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors duration-200 items-center {isTop
    ? 'bg-gray-50'
    : ''}"
>
  <!-- Rank -->
  <div class="col-span-2 text-center">
    {#if rankIcon}
      {@const Icon = rankIcon}
      <Icon
        class="inline-block {entry.position === 1
          ? 'text-yellow-500'
          : entry.position === 2
            ? 'text-gray-400'
            : 'text-amber-600'}"
        size={20}
      />
    {:else}
      <span class="text-gray-600 font-medium">{entry.position}</span>
    {/if}
  </div>

  <!-- Player Name -->
  <div class="col-span-6">
    <span class="font-medium text-gray-900">{entry.name}</span>
  </div>

  <!-- Score -->
  <div class="col-span-4 text-right">
    <span
      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
      {isTop ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}
      group-hover:bg-opacity-75 transition-colors duration-200"
    >
      {entry.score.toLocaleString()}
    </span>
  </div>
</div>

