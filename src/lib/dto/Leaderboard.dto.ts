class LeaderboardRegistryDto {
  user_name: string;
  rank: number;
  solving_time: number;

  constructor(user_name: string, rank: number, solving_time: number) {
    this.user_name = user_name;
    this.rank = rank;
    this.solving_time = solving_time;
  }
}

class LeaderboardDto {
  leaderboard: LeaderboardRegistryDto[];
  user_rank: number;
  user_solving_time: number;

  constructor(leaderboard: LeaderboardRegistryDto[], user_rank: number, user_solving_time: number) {
    this.leaderboard = leaderboard;
    this.user_rank = user_rank;
    this.user_solving_time = user_solving_time;
  }
}

export { LeaderboardDto, LeaderboardRegistryDto }
