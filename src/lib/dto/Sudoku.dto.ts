export default class SudokuDto {
  puzzle_id: string;
  puzzle_data: string;
  difficulty: number;
  // 0 = easy, 1 = medium, 2 = hard

  constructor(puzzle_id: string, puzzle_data: string, difficulty: number) {
    this.puzzle_id = puzzle_id;
    this.puzzle_data = puzzle_data;
    this.difficulty = difficulty;
  }
}
