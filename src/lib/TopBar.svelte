<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "./Button.svelte";

  interface Props {
    isLoggedIn: boolean;
  }

  let { isLoggedIn = false }: Props = $props();
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
        <Button text="Leaderboard" type="primary" />
      </a>
      <a href="/profile">
        <Button type="image" imageSrc="/images/placeholder.png" />
      </a>
    {:else}
      <a href="/login">
        <Button text="Login" type="secondary" />
      </a>
      <a href="/register">
        <Button text="Get Started" type="primary" />
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
  .logo span {
    font-size: 18px;
    font-weight: 600;
    color: #212121;
  }
  .buttons {
    display: flex;
    gap: 30px;
    margin-right: 30px;
  }
</style>
