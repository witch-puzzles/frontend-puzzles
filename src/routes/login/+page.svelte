<script>
    import Button from '../../lib/Button.svelte'; // Reuse the updated Button component
  </script>
  
  <div class="login-container">
    <!-- Login Form -->
    <div class="login-form">
      <h1>Log in</h1>
  
      <!-- Email Input -->
      <div class="input-container">
        <input type="email" placeholder="Email" />
      </div>
  
      <!-- Password Input -->
      <div class="input-container">
        <input type="password" placeholder="Password" />
      </div>
  
      <!-- Forgot Password -->
      <div class="forgot-password">
        <a href="/forgot-password">Forgot your password?</a>
      </div>
  
      <!-- Login Button -->
      <Button text="Log in" type="primary" fontSize="30px" />
  
      <!-- Divider -->
      <div class="divider">or continue with</div>
  
      <!-- Google Login -->
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
      font-family: 'Inter', sans-serif;
      font-size: 45px;
      font-weight: bold;
      color: #212121;
      margin-bottom: 20px;
    }
  
    .input-container {
      margin-bottom: 30px;
    }
  
    .input-container input {
      width: 100%;
      padding: 15px;
      font-size: 22px;
      font-family: 'Inter', sans-serif;
      font-weight: 600; /* Make placeholder semi-bold */
      border: 4px solid #000000;
      border-radius: 14px;
      outline: none;
    }
  
    .input-container input::placeholder {
      font-weight: 600; /* Make placeholder text semi-bold */
    }
  
    .forgot-password {
      text-align: right;
      margin-bottom: 20px;
    }
  
    .forgot-password a {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600; /* Make "forgot password" text semi-bold */
      color: #212121;
      text-decoration: none;
    }
  
    .forgot-password a:hover {
      text-decoration: underline;
    }
  
    .divider {
      font-family: 'Inter', sans-serif;
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
  