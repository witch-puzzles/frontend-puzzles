<script lang="ts">
  interface Props {
    value?: string;
    isSelected?: boolean;
    onselect: () => void;
    ondeselect: () => void;
  }

  const availableKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let {
    value = $bindable("0"),
    isSelected = $bindable(false),
    onselect,
    ondeselect,
  }: Props = $props();

  const selectSelf = () => {
    isSelected = true;
    console.log("selected");
    onselect();
  };

  const deselectSelf = () => {
    isSelected = false;
    console.log("deselected");
    ondeselect();
  };

  const handleClick = () => {
    if (isSelected) {
      deselectSelf();
    } else {
      selectSelf();
    }
  };

  const setValue = (newValue: string) => {
    if (!isSelected) return;

    if (newValue === "Backspace") {
      value = "";
      return;
    }

    if (availableKeys.includes(newValue)) {
      value = newValue;
    }
  };
</script>

<button
  onclick={handleClick}
  class="center-value tile inner"
  class:selected={isSelected}
  onkeydown={(e) => setValue(e.key)}
>
  {value}
</button>

<style lang="postcss">
  .center-value {
    @apply flex items-center justify-center;
  }

  .tile {
    @apply w-12 h-12;
  }

  .tile.inner {
    @apply border border-black;
  }

  .tile.selected {
    @apply bg-green-100;
  }
</style>
