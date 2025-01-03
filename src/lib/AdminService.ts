import type { PuzzleDifficulty } from "./Puzzle";
import { firebaseService } from "./FirebaseService.svelte";

class AdminService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_BACKEND_URL;
  }

  async populateDatabase(difficulty: PuzzleDifficulty, count: number) {
    const url = `${this.baseUrl}/v1/sudoku/populate/${difficulty}/${count}`;
    const token = await firebaseService.getIdToken();
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    }).then((res) => res.json());
  }
}

const adminService = new AdminService();

export { adminService, AdminService };
