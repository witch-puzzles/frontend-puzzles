<script>
  import Timer from "./Timer.svelte";
</script>

<div
  class="flex flex-col justify-center items-center p-4 bg-orange-100 rounded-lg shadow-md border-2 border-orange-300 gap-4"
>
  <p class="text-2xl font-bold">Congratulations! Your time:</p>
  <Timer />
  <button
    class="px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
  >
    See the Leaderboard
  </button>
</div>
