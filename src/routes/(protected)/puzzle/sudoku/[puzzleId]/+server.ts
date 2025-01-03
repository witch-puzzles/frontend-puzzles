import { redirect } from '@sveltejs/kit';
import { sudokuState } from '$lib/SudokuState.svelte';
import { sudokuService } from '$lib/SudokuService';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const puzzleId = url.pathname.split('/').pop();
  if (!puzzleId) {
    // TODO: error page
    redirect(308, "/landing");
  }

  const sudoku = await sudokuService.fetchSudokuById(puzzleId);
  sudokuState.sudoku = sudoku;
  // TODO: set is_applicable to false
  redirect(308, "/puzzle/sudoku");
};
