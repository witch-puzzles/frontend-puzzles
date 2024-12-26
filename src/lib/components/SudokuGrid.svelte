<script lang="ts">
  import SudokuTile from "./SudokuTile.svelte";

  interface Props {
    size: number; // size = 3, for a regular Sudoku grid
  }

  let { size }: Props = $props();

  let selectedTileIndex: number | null = $state(null);

  const gridSize = size * size * size * size;
  let values: string[] = $state(new Array(gridSize));
  values.fill("");

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

  const handleTileSelect = (index: number) => {
    selectedTileIndex = index;
  };

  const handleTileDeselect = () => {
    selectedTileIndex = null;
  };
</script>

<div class="flex flex-col border border-black">
  {#each rows as _, h}
    <div class="flex flex-row">
      {#each rows as _, w}
        {@const index = h * rowSize + w}
        <SudokuTile
          bind:value={values[index]}
          isSelected={selectedTileIndex === index}
          onselect={() => handleTileSelect(index)}
          ondeselect={handleTileDeselect}
        />
      {/each}
    </div>
  {/each}
</div>
