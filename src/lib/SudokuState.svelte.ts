import SudokuDto from "./dto/Sudoku.dto";

interface SudokuState {
  sudoku: SudokuDto | null;
}
export const sudokuState: SudokuState = $state({ sudoku: null });
