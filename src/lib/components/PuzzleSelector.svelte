<script lang="ts">
  import Button, { Label } from "@smui/button";
  import type Puzzle from "$lib/Puzzle";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import PuzzleCard from "./PuzzleCard.svelte";
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
        <Button variant="raised"><Label>{puzzle.name}</Label></Button>
      {:else}
        <Button onclick={() => handleSelectPuzzle(puzzle)}
          ><PuzzleCard {puzzle} /></Button
        >
      {/if}
    {/each}
  </div>
</div>

<style lang="postcss">
</style>
