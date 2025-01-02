<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import Button, { Label } from "@smui/button";
  import Timer from "./Timer.svelte";

  interface Props {
    time?: number; // in seconds
    submit: () => void;
    reset: () => void;
    shuffle: () => void;
  }

  let { time = $bindable(0), submit, reset, shuffle }: Props = $props();
</script>

<div class="flex flex-col justify-center items-center border border-black">
  <Timer bind:seconds={time} />
  <div class="flex flex-row justify-around gap-2 m-2">
    <Button onclick={() => submit()} variant="raised"
      ><Label>Submit</Label></Button
    >
    <Button onclick={() => reset()}><Label>Clear</Label></Button>
    <button onclick={() => shuffle()} class="border border-black"
      ><Icon tag="shuffle" class="w-6 h-6" /></button
    >
  </div>
</div>
