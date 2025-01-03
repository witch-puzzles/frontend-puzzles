<script lang="ts">
  import { LeaderboardRegistryDto } from "$lib/dto/Leaderboard.dto";
  import { Medal, Trophy, Award } from "lucide-svelte";

  interface Props {
    leaderboardRow: LeaderboardRegistryDto;
  }

  let { leaderboardRow }: Props = $props();

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

  const rankIcon = getRankIcon(leaderboardRow.rank);
</script>

<div
  class="group grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors duration-200 items-center {leaderboardRow.rank ===
  1
    ? 'bg-gray-50'
    : ''}"
>
  <!-- Rank -->
  <div class="col-span-2 text-center">
    {#if rankIcon}
      {@const Icon = rankIcon}
      <Icon
        class="inline-block {leaderboardRow.rank === 1
          ? 'text-yellow-500'
          : leaderboardRow.rank === 2
            ? 'text-gray-400'
            : 'text-amber-600'}"
        size={20}
      />
    {:else}
      <span class="text-gray-600 font-medium">{leaderboardRow.rank}</span>
    {/if}
  </div>

  <!-- Player Name -->
  <div class="col-span-6">
    <span class="font-medium text-gray-900">{leaderboardRow.user_name}</span>
  </div>

  <!-- Score -->
  <div class="col-span-4 text-right">
    <span
      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
      {leaderboardRow.rank === 1
        ? 'bg-blue-100 text-blue-800'
        : 'bg-gray-100 text-gray-800'}
      group-hover:bg-opacity-75 transition-colors duration-200"
    >
      {leaderboardRow.solving_time.toLocaleString()}
    </span>
  </div>
</div>
