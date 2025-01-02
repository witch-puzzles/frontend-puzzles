<script lang="ts">
  import DifficultySelector from "$lib/components/DifficultySelector.svelte";
  import LeaderboardList from "$lib/components/LeaderboardList.svelte";
  import LeaderboardEntry from "$lib/LeaderboardEntry";
  import { PuzzleDifficulty } from "$lib/Puzzle";

  let difficulties: PuzzleDifficulty[] = $state([
    PuzzleDifficulty.Easy,
    PuzzleDifficulty.Medium,
    PuzzleDifficulty.Hard,
  ]);
  let selectedDifficulty: PuzzleDifficulty = $state(PuzzleDifficulty.Easy);

  let entries: LeaderboardEntry[] = $state([
    new LeaderboardEntry("Utku", 1, 1389),
    new LeaderboardEntry("Husamin", 2, 1028),
    new LeaderboardEntry("R2-D2", 3, 780),
    new LeaderboardEntry("R2-D2", 4, 780),
    new LeaderboardEntry("R2-D2", 5, 780),
    new LeaderboardEntry("R2-D2", 6, 780),
    new LeaderboardEntry("R2-D2", 7, 780),
    new LeaderboardEntry("R2-D2", 8, 780),
    new LeaderboardEntry("R2-D2", 9, 780),
    new LeaderboardEntry("R2-D2", 10, 780),
    new LeaderboardEntry("R2-D2", 11, 780),
    new LeaderboardEntry("R2-D2", 12, 780),
  ]);
</script>

<div class="flex flex-col items-center gap-8">
  <h3 class="mdc-typography--headline3">Sudoku Leaderboard</h3>
  <DifficultySelector {difficulties} bind:selectedDifficulty />
  <LeaderboardList {entries} />
</div>
