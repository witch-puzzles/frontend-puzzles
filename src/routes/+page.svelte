<script lang="ts">
  import { initializeApp } from "firebase/app";
  import {
    getAuth,
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";

  let emailInput: string;
  let passwordInput: string;

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  connectAuthEmulator(auth, "http://127.0.0.1:9099");

  const register = () => {
    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // signed up
        const user = userCredential.user;
        console.log("User registered");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode}\n${errorMessage}`);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`User signed in`);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode}\n${errorMessage}`);
      });
  };
</script>

<div class="vertical-flex">
  <h1>Welcome to Witch Puzzles Dummy Auth UI!</h1>
  <div class="vertical-flex">
    <input type="text" placeholder="Email" bind:value={emailInput} />
    <input type="text" placeholder="Password" bind:value={passwordInput} />
  </div>
  <div>
    <button on:click={register}>Register</button>
    <button on:click={signIn}>Sign in</button>
  </div>
</div>

<style lang="postcss">
  h1 {
    @apply font-extrabold text-2xl;
  }

  button {
    @apply p-1 text-white bg-orange-500 border-2 border-black;
  }

  input {
    @apply p-1 border-2 border-black;
  }

  .vertical-flex {
    @apply flex flex-col items-center gap-2;
  }
</style>
