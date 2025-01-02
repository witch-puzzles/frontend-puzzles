<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "./Button.svelte";

  interface Props {
    isLoggedIn: boolean;
  }

  let { isLoggedIn = false }: Props = $props();
</script>

<div class="topbar">
  <div class="logo" on:click={() => goto("/landing")} style="cursor: pointer;">
    <img src="/images/WitchPuzzleLogo.png" alt="WithPuzzles Logo" />
  </div>

  <div class="buttons">
    {#if isLoggedIn}
      <Button
        text="Leaderboard"
        type="primary"
        on:click={() => goto("/leaderboard")}
      />
      <Button
        type="image"
        imageSrc="/images/placeholder.png"
        on:click={() => goto("/profile")}
      />
    {:else}
      <Button text="Login" type="secondary" on:click={() => goto("/login")} />
      <Button
        text="Get Started"
        type="primary"
        on:click={() => goto("/register")}
      />
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

