<script lang="ts">
  import DifficultySelector from "$lib/components/DifficultySelector.svelte";
  import LeaderboardList from "$lib/components/LeaderboardList.svelte";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import LeaderboardService from "$lib/LeaderboardService";
  import { LeaderboardDto } from "$lib/dto/Leaderboard.dto";
  import { onMount } from "svelte";

  const leaderboardService = new LeaderboardService();

  let difficulties: PuzzleDifficulty[] = $state([
    PuzzleDifficulty.Easy,
    PuzzleDifficulty.Medium,
    PuzzleDifficulty.Hard,
  ]);
  let selectedDifficulty: PuzzleDifficulty = $state(PuzzleDifficulty.Easy);

  let leaderboardToday: LeaderboardDto | null = $state(null);
  let leaderboardWeek: LeaderboardDto | null = $state(null);
  let leaderboardMonth: LeaderboardDto | null = $state(null);
  let leaderboardAllTime: LeaderboardDto | null = $state(null);

  onMount(async () => {
    leaderboardToday = await leaderboardService.getLeaderboardToday(selectedDifficulty);
    leaderboardWeek = await leaderboardService.getLeaderboardWeek(selectedDifficulty);
    leaderboardMonth = await leaderboardService.getLeaderboardMonth(selectedDifficulty);
    leaderboardAllTime = await leaderboardService.getLeaderboardAllTime(selectedDifficulty);
  });

</script>

<div class="flex flex-col items-center gap-8">
  <h3 class="mdc-typography--headline3">Sudoku Leaderboard</h3>
  <DifficultySelector {difficulties} bind:selectedDifficulty />
  <!-- if leaderboardAllTime is not null, then -->
  {#if leaderboardAllTime}
    <LeaderboardList leaderboardData={leaderboardAllTime} />
  {/if}
</div>
