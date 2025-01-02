<script lang="ts">
  import type Puzzle from "$lib/Puzzle";

  interface Props {
    puzzle: Puzzle;
  }

  let { puzzle }: Props = $props();
</script>

<Label>{puzzle.name}</Label>

<!-- TODO: Icon/image based on puzzle -->
