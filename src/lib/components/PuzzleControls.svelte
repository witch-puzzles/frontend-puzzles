<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import Button, { Label } from "@smui/button";

  interface Props {
    time?: string;
    submit: () => void;
    reset: () => void;
    shuffle: () => void;
  }

  let { time = $bindable("00:57"), submit, reset, shuffle }: Props = $props();
</script>

<div class="flex flex-col items-center border border-black">
  <div class="flex flex-row items-center gap-2 bg-blue-100">
    <Icon tag="clock" class="w-12 h-12" />
    {time}
  </div>
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
