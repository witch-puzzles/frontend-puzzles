enum PuzzleDifficulty {
  Easy,
  Medium,
  Hard
};

export default interface Puzzle {
  name: string;
  availableDifficulties: PuzzleDifficulty[];
};

export { PuzzleDifficulty };
