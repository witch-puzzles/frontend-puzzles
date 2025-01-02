<script lang="ts">
  import SudokuGrid from "$lib/components/SudokuGrid.svelte";
  import PuzzleControls from "$lib/components/PuzzleControls.svelte";
  import SudokuService from "$lib/SudokuService";
  import BackgroundWrapper from "$lib/components/BackgroundWrapper.svelte";
  import ContentBackgroundWrapper from "$lib/components/ContentBackgroundWrapper.svelte";

  const sudokuService = new SudokuService();
  const exampleSerialSudoku =
    "3:6,0,0,0,0,0,0,0,0,0,7,5,0,0,0,0,8,9,0,0,0,0,8,9,1,0,0,0,0,1,7,5,0,0,0,0,0,0,0,0,0,6,0,9,0,4,0,0,0,0,0,0,0,0,0,0,0,5,0,4,2,6,0,5,3,0,0,0,0,0,0,0,0,0,8,0,1,0,0,0,0";

  let values: string[] = $state([]);
  let initialValues: string[] = $state([]);
  let size: number = $state(1);

  const submit = () => {
    console.log("Submit puzzle...");
  };

  const reset = () => {
    console.log("Reset puzzle...");
    values = initialValues;
  };

  const shuffle = () => {
    console.log("Shuffle puzzle...");
  };

  let hasRun = false;

  $effect(() => {
    if (hasRun) return;

    [size, initialValues] = sudokuService.deserialize(exampleSerialSudoku);
    values = Array.from(initialValues);
    console.log(initialValues);

    let serial = sudokuService.serialize(values);

    console.log(serial);
    console.log(serial === exampleSerialSudoku);

    hasRun = true;
  });
</script>

<div class="flex items-center justify-center">
  <ContentBackgroundWrapper class="w-fit">
    <div class="flex gap-12 items-center p-8">
      <div class="flex flex-col justify-center items-center">
        <h6 class="text-xl font-semibold">How to Play</h6>
        <p>It's Sudoku.</p>
      </div>
      <div class="flex flex-col items-center">
        <h3 class="text-3xl font-bold">Sudoku</h3>
        <SudokuGrid {size} bind:values {initialValues} />
      </div>
      <PuzzleControls {submit} {reset} {shuffle} />
    </div>
  </ContentBackgroundWrapper>
</div>
