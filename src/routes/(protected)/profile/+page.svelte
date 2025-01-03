<script lang="ts">
  import { slide } from "svelte/transition";
  import Button from "$lib/Button.svelte";
  import { firebaseService } from "$lib/FirebaseService.svelte";
  import { recordsService } from "$lib/RecordsService";
  import { onMount } from "svelte";
  import RecordList from "$lib/components/RecordList.svelte";
  import type { RecordListDto } from "$lib/dto/Record.dto";
  import DifficultySelector from "$lib/components/DifficultySelector.svelte";
  import { PuzzleDifficulty } from "$lib/Puzzle";
  import { userService } from "$lib/UserService";
  import { Computer, Icon } from "lucide-svelte";

  let displayName: string | null = $state("");
  let showPasswordReset = $state(false);

  let isAdmin = $state(false);

  let difficulties: PuzzleDifficulty[] = $state([
    PuzzleDifficulty.Easy,
    PuzzleDifficulty.Medium,
    PuzzleDifficulty.Hard,
  ]);
  let selectedDifficulty: PuzzleDifficulty = $state(PuzzleDifficulty.Easy);

  let recordsData: RecordListDto | null = $state(null);

  let user = {
    puzzleRecords: [
      { name: "Sudoku", score: 5075 },
      { name: "Other puzzle", score: 231 },
      { name: "Other puzzle", score: 1200 },
      { name: "Other puzzle", score: 12000 },
      { name: "Other puzzle", score: 523 },
    ],
    avatar: "/profile_picture.png",
  };

  let passwordResetEmailSent = $state(false);
  const handlePasswordReset = async () => {
    if (!firebaseService.currentUser) return;

    await firebaseService.resetPassword(firebaseService.currentUser.email);

    passwordResetEmailSent = true;
    setInterval(() => {
      passwordResetEmailSent = false;
    }, 10000);
  };

  $effect(async () => {
    recordsData = await recordsService.getRecords(selectedDifficulty);
  });

  onMount(async () => {
    if (!firebaseService.currentUser) return;
    displayName = firebaseService.currentUser.displayName;

    isAdmin = await userService.amIAdmin();
  });
</script>

<div class="max-w-[1200px] mx-auto mt-[76px] mb-10 px-5">
  <div class="flex gap-10">
    <div class="flex-none w-[400px] pr-10">
      <div class="text-center">
        <div class="flex flex-col items-center gap-4">
          <img src={user.avatar} alt="Profile" class="w-48 h-48 rounded-full" />
          <div class="text-center">
            <h1 class="text-2xl font-bold m-0">{displayName}</h1>
          </div>
        </div>

        <div class="mt-4 p-4 bg-white rounded-3xl shadow-sm">
          <div class="flex flex-col items-center gap-0">
            <button
              class="outline-none focus:outline-none font-bold text-zinc-700 hover:text-green-600 transition-colors duration-200"
              onclick={() => (showPasswordReset = !showPasswordReset)}
            >
              Reset my password
            </button>

            {#if showPasswordReset}
              <div class="w-full mt-6" transition:slide>
                <div class="flex flex-col gap-4 w-full">
                  <div class="flex justify-center gap-4 mt-2">
                    <button
                      class="outline-none focus:outline-none px-2 font-bold text-zinc-700 hover:text-green-600 transition-colors duration-200"
                      onclick={handlePasswordReset}
                    >
                      Reset
                    </button>
                    <button
                      class="outline-none focus:outline-none px-2 font-bold text-zinc-700 hover:text-red-600 transition-colors duration-200"
                      onclick={() => (showPasswordReset = false)}
                    >
                      Cancel
                    </button>
                  </div>
                  {#if passwordResetEmailSent}
                    <p class="font-bold text-green-600" transition:slide>
                      An e-mail with instructions on how to reset your password
                      has been sent to your registered address.
                    </p>
                  {/if}
                </div>
              </div>
            {/if}
          </div>
        </div>
        {#if isAdmin}
          {@const Icon = Computer}
          <a href="/admin">
            <div class="w-fit h-fit">
              <Icon class="inline-block" size={20}></Icon>
            </div>
          </a>
        {/if}
      </div>
    </div>

    <div class="flex flex-col items-center w-full">
      <DifficultySelector {difficulties} bind:selectedDifficulty />
      {#if recordsData}
        <RecordList {recordsData} />
      {/if}
    </div>
  </div>
</div>
