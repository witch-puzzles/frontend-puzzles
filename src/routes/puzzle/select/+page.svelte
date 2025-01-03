<script lang="ts">
  import PuzzleSelector from "$lib/components/PuzzleSelector.svelte";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import SudokuPuzzle from "$lib/SudokuPuzzle";
  import type Puzzle from "$lib/Puzzle";
  import ContentBackgroundWrapper from "$lib/components/ContentBackgroundWrapper.svelte";
  import { goto } from "$app/navigation";
  import { sudokuState } from "$lib/SudokuState.svelte";
  import SudokuService from "$lib/SudokuService";

  const sudokuService = new SudokuService();
  const puzzles = [new SudokuPuzzle()];

  let selectedPuzzle: Puzzle = $state(puzzles[0]);

  let selectedDifficulty: PuzzleDifficulty = $state(
    puzzles[0].availableDifficulties[0],
  );

  const handleClickSolve = async () => {
    try {
      const sudoku = await sudokuService.fetchRandomSudoku(selectedDifficulty);
      sudokuState.sudoku = sudoku;
      goto("/puzzle/sudoku");
    } catch (err: any) {
      console.error("Failed to fetch random sudoku: ", err);
    }
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
