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
  class="tile"
  class:selected={isSelected}
  class:highlighted={!isSelected && isHighlighted}
  class:disabled
  onkeydown={(e) => setValue(e.key)}
>
  {value}
</button>

<style lang="postcss">
  .tile {
    @apply flex items-center justify-center w-12 h-12 text-lg font-semibold transition-colors duration-200 ease-in-out bg-white border border-orange-300 hover:bg-orange-50 focus:outline-none;
  }

  .selected {
    @apply bg-orange-300;
  }

  .highlighted {
    @apply bg-orange-200;
  }

  .disabled {
    @apply bg-orange-50 text-orange-800 cursor-not-allowed;
  }
</style>
