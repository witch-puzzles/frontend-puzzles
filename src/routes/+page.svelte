<script lang="ts">
  import { initializeApp } from "firebase/app";
  import {
    getAuth,
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";

  let emailInput = $state("");
  let passwordInput = $state("");
  let statusText = $state("Get to typing!");
  let statusElement: HTMLParagraphElement;

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  const authEmulatorPort = import.meta.env.VITE_AUTH_EMULATOR_PORT;

  // comment out the line below to connect to the real service
  connectAuthEmulator(auth, `http://127.0.0.1:${authEmulatorPort}`);

  const setStatusSuccessStyle = () => {
    statusElement.classList.remove("text-red-700");
    statusElement.classList.add("text-green-700");
  };

  const statusError = (error) => {
    statusElement.classList.add("text-red-700");
    statusElement.classList.remove("text-green-700");
    statusText = `Error! ${error.code} See console for more info`;
    console.error(error);
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // signed up
        const user = userCredential.user;
        console.log("User registered");
        console.log(user);
        setStatusSuccessStyle();
        statusText = `Succesfully registered w/ email ${user.email}! See console for more info`;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode}\n${errorMessage}`);
        statusError(error);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`User signed in`);
        console.log(user);
        setStatusSuccessStyle();
        statusText = `Succesfully signed in w/ email ${user.email}! See console for more info`;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode}\n${errorMessage}`);
        statusError(error);
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
    <button onclick={register}>Register</button>
    <button onclick={signIn}>Sign in</button>
  </div>
  <p bind:this={statusElement} class="status">
    Status: {statusText}
  </p>
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

  .status {
    @apply font-bold text-lg;
  }
</style>
