<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import Timer from "./Timer.svelte";

  interface Props {
    submit: () => void;
    reset: () => void;
    shuffle: () => void;
  }

  let { submit, reset, shuffle }: Props = $props();
</script>

<div
  class="flex flex-col justify-center items-center p-4 bg-orange-100 rounded-lg shadow-md border-2 border-orange-300"
>
  <Timer />
  <div class="flex flex-row justify-around gap-3 m-2">
    <button
      onclick={() => submit()}
      class="px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      Submit
    </button>
    <button
      onclick={() => reset()}
      class="px-4 py-2 bg-white border-2 border-orange-300 text-orange-600 font-semibold rounded hover:bg-orange-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      Clear
    </button>
    <button
      onclick={() => shuffle()}
      class="p-2 bg-white border-2 border-orange-300 text-orange-600 rounded hover:bg-orange-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      <Icon tag="shuffle" class="w-6 h-6" color="#f97316" />
    </button>
  </div>
</div>
