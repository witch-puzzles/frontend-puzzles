<script lang="ts">
  import { RecordRegistryDto } from "$lib/dto/Record.dto";

  interface Props {
    recordRow: RecordRegistryDto;
  }

  let { recordRow }: Props = $props();
</script>

<div
  class="group grid grid-cols-12 gap-4 px-6 py-4 hover:bg-orange-50 transition-colors duration-200 items-center"
>
  <!-- Puzzle Id -->
  <div class="col-span-8">
    <span class="font-medium text-gray-900">{recordRow.puzzle_id}</span>
  </div>

  <!-- Score -->
  <div class="col-span-4 text-right">
    <span
      class="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium
      bg-orange-100 text-orange-800 group-hover:bg-orange-200
      transition-colors duration-200"
    >
      {recordRow.solving_time.toLocaleString()}
    </span>
  </div>
</div>

