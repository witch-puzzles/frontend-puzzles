<script lang="ts">
  import Button from "../../lib/Button.svelte";
  import { firebaseService } from "$lib/FirebaseService";
  import { goto } from "$app/navigation";

  let emailInput = $state("");
  let passwordInput = $state("");

  const handleLogin = async () => {
    try {
      const res = await firebaseService.signInWithEmailAndPassword(
        emailInput,
        passwordInput,
      );

      goto("/puzzle/select");
    } catch (err: any) {
      console.error("Error during login: ", err);
    }
  };
</script>

<div class="login-container">
  <div class="login-form">
    <h1>Log in</h1>

    <div class="input-container">
      <input bind:value={emailInput} type="email" placeholder="Email" />
    </div>

    <div class="input-container">
      <input
        bind:value={passwordInput}
        type="password"
        placeholder="Password"
      />
    </div>

    <div class="forgot-password">
      <a href="/forgot-password">Forgot your password?</a>
    </div>

    <div class="login-button">
      <Button
        onclick={handleLogin}
        text="Log in"
        type="primary"
        fontSize="30px"
      />
    </div>

    <div class="divider">or continue with</div>

    <div class="google-login">
      <img src="/images/google_logo.png" alt="Google Login" />
    </div>
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
    max-width: 400px;
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

