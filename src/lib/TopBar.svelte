<script lang="ts">
  import Button from "./Button.svelte";
  import { firebaseService } from "./FirebaseService.svelte";

  interface Props {
    isLoggedIn: boolean;
  }

  let { isLoggedIn = false }: Props = $props();

  $effect(() => {
    isLoggedIn = firebaseService.currentUser !== null;
  });
</script>

<div class="topbar">
  <a href="/landing">
    <div class="logo" style="cursor: pointer;">
      <img src="/images/WitchPuzzleLogo.png" alt="WithPuzzles Logo" />
    </div>
  </a>

  <div class="buttons">
    {#if isLoggedIn}
      <a href="/leaderboard">
        <p class="px-4 py-2 rounded-2xl bg-[#FAA347] hover:bg-[#F88F1F] transition-colors duration-200">
          Leaderboard
        </p>
      </a>
      <a href="/profile">
        <p class="px-4 py-2 rounded-2xl bg-[#F88F1F] hover:bg-[#FAA347] transition-colors duration-200">
          Profile
        </p>      
      </a>
    {:else}
      <a href="/login">
        <p class="px-4 py-2 rounded-2xl bg-[#FAA347] hover:bg-[#F88F1F] transition-colors duration-200">
          Login
        </p>
      </a>
      <a href="/register">
        <p class="px-4 py-2 rounded-2xl bg-[#F88F1F] hover:bg-[#FAA347] transition-colors duration-200">
          Sign Up
        </p>
      </a>
    {/if}
  </div>
</div>

<style>
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: #fcfcfc;
    height: 85px;
    border-bottom: 1px solid #e0e0e0;
    font-family: "Inter", sans-serif;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    height: 48px;
    width: auto;
    margin-right: 0px;
  }
  .buttons {
    display: flex;
    gap: 30px;
    margin-right: 30px;
  }
</style>
