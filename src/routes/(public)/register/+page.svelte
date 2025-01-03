<script lang="ts">
  import Button from "../../lib/Button.svelte";
  import { firebaseService } from "$lib/FirebaseService";
  import { userService } from "$lib/UserService";
  import { goto } from "$app/navigation";

  let emailInput = $state("");
  let passwordInput = $state("");

  const handleRegister = async () => {
    try {
      const res = await firebaseService.createUserWithEmailAndPassword(
        emailInput,
        passwordInput,
      );

      userService.createUser(emailInput);

      goto("/puzzle/select");
    } catch (err: any) {
      console.error("Error during registration: ", err);
    }
  };
</script>

<div class="register-container">
  <div class="register-form">
    <h1>Register</h1>

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

    <div class="register-button">
      <Button
        onclick={handleRegister}
        text="Register"
        type="primary"
        fontSize="30px"
      />
    </div>

    <div class="divider">or continue with</div>

    <div class="google-register">
      <img src="/images/google_logo.png" alt="Google register" />
    </div>
  </div>
</div>

<style>
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    padding: 20px;
    background-color: #fcfcfc;
  }

  .register-form {
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  .register-form h1 {
    font-family: "Inter", sans-serif;
    font-size: 45px;
    font-weight: bold;
    color: #212121;
    margin-bottom: 20px;
  }

  .register-button {
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

  .divider {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: #757575;
    margin: 20px 0;
  }

  .google-register {
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .google-register img {
    width: 55px;
    height: 55px;
  }
</style>
