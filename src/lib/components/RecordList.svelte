<script lang="ts">
  import RecordCard from "./RecordCard.svelte";
  import { RecordListDto } from "$lib/dto/Record.dto";
  import { slide } from "svelte/transition";

  interface Props {
    recordsData: RecordListDto;
  }

  let { recordsData }: Props = $props();
</script>

<div class="max-w-3xl mx-auto p-6">
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
  >
    <!-- Header -->
    <div
      class="bg-[#F88912] px-6 py-4 grid grid-cols-12 gap-4 text-sm font-semibold text-white items-center"
    >
      <div class="col-span-8">Puzzle ID</div>
      <div class="col-span-4 text-right">Time (s)</div>
    </div>

    <!-- Scrollable container -->
    <div
      class="divide-y divide-gray-100 max-h-[30rem] overflow-y-auto custom-scrollbar"
    >
      {#each recordsData.records as recordRow}
        <div transition:slide|local={{ duration: 150 }}>
          <RecordCard {recordRow} />
        </div>
      {/each}
    </div>
  </div>
</div>

