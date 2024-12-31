<script lang="ts">
  import SudokuTile from "./SudokuTile.svelte";

  interface Props {
    size: number; // size = 3, for a regular Sudoku grid
    initialValues: string[];
    values: string[];
  }

  let {
    size,
    initialValues,
    values = $bindable(initialValues),
  }: Props = $props();

  let selectedTileIndex: number | null = $state(null);

  const splitIntoRows = (array: string[], size: number): string[][] => {
    if (size <= 0) throw new Error("size must be greater than zero");

    const rows: string[][] = [];
    for (let i = 0; i < array.length; i += size) {
      rows.push(array.slice(i, i + size));
    }

    return rows;
  };

  let sizeSquared = $derived(size * size);
  // not used much, makes life easier
  let rows = $derived(splitIntoRows(values, sizeSquared));

  const handleTileSelect = (index: number) => {
    selectedTileIndex = index;
  };

  const handleTileDeselect = () => {
    selectedTileIndex = null;
  };

  const shouldPutDivider = (i: number): boolean => {
    return (i + 1) % size === 0 && i < sizeSquared - 1;
  };

  const isInSameRow = (i: number, j: number): boolean => {
    let r1 = Math.floor(i / sizeSquared);
    let r2 = Math.floor(j / sizeSquared);

    return r1 === r2;
  };

  const isInSameColumn = (i: number, j: number): boolean => {
    let c1 = i % sizeSquared;
    let c2 = j % sizeSquared;

    return c1 === c2;
  };

  const isInSameSubgrid = (i: number, j: number): boolean => {
    let r1 = Math.floor(i / sizeSquared);
    let c1 = i % sizeSquared;

    let r2 = Math.floor(j / sizeSquared);
    let c2 = j % sizeSquared;

    let subR1 = Math.floor(r1 / size);
    let subC1 = Math.floor(c1 / size);

    let subR2 = Math.floor(r2 / size);
    let subC2 = Math.floor(c2 / size);

    return subR1 === subR2 && subC1 === subC2;
  };

  const areRelated = (i: number, j: number): boolean => {
    return isInSameRow(i, j) || isInSameColumn(i, j) || isInSameSubgrid(i, j);
  };

  const isHighlighted = (i: number): boolean => {
    if (selectedTileIndex === null) return false;

    return areRelated(i, selectedTileIndex);
  };
</script>

{#snippet divider()}
  <div class="outline outline-black divider"></div>
{/snippet}

<div class="flex flex-col border-4 border-black shadow shadow-black">
  {#each rows as _, h}
    <div class="flex flex-row">
      {#each rows as _, w}
        {@const index = h * sizeSquared + w}
        <SudokuTile
          bind:value={values[index]}
          isSelected={selectedTileIndex === index}
          isHighlighted={isHighlighted(index)}
          disabled={initialValues[index] !== ""}
          onselect={() => handleTileSelect(index)}
          ondeselect={handleTileDeselect}
        />
        {#if shouldPutDivider(w)}
          {@render divider()}
        {/if}
      {/each}
    </div>
    {#if shouldPutDivider(h)}
      {@render divider()}
    {/if}
  {/each}
</div>

<style>
  .divider {
    z-index: 1;
  }
</style>
