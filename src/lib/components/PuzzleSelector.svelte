<script lang="ts">
  import type Puzzle from "$lib/Puzzle";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import DifficultySelector from "./DifficultySelector.svelte";

  interface Props {
    puzzles: Puzzle[];
    selectedPuzzle?: Puzzle;
    selectedDifficulty?: PuzzleDifficulty;
  }

  let {
    puzzles,
    selectedPuzzle = $bindable(puzzles[0]),
    selectedDifficulty = $bindable(selectedPuzzle.availableDifficulties[0]),
  }: Props = $props();

  const handleSelectPuzzle = (puzzle: Puzzle) => {
    selectedPuzzle = puzzle;
    selectedDifficulty = selectedPuzzle.availableDifficulties[0];
  };
</script>

<div class="flex flex-col items-center gap-4">
  <DifficultySelector
    difficulties={selectedPuzzle.availableDifficulties}
    bind:selectedDifficulty
  />
  <div>
    {#each puzzles as puzzle (puzzle)}
      {#if puzzle === selectedPuzzle}
        <button class="puzzle-button selected">{puzzle.name}</button>
      {:else}
        <button onclick={() => handleSelectPuzzle(puzzle)} class="puzzle-button"
          >{puzzle.name}</button
        >
      {/if}
    {/each}
  </div>
</div>

<style lang="postcss">
  .puzzle-button {
    @apply px-4 py-2 bg-white border-2 border-orange-300 text-orange-600 font-semibold rounded hover:bg-orange-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400;
  }

  .puzzle-button.selected {
    @apply px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400;
  }
</style>
