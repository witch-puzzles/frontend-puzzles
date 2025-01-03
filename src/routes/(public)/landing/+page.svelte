<script lang="ts">
  import Button from "$lib/Button.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let totalStars = $state(0);

  // Calculate heights based on points
  const maxPoints = 420; // Highest score
  const baseHeight = 150; // Maximum height in pixels

  function calculateHeight(points: number) {
    const calculatedHeight = Math.round((points / maxPoints) * baseHeight);
    return Math.max(calculatedHeight, baseHeight / 3);
  }

  onMount(async () => {
    try {
      const BACKEND_URL =
        "https://api.github.com/repos/witch-puzzles/backend-puzzles";
      const FRONTEND_URL =
        "https://api.github.com/repos/witch-puzzles/frontend-puzzles";
      const [frontendResponse, backendResponse] = await Promise.all([
        fetch(BACKEND_URL, {}),
        fetch(FRONTEND_URL, {}),
      ]);

      const [frontendData, backendData] = await Promise.all([
        frontendResponse.json(),
        backendResponse.json(),
      ]);

      totalStars = frontendData.stargazers_count + backendData.stargazers_count;
    } catch (error) {
      console.error("Error fetching GitHub stats:", error);
    }
  });
</script>

<div class="flex flex-col items-center w-full h-[90vh] overflow-hidden">
  <!-- Hero Section -->
  <div class="w-full px-5 flex flex-col items-center justify-center h-[30vh]">
    <h1 class="text-white text-4xl font-bold text-center mb-8">
      Challenge Your Mind<br />With Witch Puzzles
    </h1>
    <Button
      text="Start today"
      type="primary"
      variant="white"
      fontSize="18px"
      on:click={() => goto("/register")}
    />
  </div>

  <!-- Features Section -->
  <div
    class="flex bg-white justify-between px-16 w-full gap-12 h-[calc(90vh-92px-30vh)] overflow-hidden"
  >
    <div class="flex-1 flex flex-col items-center justify-center gap-4">
      <h2 class="text-3xl font-bold text-center text-[#212121]">
        Choose from our large repertoire of puzzles
      </h2>
      <div class="bg-[#f5f5f5] p-3 rounded-xl flex justify-center items-center">
        <img
          src="/images/Picture3.png"
          alt="Sudoku puzzle icon"
          class="w-20 h-auto"
        />
      </div>
    </div>

    <div class="flex-1 flex flex-col items-center justify-center gap-4">
      <h2 class="text-2xl font-bold text-center text-[#212121] mb-0">
        Be the best among your friends!
      </h2>
      <div class="leaderboard -mt-2">
        <div class="flex items-end gap-3 p-3">
          <!-- Second Place -->
          <div class="flex flex-col items-center gap-0.5">
            <img
              src="/images/avatars/x-fredd5.png"
              alt="Player avatar"
              class="w-10 h-10 rounded-full"
            />
            <span class="font-semibold text-xs mb-2">X-fredd5</span>
            <div
              class="flex flex-col items-center justify-end px-3 py-1.5 rounded-xl bg-[#e0e0e0] w-[60px] text-center"
              style="height: {calculateHeight(320)}px"
            >
              <span class="text-lg font-bold w-full">2</span>
              <span class="text-[10px] w-full">320 pts</span>
            </div>
          </div>

          <!-- First Place -->
          <div class="flex flex-col items-center gap-0.5">
            <img
              src="/images/avatars/antonio12.png"
              alt="Player avatar"
              class="w-10 h-10 rounded-full"
            />
            <span class="font-semibold text-xs mb-2">Antonio12</span>
            <div
              class="flex flex-col items-center justify-end px-3 py-1.5 rounded-xl bg-[#ffd700] w-[60px] text-center"
              style="height: {calculateHeight(420)}px"
            >
              <span class="text-lg font-bold w-full">1</span>
              <span class="text-[10px] w-full">420 pts</span>
            </div>
          </div>

          <!-- Third Place -->
          <div class="flex flex-col items-center gap-0.5">
            <img
              src="/images/avatars/lucas123.png"
              alt="Player avatar"
              class="w-10 h-10 rounded-full"
            />
            <span class="font-semibold text-xs mb-2">Lucas123</span>
            <div
              class="flex flex-col items-center justify-end px-3 py-1.5 rounded-xl bg-[#f88912] w-[60px] text-center"
              style="height: {calculateHeight(5)}px"
            >
              <span class="text-lg font-bold w-full">3</span>
              <span class="text-[10px] w-full">5 pts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <div class="w-full bg-[#212121] flex justify-center h-[92px] mt-auto">
    <div
      class="flex flex-col items-center justify-center max-w-[1200px] w-full"
    >
      <div class="flex items-center justify-center gap-8 w-full">
        <h2 class="text-3xl font-bold text-white m-0">2025 Witch Puzzles</h2>
        <a
          href="https://github.com/witch-puzzles"
          target="_blank"
          class="flex flex-col items-center gap-0.5 text-white px-3 py-2 rounded-xl bg-white/10 min-w-[90px] hover:-translate-y-1 hover:bg-white/15 transition-all duration-200"
        >
          <div class="flex items-center gap-1.5">
            <div class="text-base">⭐</div>
            <div class="text-base font-bold">{totalStars}</div>
          </div>
          <div class="text-[10px] opacity-80">Total Stars</div>
        </a>
      </div>
    </div>
  </div>
</div>
