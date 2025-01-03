<script lang="ts">
  import { timerState } from "$lib/TimerState.svelte";

  function formatTime(totalSeconds: number) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return [hours, minutes, secs]
      .map((v) => v.toString().padStart(2, "0"))
      .join(":");
  }
</script>

<div class="flex flex-col items-center">
  <div class="font-mono font-bold text-5xl text-gray-800">
    {formatTime(timerState.time)}
  </div>
</div>
