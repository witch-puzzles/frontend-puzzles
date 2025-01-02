<script lang="ts">
  import Icon from "./Icon.svelte";

  interface Props {
    link: string;
    puzzleId: string;
  }

  let { link, puzzleId }: Props = $props();
</script>

<div
  class="max-w-sm p-4 space-y-3 bg-orange-100 rounded-lg shadow-md border-2 border-orange-300"
>
  <div class="flex items-center gap-2">
    <p class="font-semibold text-orange-700">ID:</p>
    <div class="overflow-x-auto">
      <code
        class="px-2 py-1 bg-white rounded text-orange-800 font-mono whitespace-nowrap"
        >{puzzleId}</code
      >
    </div>
  </div>

  <div class="flex items-center gap-2">
    <p class="font-semibold text-orange-700">Share:</p>
    <div class="overflow-x-auto flex items-center gap-2">
      <code
        class="overflow-x-auto px-2 py-1 bg-white rounded text-orange-800 font-mono whitespace-nowrap"
        >{link}</code
      >
      <button><Icon tag="contentCopy" class="w-6 h-6" color="#f97316" /></button
      >
    </div>
  </div>
</div>
