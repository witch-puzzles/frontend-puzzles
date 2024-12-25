<script lang="ts">
  import Button, { Label } from "@smui/button";
  import SegmentedButton, { Segment } from "@smui/segmented-button";
  import type Puzzle from "$lib/Puzzle";
  import { PuzzleDifficulty } from "$lib/Puzzle";

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
  <div>
    <SegmentedButton
      segments={selectedPuzzle.availableDifficulties}
      singleSelect
      bind:selected={selectedDifficulty}
    >
      {#snippet segment(segment)}
        <Segment {segment}><Label>{PuzzleDifficulty[segment]}</Label></Segment>
      {/snippet}
    </SegmentedButton>
  </div>
  <div>
    {#each puzzles as puzzle (puzzle)}
      {#if puzzle === selectedPuzzle}
        <Button variant="raised"><Label>{puzzle.name}</Label></Button>
      {:else}
        <Button onclick={() => handleSelectPuzzle(puzzle)}
          ><Label>{puzzle.name}</Label></Button
        >
      {/if}
    {/each}
  </div>
</div>
