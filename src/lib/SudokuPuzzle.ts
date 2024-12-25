import { PuzzleDifficulty } from "./Puzzle";
import type Puzzle from "./Puzzle";

export default class SudokuPuzzle implements Puzzle {
  name: string = "Sudoku";
  availableDifficulties: PuzzleDifficulty[] = [PuzzleDifficulty.Easy, PuzzleDifficulty.Medium, PuzzleDifficulty.Hard];
}
