<script lang="ts">
  import SudokuGrid from "$lib/components/SudokuGrid.svelte";
  import { sudokuState } from "$lib/SudokuState.svelte";
  import PuzzleControls from "$lib/components/PuzzleControls.svelte";
  import SudokuService from "$lib/SudokuService";
  import ContentBackgroundWrapper from "$lib/components/ContentBackgroundWrapper.svelte";
  import ShareMenu from "$lib/components/ShareMenu.svelte";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import { restartTimer, resetTimer } from "$lib/TimerState.svelte";
  import { onMount, onDestroy } from "svelte";

  const sudokuService = new SudokuService();

  let values: string[] = $state([]);
  let initialValues: string[] = $state([]);
  let size: number = $state(1);
  let time: number = $state(0); // in seconds

  let link = "https://google.com213123123122312312312313123312";
  let puzzleId = "utku-id-puzzle-123";
  // TODO: replace by fetched ID & link

  const submit = () => {
    console.log("Submit puzzle...");
  };

  const reset = () => {
    values = Array.from(initialValues);
  };

  const shuffle = () => {
    if (sudokuState.sudoku) {
      getRandomSudoku(sudokuState.sudoku.difficulty);
      restartTimer();
    }
  };

  const getRandomSudoku = async (difficulty: PuzzleDifficulty) => {
    try {
      const sudoku = await sudokuService.fetchRandomSudoku(difficulty);
      sudokuState.sudoku = sudoku;
      syncSudoku();
    } catch (err: any) {
      console.error("Failed to fetch random sudoku: ", err);
    }
  };

  const syncSudoku = () => {
    if (!sudokuState.sudoku) return;

    [size, initialValues] = sudokuService.deserialize(
      sudokuState.sudoku.puzzle_data,
    );

    values = Array.from(initialValues);
  };

  onMount(() => {
    if (!sudokuState.sudoku) {
      getRandomSudoku(PuzzleDifficulty.Easy); // get easy puzzle by default
    } else {
      syncSudoku();
    }

    restartTimer();
  });

  onDestroy(() => {
    resetTimer();
  });
</script>

<div class="h-full flex items-center justify-center">
  <ContentBackgroundWrapper>
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
        <PuzzleControls bind:time {submit} {reset} {shuffle} />
        <ShareMenu {link} {puzzleId} />
      </div>
    </div>
  </ContentBackgroundWrapper>
</div>
