<script lang="ts">
  import PuzzleSelector from "$lib/components/PuzzleSelector.svelte";
  import Button, { Label } from "@smui/button";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import SudokuPuzzle from "$lib/SudokuPuzzle";
  import type Puzzle from "$lib/Puzzle";

  const puzzles = [new SudokuPuzzle(), new SudokuPuzzle(), new SudokuPuzzle()];

  let selectedPuzzle: Puzzle = $state(puzzles[0]);

  let selectedDifficulty: PuzzleDifficulty = $state(
    puzzles[0].availableDifficulties[0],
  );
</script>

<div class="flex flex-col items-center gap-8">
  <h1 class="mdc-typography--headline3">Which puzzle do you want to solve?</h1>
  <PuzzleSelector {puzzles} bind:selectedPuzzle bind:selectedDifficulty />
  <!-- TODO: add query params for difficulty etc. -->
  <a href={`/puzzle/${selectedPuzzle.name.toLowerCase()}`}>
    <Button variant="raised"><Label>Solve!</Label></Button>
  </a>
</div>
