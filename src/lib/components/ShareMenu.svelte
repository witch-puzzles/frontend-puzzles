<script lang="ts">
  import Icon from "./Icon.svelte";

  interface Props {
    link: string;
    puzzleId: string;
  }

  let { link, puzzleId }: Props = $props();
  let copySuccess = $state(false);

  const handleContentCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      copySuccess = true;
      setTimeout(() => (copySuccess = false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
</script>

<div
  class="max-w-sm p-4 space-y-3 bg-orange-100 rounded-lg shadow-md border-2 border-orange-300"
>
  <div class="flex items-center gap-2">
    <p class="w-16 font-semibold text-orange-700">ID:</p>
    <div class="w-64 overflow-x-auto">
      <code
        class="block px-2 py-1 bg-white rounded text-orange-800 font-mono whitespace-nowrap"
        >{puzzleId}</code
      >
    </div>
  </div>

  <div class="flex items-center gap-2">
    <p class="w-16 font-semibold text-orange-700">Share:</p>
    <div class="w-64 overflow-x-auto flex items-center gap-2">
      <code
        class="block w-56 px-2 py-1 bg-white rounded text-orange-800 font-mono whitespace-nowrap overflow-x-auto"
        >{link}</code
      >
      <button
        onclick={handleContentCopy}
        class="shrink-0 hover:bg-orange-200 p-1 rounded transition-colors"
        aria-label="Copy link"
      >
        {#if copySuccess}
          <Icon tag="check" class="w-6 h-6" color="#15803d" />
        {:else}
          <Icon tag="contentCopy" class="w-6 h-6" color="#f97316" />
        {/if}
      </button>
    </div>
  </div>
</div>
