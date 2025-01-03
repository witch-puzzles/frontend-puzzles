<script lang="ts">
  interface Props {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    placeholder?: string;
    label?: string;
    required?: boolean;
    name?: string;
    disabled?: boolean;
  }

  let {
    value = $bindable(0),
    min = undefined,
    max = undefined,
    step = 1,
    placeholder = "Enter a number",
    label = "",
    required = false,
    name = "",
    disabled = false,
  }: Props = $props();

  const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const newValue = input.valueAsNumber;

    if (!isNaN(newValue)) {
      if (max !== undefined && newValue > max) {
        value = max;
      } else if (min !== undefined && newValue < min) {
        value = min;
      } else {
        value = newValue;
      }
    }
  };

  // Handle increment/decrement buttons
  const increment = () => {
    if (!disabled && (max === undefined || value + step <= max)) {
      value += step;
    }
  };

  const decrement = () => {
    if (!disabled && (min === undefined || value - step >= min)) {
      value -= step;
    }
  };
</script>

<div class="w-full">
  {#if label}
    <label for={name} class="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {#if required}
        <span class="text-red-500">*</span>
      {/if}
    </label>
  {/if}

  <div class="relative flex">
    <button
      type="button"
      onclick={decrement}
      disabled={disabled || (min !== undefined && value <= min)}
      class="absolute left-0 top-0 h-full px-3 flex items-center justify-center
        text-gray-600 hover:text-[#F88912] disabled:text-gray-300
        border-r border-gray-300 bg-gray-50
        disabled:bg-gray-100 disabled:cursor-not-allowed
        rounded-l-lg transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
      </svg>
    </button>

    <input
      type="number"
      {name}
      {min}
      {max}
      {step}
      {disabled}
      {required}
      {placeholder}
      {value}
      oninput={handleInput}
      class="block w-full px-12 py-2 text-gray-900 border border-gray-300
        rounded-lg bg-white focus:ring-2 focus:ring-[#F88912] focus:border-[#F88912]
        disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    />

    <button
      type="button"
      onclick={increment}
      disabled={disabled || (max !== undefined && value >= max)}
      class="absolute right-0 top-0 h-full px-3 flex items-center justify-center
        text-gray-600 hover:text-[#F88912] disabled:text-gray-300
        border-l border-gray-300 bg-gray-50
        disabled:bg-gray-100 disabled:cursor-not-allowed
        rounded-r-lg transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  </div>
</div>
