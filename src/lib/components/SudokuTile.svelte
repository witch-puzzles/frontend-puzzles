<script lang="ts">
  interface Props {
    value?: string;
  }

  let { value = "0" }: Props = $props();
</script>

<div class="flex items-center justify-center tile">
  <div>
    {value}
  </div>
</div>

<style lang="postcss">
  .tile {
    @apply w-12 h-12 border-2 border-black;
  }
</style>
