import { LeaderboardDto, LeaderboardRegistryDto } from "./dto/Leaderboard.dto";

export default class LeaderboardService {

  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_BACKEND_URL;
  }

  async getLeaderboardToday(difficulty: number): Promise<LeaderboardDto> {
    const url = `${this.baseUrl}/v1/sudoku_registry/leaderboard/${difficulty}/today`;
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData as LeaderboardDto;
  }

  async getLeaderboardWeek(difficulty: number): Promise<LeaderboardDto> {
    const url = `${this.baseUrl}/v1/sudoku_registry/leaderboard/${difficulty}/week`;
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData as LeaderboardDto;
  }

  async getLeaderboardMonth(difficulty: number): Promise<LeaderboardDto> {
    const url = `${this.baseUrl}/v1/sudoku_registry/leaderboard/${difficulty}/month`;
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData as LeaderboardDto;
  }

  async getLeaderboardAllTime(difficulty: number): Promise<LeaderboardDto> {
    const url = `${this.baseUrl}/v1/sudoku_registry/leaderboard/${difficulty}/alltime`;
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData as LeaderboardDto;
  }
}