import type { RecordListDto } from "./dto/Record.dto";
import { firebaseService } from "./FirebaseService.svelte";
import type { PuzzleDifficulty } from "./Puzzle";

class RecordsService {
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

  async getRecords(difficulty: PuzzleDifficulty): Promise<RecordListDto> {
    const headers = await this.getHeaders();
    const url = `${this.baseUrl}/v1/sudoku_registry/records/${difficulty}`;
    const response = await fetch(url, { headers });
    const responseData = await response.json();
    return responseData as RecordListDto;
  }

}

const recordsService = new RecordsService();

export { recordsService, RecordsService }
