<script lang="ts">
  interface Props {
    selected: string;
  }

  const periods = [
    { id: "today", label: "Today" },
    { id: "week", label: "Week" },
    { id: "month", label: "Month" },
    { id: "all", label: "All Time" },
  ];

  let { selected = $bindable(periods[0].id) }: Props = $props();

  function handleSelect(periodId: string) {
    selected = periodId;
  }
</script>

<div class="flex space-x-2 p-4 rounded-lg bg-gray-100">
  {#each periods as period}
    <button
      class="px-4 py-2 rounded-md transition-colors duration-200
        {selected === period.id
        ? 'bg-[#F88912] text-white'
        : 'bg-white text-gray-600 hover:bg-gray-200'}"
      onclick={() => handleSelect(period.id)}
    >
      {period.label}
    </button>
  {/each}
</div>
