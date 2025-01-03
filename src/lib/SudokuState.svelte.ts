import SudokuDto from "./dto/Sudoku.dto";

interface SudokuState {
  sudoku: SudokuDto | null;
  is_applicable: boolean;
}
export const sudokuState: SudokuState = $state({ sudoku: null, is_applicable: true });
