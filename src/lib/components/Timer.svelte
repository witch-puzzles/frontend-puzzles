<script lang="ts">
  interface Props {
    seconds?: number;
    isRunning?: boolean;
  }
  let { seconds = $bindable(0), isRunning = $bindable(false) }: Props =
    $props();

  let intervalId: NodeJS.Timeout | null = $state(null);

  // Start timer immediately when component mounts
  $effect(() => {
    startTimer();
  });

  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      intervalId = setInterval(() => {
        seconds++;
      }, 1000);
    }
  }

  function formatTime(totalSeconds: number) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return [hours, minutes, secs]
      .map((v) => v.toString().padStart(2, "0"))
      .join(":");
  }

  // Cleanup on component destruction
  $effect.root(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  });
</script>

<div class="flex flex-col items-center">
  <div class="font-mono font-bold text-5xl text-gray-800">
    {formatTime(seconds)}
  </div>
</div>

