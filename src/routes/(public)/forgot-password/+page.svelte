<script lang="ts">
  import Button from "$lib/Button.svelte";
  import { firebaseService } from "$lib/FirebaseService.svelte";
  import { slide } from "svelte/transition";

  let emailInput = $state("");
  let passwordResetEmailSent = $state(false);

  const handlePasswordReset = async () => {
    await firebaseService.resetPassword(emailInput);

    passwordResetEmailSent = true;
    setInterval(() => {
      passwordResetEmailSent = false;
    }, 10000);
  };
</script>

<div class="login-container">
  <div class="login-form">
    <h1>Forgot Password :(</h1>

    <div class="input-container">
      <input bind:value={emailInput} type="email" placeholder="Email" />
    </div>

    <div class="login-button">
      <Button
        onclick={handlePasswordReset}
        text="Reset Password"
        type="primary"
        fontSize="30px"
      />
    </div>
    {#if passwordResetEmailSent}
      <p class="font-bold text-green-600" transition:slide>
        An e-mail with instructions on how to reset your password has been sent
        to {emailInput}.
      </p>
    {/if}
  </div>
</div>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    padding: 20px;
    background-color: #fcfcfc;
  }

  .login-form {
    width: 100%;
    max-width: 500px;
    text-align: center;
  }

  .login-form h1 {
    font-family: "Inter", sans-serif;
    font-size: 45px;
    font-weight: bold;
    color: #212121;
    margin-bottom: 20px;
  }

  .login-button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-container {
    margin-bottom: 30px;
  }

  .input-container input {
    width: 100%;
    padding: 15px;
    font-size: 22px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    border: 4px solid #000000;
    border-radius: 14px;
    outline: none;
  }

  .input-container input::placeholder {
    font-weight: 600;
  }

  .forgot-password {
    text-align: right;
    margin-bottom: 20px;
  }

  .forgot-password a {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #212121;
    text-decoration: none;
  }

  .forgot-password a:hover {
    text-decoration: underline;
  }

  .divider {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: #757575;
    margin: 20px 0;
  }

  .google-login {
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .google-login img {
    width: 55px;
    height: 55px;
  }
</style>
