<script lang="ts">
  import { slide } from "svelte/transition";
  import Button from "$lib/Button.svelte";
  import { firebaseService } from "$lib/FirebaseService.svelte";
  import { onMount } from "svelte";

  let displayName: string | null = $state("");
  let showPasswordReset = $state(false);

  let user = {
    puzzleRecords: [
      { name: "Sudoku", score: 5075 },
      { name: "Other puzzle", score: 231 },
      { name: "Other puzzle", score: 1200 },
      { name: "Other puzzle", score: 12000 },
      { name: "Other puzzle", score: 523 },
    ],
    avatar: "/images/Picture1.png",
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

  onMount(() => {
    if (!firebaseService.currentUser) return;
    displayName = firebaseService.currentUser.displayName;
  });
</script>

<div class="max-w-[1200px] mx-auto mt-[76px] mb-10 px-5">
  <div class="flex gap-10">
    <div class="flex-none w-[400px] pr-10">
      <div class="text-center">
        <div class="flex flex-col items-center gap-4">
          <img src={user.avatar} alt="Profile" class="w-48 h-48 rounded-full" />
          <div class="text-center">
            <h1 class="text-[45px] font-bold m-0">{displayName}</h1>
          </div>
        </div>

        <div class="mt-4 p-4 bg-white rounded-3xl shadow-sm">
          <div class="flex flex-col items-center gap-0">
            <Button
              text="Reset my Password"
              type="secondary"
              fontSize="24px"
              style="padding-left: 8px; padding-right: 8px;"
              onclick={() => (showPasswordReset = !showPasswordReset)}
            />

            {#if showPasswordReset}
              <div class="w-full mt-6" transition:slide>
                <div class="flex flex-col gap-4 w-full">
                  <div class="flex justify-center gap-4 mt-2">
                    <Button
                      text="Reset"
                      type="primary"
                      fontSize="16px"
                      onclick={handlePasswordReset}
                    />
                    <Button
                      text="Cancel"
                      type="secondary"
                      fontSize="16px"
                      onclick={() => (showPasswordReset = false)}
                    />
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
      </div>
    </div>

    <div class="flex-1 pl-10">
      <div class="bg-white rounded-3xl p-6 shadow-sm">
        <h2 class="text-[45px] font-bold mb-5 text-center">
          My records
          <img
            src="/images/Picture2.png"
            alt="Trophy"
            class="inline-block w-[41px] h-[41px] -mb-[6px] ml-1"
          />
        </h2>
        <div class="space-y-4">
          {#each user.puzzleRecords as record}
            <div class="bg-white rounded-3xl p-4 px-6 shadow-sm">
              <div class="flex items-center">
                <span class="font-semibold text-xl flex-1">{record.name}</span>
                <div class="w-px h-9 bg-gray-200 mx-6"></div>
                <span class="font-semibold text-sm flex-1 text-right">
                  {record.score}
                  <img
                    src="/images/Picture2.png"
                    alt="Trophy"
                    class="inline-block w-3.5 h-3.5 -mb-0.5 ml-0.5"
                  />
                </span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
