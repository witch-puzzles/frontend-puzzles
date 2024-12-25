<script lang="ts">
  import SegmentedButton, { Segment } from "@smui/segmented-button";
  import { Label } from "@smui/button";
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
        return "bg-green-100 text-green-600";
      case PuzzleDifficulty.Medium:
        return "bg-yellow-100 text-yellow-600";
      case PuzzleDifficulty.Hard:
        return "bg-red-100 text-red-600";
    }
  };

  const segmentColor = (difficulty: PuzzleDifficulty): string => {
    if (difficulty === selectedDifficulty)
      return segmentColorIfSelected(difficulty);
    else return segmentColorNotSelected(difficulty);
  };
</script>

<div>
  <SegmentedButton
    segments={difficulties}
    singleSelect
    bind:selected={selectedDifficulty}
  >
    {#snippet segment(segment)}
      <Segment class={segmentColor(segment)} {segment}
        ><Label>{PuzzleDifficulty[segment]}</Label></Segment
      >
    {/snippet}
  </SegmentedButton>
</div>
