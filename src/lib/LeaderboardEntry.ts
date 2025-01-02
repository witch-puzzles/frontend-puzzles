export default class LeaderboardEntry {
  name: string; // TDOO: change to user struct
  position: number;
  score: number;

  constructor(name: string, position: number, score: number) {
    this.name = name;
    this.position = position;
    this.score = score;
  }
};
