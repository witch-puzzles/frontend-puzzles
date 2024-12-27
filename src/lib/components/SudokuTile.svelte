<script lang="ts">
  interface Props {
    value?: string;
    isSelected?: boolean;
    isHighlighted?: boolean;
    disabled?: boolean;
    onselect: () => void;
    ondeselect: () => void;
  }

  const availableKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let {
    value = $bindable(""),
    isSelected = false,
    isHighlighted = false,
    disabled = false,
    onselect,
    ondeselect,
  }: Props = $props();

  const selectSelf = () => {
    isSelected = true;
    onselect();
  };

  const deselectSelf = () => {
    isSelected = false;
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
  {disabled}
  class="center-value tile"
  class:selected={isSelected}
  class:highlighted={!isSelected && isHighlighted}
  onkeydown={(e) => setValue(e.key)}
>
  {value}
</button>

<style lang="postcss">
  .center-value {
    @apply flex items-center justify-center;
  }

  .tile {
    @apply w-12 h-12 border border-black;
  }

  .tile.selected {
    @apply bg-blue-100;
  }

  .tile.highlighted {
    @apply bg-orange-100;
  }
</style>
