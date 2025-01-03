<script lang="ts">
  import DifficultySelector from "$lib/components/DifficultySelector.svelte";
  import LeaderboardList from "$lib/components/LeaderboardList.svelte";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import LeaderboardService from "$lib/LeaderboardService";
  import { LeaderboardDto } from "$lib/dto/Leaderboard.dto";
  import { onMount } from "svelte";
  import TimeSelector from "$lib/components/TimeSelector.svelte";

  const leaderboardService = new LeaderboardService();

  let difficulties: PuzzleDifficulty[] = $state([
    PuzzleDifficulty.Easy,
    PuzzleDifficulty.Medium,
    PuzzleDifficulty.Hard,
  ]);
  let selectedDifficulty: PuzzleDifficulty = $state(PuzzleDifficulty.Easy);

  let selectedTime: string = $state("today");

  let leaderboardData: LeaderboardDto | null = $state(null);

  const selectLeaderboardByTime = async (
    periodId: string,
  ): Promise<LeaderboardDto> => {
    switch (periodId) {
      case "today":
        return leaderboardService.getLeaderboardToday(selectedDifficulty);
      case "week":
        return leaderboardService.getLeaderboardWeek(selectedDifficulty);
      case "month":
        return leaderboardService.getLeaderboardMonth(selectedDifficulty);
      case "all":
        return leaderboardService.getLeaderboardAllTime(selectedDifficulty);
      default:
        throw new Error("Invalid time period");
    }
  };

  $effect(async () => {
    leaderboardData = await selectLeaderboardByTime(selectedTime);
  });

  onMount(async () => {
    leaderboardData =
      await leaderboardService.getLeaderboardToday(selectedDifficulty);
  });
</script>

<div class="flex flex-col items-center gap-6">
  <h3 class="font-bold text-4xl mt-4">Sudoku Leaderboard</h3>
  <DifficultySelector {difficulties} bind:selectedDifficulty />
  <TimeSelector bind:selected={selectedTime} />
  <!-- if leaderboardAllTime is not null, then -->
  {#if leaderboardData}
    <LeaderboardList {leaderboardData} />
  {/if}
</div>
