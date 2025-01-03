export default class SudokuSubmitDto {
  puzzle_id: string;
  user_solution: string;
  solving_time: number;
  is_applicable: boolean;
  constructor(puzzle_id: string, user_solution: string, solving_time: number, is_applicable: boolean) {
    this.puzzle_id = puzzle_id;
    this.user_solution = user_solution;
    this.solving_time = solving_time;
    this.is_applicable = is_applicable;
  }
}
