<script lang="ts">
  import PuzzleSelector from "$lib/components/PuzzleSelector.svelte";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import SudokuPuzzle from "$lib/SudokuPuzzle";
  import type Puzzle from "$lib/Puzzle";
  import ContentBackgroundWrapper from "$lib/components/ContentBackgroundWrapper.svelte";
  import { goto } from "$app/navigation";

  const puzzles = [new SudokuPuzzle()];

  let selectedPuzzle: Puzzle = $state(puzzles[0]);

  let selectedDifficulty: PuzzleDifficulty = $state(
    puzzles[0].availableDifficulties[0],
  );

  const handleClickSolve = async () => {
    const url = `http://localhost:3030/v1/sudoku/get/random/${selectedDifficulty}`;
    console.log(url);
    const res = await fetch(url).then((res) => res.json());
    console.log(res);

    goto("/puzzle/sudoku");
  };
</script>

<div class="h-full flex items-center justif-center">
  <ContentBackgroundWrapper>
    <div class="flex flex-col items-center gap-8">
      <h3 class="header">Which puzzle would you like to solve?</h3>
      <PuzzleSelector {puzzles} bind:selectedPuzzle bind:selectedDifficulty />
      <!-- TODO: add query params for difficulty etc. -->
      <button
        class="px-4 py-2 bg-white border-2 border-orange-300 text-orange-600 font-semibold rounded hover:bg-orange-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        onclick={handleClickSolve}>Solve!</button
      >
    </div>
  </ContentBackgroundWrapper>
</div>

<style lang="postcss">
  .header {
    @apply text-3xl font-bold text-orange-50;
  }
</style>
