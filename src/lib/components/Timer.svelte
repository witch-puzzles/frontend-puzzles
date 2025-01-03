<script lang="ts">
  import { timerState } from "$lib/TimerState.svelte";

  function formatTime(totalSeconds: number) {
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${secs.toFixed(1).padStart(3, "0")}`;
  }
</script>

<div class="flex flex-col items-center">
  <div class="font-mono font-bold text-5xl text-gray-800">
    {formatTime(timerState.time)}
  </div>
</div>
