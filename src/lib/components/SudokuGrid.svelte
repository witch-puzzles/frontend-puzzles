<script lang="ts">
  import SudokuTile from "./SudokuTile.svelte";

  interface Props {
    size: number; // size = 3, for a regular Sudoku grid
  }

  let { size }: Props = $props();

  const gridSize = size * size * size * size;
  let values = $state(new Array(gridSize));

  const splitIntoRows = (array: string[], size: number): string[][] => {
    if (size <= 0) throw new Error("size must be greater than zero");

    const rows: string[][] = [];
    for (let i = 0; i < array.length; i += size) {
      rows.push(array.slice(i, i + size));
    }

    return rows;
  };

  const rowSize = size * size;
  const rows = splitIntoRows(values, rowSize);
</script>

{#each rows as _, h}
  <div class="flex flex-col">
    <div class="flex flex-row">
      {#each rows as _, w}
        <SudokuTile value={(h * rowSize + w).toString()} />
      {/each}
    </div>
  </div>
{/each}
