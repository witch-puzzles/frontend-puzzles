<script lang="ts">
  import SudokuGrid from "$lib/components/SudokuGrid.svelte";
  import PuzzleControls from "$lib/components/PuzzleControls.svelte";
  import SudokuService from "$lib/SudokuService";

  const sudokuService = new SudokuService();
  const exampleSerialSudoku =
    "3:6,0,0,0,0,0,0,0,0,0,7,5,0,0,0,0,8,9,0,0,0,0,8,9,1,0,0,0,0,1,7,5,0,0,0,0,0,0,0,0,0,6,0,9,0,4,0,0,0,0,0,0,0,0,0,0,0,5,0,4,2,6,0,5,3,0,0,0,0,0,0,0,0,0,8,0,1,0,0,0,0";

  let values: string[] = $state([]);
  let size: number = $state(1);

  const submit = () => {
    console.log("Submit puzzle...");
  };

  const reset = () => {
    console.log("Reset puzzle...");
  };

  const shuffle = () => {
    console.log("Shuffle puzzle...");
  };

  let hasRun = false;

  $effect(() => {
    if (hasRun) return;

    [size, values] = sudokuService.deserialize(exampleSerialSudoku);
    console.log(values);

    let serial = sudokuService.serialize(values);

    console.log(serial);
    console.log(serial === exampleSerialSudoku);

    hasRun = true;
  });
</script>

<div class="h-dvh flex flex-row items-center justify-center gap-12">
  <div class="flex flex-col items-center">
    <h6 class="mdc-typography--headline6">How to Play</h6>
    <p>It's Sudoku.</p>
  </div>
  <div class="flex flex-col items-center">
    <h3 class="mdc-typography--headline3">Sudoku</h3>
    <SudokuGrid {size} bind:values />
  </div>
  <PuzzleControls {submit} {reset} {shuffle} />
</div>
