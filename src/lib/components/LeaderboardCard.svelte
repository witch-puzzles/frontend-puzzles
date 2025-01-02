<script lang="ts">
  import LeaderboardEntry from "$lib/LeaderboardEntry";
  interface Props {
    entry: LeaderboardEntry;
  }

  let { entry }: Props = $props();
</script>

<div class="flex flex-row justify-start gap-1 bg-red-300">
  <div class="w-10">{entry.position}</div>
  <div class="w-20">{entry.name}</div>
  <div class="w-20">{entry.score}</div>
</div>
