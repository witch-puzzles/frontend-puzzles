<script lang="ts">
  import SudokuGrid from "$lib/components/SudokuGrid.svelte";
  import { sudokuState } from "$lib/SudokuState.svelte";
  import PuzzleControls from "$lib/components/PuzzleControls.svelte";
  import { sudokuService } from "$lib/SudokuService";
  import ContentBackgroundWrapper from "$lib/components/ContentBackgroundWrapper.svelte";
  import ShareMenu from "$lib/components/ShareMenu.svelte";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import {
    restartTimer,
    resetTimer,
    timerState,
    stopTimer,
  } from "$lib/TimerState.svelte";
  import { onMount, onDestroy } from "svelte";
  import CongratsMenu from "$lib/components/CongratsMenu.svelte";
  import { page } from "$app/stores";

  let values: string[] = $state([]);
  let initialValues: string[] = $state([]);
  let size: number = $state(1);

  let correctlySolved: boolean = $state(false);

  const origin = window.location.hostname;
  let link = $derived(
    `${origin}/puzzle/sudoku?puzzleId=${sudokuState.sudoku?.puzzle_id}`,
  );

  const submit = async () => {
    if (!sudokuState.sudoku) return;

    const isCorrect = await sudokuService.submitSudoku(
      sudokuState.sudoku.puzzle_id,
      timerState.time,
      values,
      sudokuState.is_applicable,
    );

    if (isCorrect) {
      stopTimer();
      correctlySolved = true;
    }
  };

  const reset = () => {
    values = Array.from(initialValues);
  };

  const shuffle = () => {
    if (sudokuState.sudoku) {
      getRandomSudoku(sudokuState.sudoku.difficulty);
      sudokuState.is_applicable = true;
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

  onMount(async () => {
    let queryPuzzleId = $page.url.searchParams.get("puzzleId");
    if (queryPuzzleId) {
      // through shared link - not applicable
      try {
        const sudoku = await sudokuService.fetchSudokuById(queryPuzzleId);
        sudokuState.sudoku = sudoku;
        sudokuState.is_applicable = false;
        syncSudoku();
      } catch (err: any) {
        // most likely malformed id, go default route
        getRandomSudoku(PuzzleDifficulty.Easy); // get easy puzzle by default
        sudokuState.is_applicable = true;
      }
    } else if (sudokuState.sudoku) {
      // through /puzzle/select - applicable
      syncSudoku();
      sudokuState.is_applicable = true;
    } else {
      // directly - applicable
      getRandomSudoku(PuzzleDifficulty.Easy); // get easy puzzle by default
      sudokuState.is_applicable = true;
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
        {#if correctlySolved}
          <CongratsMenu />
        {:else}
          <PuzzleControls {submit} {reset} {shuffle} />
        {/if}
        {#if sudokuState.sudoku}
          <ShareMenu {link} puzzleId={sudokuState.sudoku.puzzle_id} />
        {/if}
      </div>
    </div>
  </ContentBackgroundWrapper>
</div>
