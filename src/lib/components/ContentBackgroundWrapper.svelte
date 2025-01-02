<script>
  let { padding = "p-8", maxWidth = "max-w-2xl", children } = $props();
</script>

<div
  class="relative mx-auto rounded-2xl backdrop-blur-md shadow-lg hover:duration-300 {padding} {maxWidth}"
>
  <div class="relative h-full w-full rounded-inherit">
    {@render children()}
  </div>
</div>
