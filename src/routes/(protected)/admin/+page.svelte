<script lang="ts">
  import ContentBackgroundWrapper from "$lib/components/ContentBackgroundWrapper.svelte";
  import DifficultySelector from "$lib/components/DifficultySelector.svelte";
  import NumberInput from "$lib/components/NumberInput.svelte";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import { adminService } from "$lib/AdminService";

  let difficulties: PuzzleDifficulty[] = $state([
    PuzzleDifficulty.Easy,
    PuzzleDifficulty.Medium,
    PuzzleDifficulty.Hard,
  ]);
  let selectedDifficulty: PuzzleDifficulty = $state(PuzzleDifficulty.Easy);

  let count: number = $state(0);

  let populated = $state(false);

  const handlePopulateDatabase = async () => {
    try {
      await adminService.populateDatabase(selectedDifficulty, count);
      populated = true;
      setTimeout(() => {
        populated = false;
      }, 1000);
    } catch (err: any) {
      console.error(err);
    }
  };
</script>

<ContentBackgroundWrapper>
  <div class="flex flex-col items-center gap-8">
    <h1 class="font-bold text-4xl text-orange-50">Witch Puzzles Admin Panel</h1>
    <div class="flex flex-row gap-4">
      <DifficultySelector {difficulties} bind:selectedDifficulty />
      <NumberInput bind:value={count} min={1} max={50} />
    </div>
    <button
      class="px-4 py-2 bg-white border-2 border-orange-300 text-orange-600 font-semibold rounded hover:bg-orange-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
      onclick={handlePopulateDatabase}>Populate Database</button
    >
    {#if populated}
      <p class="font-bold text-2xl text-green-500">Database populated!</p>
    {/if}
  </div>
</ContentBackgroundWrapper>
