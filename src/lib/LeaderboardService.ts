import { LeaderboardDto, LeaderboardRegistryDto } from "./dto/Leaderboard.dto";
import { firebaseService } from "./FirebaseService";

export default class LeaderboardService {

  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_BACKEND_URL;
  }

  async getHeaders(): Promise<Headers> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    try {
      const accessToken = await firebaseService.getIdToken();
      if (accessToken) {
        headers.append("Authorization", "Bearer " + accessToken);
      }
    }
    catch (e) {
      console.error(e);
    }
    return headers;
  }

  async getLeaderboardToday(difficulty: number): Promise<LeaderboardDto> {
    const headers = await this.getHeaders();
    const url = `${this.baseUrl}/v1/sudoku_registry/leaderboard/${difficulty}/today`;
    const response = await fetch(url, { headers });
    const responseData = await response.json();
    return responseData as LeaderboardDto;
  }

  async getLeaderboardWeek(difficulty: number): Promise<LeaderboardDto> {
    const headers = await this.getHeaders();
    const url = `${this.baseUrl}/v1/sudoku_registry/leaderboard/${difficulty}/week`;    
    const response = await fetch(url, { headers});
    const responseData = await response.json();
    return responseData as LeaderboardDto;
  }

  async getLeaderboardMonth(difficulty: number): Promise<LeaderboardDto> {
    const headers = await this.getHeaders();
    const url = `${this.baseUrl}/v1/sudoku_registry/leaderboard/${difficulty}/month`;
    const response = await fetch(url, { headers });
    const responseData = await response.json();
    return responseData as LeaderboardDto;
  }

  async getLeaderboardAllTime(difficulty: number): Promise<LeaderboardDto> {
    const headers = await this.getHeaders();
    const url = `${this.baseUrl}/v1/sudoku_registry/leaderboard/${difficulty}/alltime`;
    const response = await fetch(url, { headers });
    const responseData = await response.json();
    return responseData as LeaderboardDto;
  }
}