<script lang="ts">
  import { PuzzleDifficulty } from "$lib/Puzzle";

  interface Props {
    difficulties: PuzzleDifficulty[];
    selectedDifficulty?: PuzzleDifficulty;
  }

  let { difficulties, selectedDifficulty = $bindable(difficulties[0]) }: Props =
    $props();

  // very imperative, not cool
  const segmentColorIfSelected = (difficulty: PuzzleDifficulty): string => {
    switch (difficulty) {
      case PuzzleDifficulty.Easy:
        return "bg-green-400 text-green-900";
      case PuzzleDifficulty.Medium:
        return "bg-yellow-400 text-yellow-900";
      case PuzzleDifficulty.Hard:
        return "bg-red-400 text-red-900";
    }
  };

  const segmentColorNotSelected = (difficulty: PuzzleDifficulty): string => {
    switch (difficulty) {
      case PuzzleDifficulty.Easy:
        return "bg-green-100 text-green-600 hover:bg-green-200";
      case PuzzleDifficulty.Medium:
        return "bg-yellow-100 text-yellow-600 hover:bg-yellow-200";
      case PuzzleDifficulty.Hard:
        return "bg-red-100 text-red-600 hover:bg-red-200";
    }
  };

  const segmentColor = (difficulty: PuzzleDifficulty): string => {
    if (difficulty === selectedDifficulty)
      return segmentColorIfSelected(difficulty);
    else return segmentColorNotSelected(difficulty);
  };

  const handleSelectDifficulty = (difficulty: PuzzleDifficulty) => {
    selectedDifficulty = difficulty;
  };

  const roundLeftSide = (difficulty: PuzzleDifficulty): boolean => {
    return difficulty === difficulties[0];
  };

  const roundRightSide = (difficulty: PuzzleDifficulty): boolean => {
    return difficulty === difficulties[difficulties.length - 1];
  };
</script>

<div class="flex flex-row gap-0 rounded-lg shadow shadow-orange-800">
  {#each difficulties as difficulty (difficulty)}
    <button
      class="{segmentColor(difficulty)} button"
      class:left-round={roundLeftSide(difficulty)}
      class:right-round={roundRightSide(difficulty)}
      onclick={() => handleSelectDifficulty(difficulty)}
      >{PuzzleDifficulty[difficulty]}
    </button>
  {/each}
</div>

<style lang="postcss">
  .button {
    @apply px-4 p-2 font-bold transition-colors duration-200;
  }
  .right-round {
    @apply rounded-tr-lg rounded-br-lg;
  }

  .left-round {
    @apply rounded-tl-lg rounded-bl-lg;
  }
</style>
