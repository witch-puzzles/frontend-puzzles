<script lang="ts">
  import SudokuGrid from "$lib/components/SudokuGrid.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import PuzzleControls from "$lib/components/PuzzleControls.svelte";
  import SudokuService from "$lib/SudokuService";
  import ContentBackgroundWrapper from "$lib/components/ContentBackgroundWrapper.svelte";
  import ShareMenu from "$lib/components/ShareMenu.svelte";

  const sudokuService = new SudokuService();
  const exampleSerialSudoku =
    "3:6,0,0,0,0,0,0,0,0,0,7,5,0,0,0,0,8,9,0,0,0,0,8,9,1,0,0,0,0,1,7,5,0,0,0,0,0,0,0,0,0,6,0,9,0,4,0,0,0,0,0,0,0,0,0,0,0,5,0,4,2,6,0,5,3,0,0,0,0,0,0,0,0,0,8,0,1,0,0,0,0";

  let values: string[] = $state([]);
  let initialValues: string[] = $state([]);
  let size: number = $state(1);

  let link = "https://google.com213123123122312312312313123312";
  let puzzleId = "utku-id-puzzle-123";

  const submit = () => {
    console.log("Submit puzzle...");
  };

  const reset = () => {
    console.log("Reset puzzle...");
    values = Array.from(initialValues);
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

<div class="h-full flex items-center justify-center">
  <ContentBackgroundWrapper class="w-fit">
    <div class="flex gap-12 items-center p-8">
      <div
        class="flex flex-col gap-4 max-w-xs bg-orange-100 rounded-lg shadow-md border-2 border-orange-300 p-8"
      >
        <h6 class="text-2xl font-bold">How to Play</h6>
        <div class="space-y-3">
          <p class="font-medium">Fill the 9×9 grid with numbers 1-9:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Each row must contain numbers 1-9 without repetition</li>
            <li>Each column must contain numbers 1-9 without repetition</li>
            <li>Each 3×3 box must contain numbers 1-9 without repetition</li>
          </ul>
          <div class="pt-2">
            <p class="font-medium">Controls:</p>
            <ul class="list-none pl-5 space-y-1 text-sm">
              <li>🖱️ Click a cell to select it</li>
              <li>⌨️ Type numbers 1-9 to fill</li>
              <li>⌫ Backspace to clear a cell</li>
            </ul>
          </div>
          <p class="text-sm italic mt-4">
            Pre-filled numbers cannot be modified.
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col">
          <h4 class="self-center mdc-typography--headline4">Sudoku</h4>
          <SudokuGrid {size} bind:values {initialValues} />
        </div>
      </div>
      <div class="h-full flex flex-col justify-around">
        <PuzzleControls {submit} {reset} {shuffle} />
        <ShareMenu {link} {puzzleId} />
      </div>
    </div>
  </ContentBackgroundWrapper>
</div>
