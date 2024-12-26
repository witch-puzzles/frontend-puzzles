<script lang="ts">
  import SudokuGrid from "$lib/components/SudokuGrid.svelte";
  import PuzzleControls from "$lib/components/PuzzleControls.svelte";

  const submit = () => {
    console.log("Submit puzzle...");
  };

  const reset = () => {
    console.log("Reset puzzle...");
  };

  const shuffle = () => {
    console.log("Shuffle puzzle...");
  };
</script>

<div class="h-dvh flex flex-row items-center justify-center gap-12">
  <div class="flex flex-col items-center">
    <h6 class="mdc-typography--headline6">How to Play</h6>
    <p>It's Sudoku.</p>
  </div>
  <div class="flex flex-col items-center">
    <h3 class="mdc-typography--headline3">Sudoku</h3>
    <SudokuGrid size={3} />
  </div>
  <PuzzleControls {submit} {reset} {shuffle} />
</div>
