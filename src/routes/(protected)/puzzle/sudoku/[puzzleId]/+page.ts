import { redirect } from '@sveltejs/kit';
import { sudokuState } from '$lib/SudokuState.svelte';
import { sudokuService } from '$lib/SudokuService';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    const sudoku = await sudokuService.fetchSudokuById(params.puzzleId);
    sudokuState.sudoku = sudoku;
    sudokuState.is_applicable = false;

    // Redirect to the main puzzle view
    redirect(303, '/puzzle/sudoku');
  } catch (err: any) {
    console.error(err);
    redirect(303, '/');
  }

};
