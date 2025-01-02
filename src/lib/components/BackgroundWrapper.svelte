<script lang="ts">
  let { children } = $props();
</script>

<div id="app">
  <div id="star-container">
    <!-- Background elements -->
    <div id="star-pattern"></div>
    <div id="star-gradient-overlay"></div>

    <!-- Content wrapper with higher z-index -->
    <div class="content-wrapper">
      {@render children()}
    </div>
  </div>
</div>

<style>
  :root {
    --glow-rgb: 245 245 245;
    --light-gold-rgb: 249 181 51;
    --dark-gold-rgb: 215 147 23;
  }

  #app {
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  #star-container {
    background: radial-gradient(
      rgb(var(--light-gold-rgb)),
      rgb(var(--dark-gold-rgb))
    );
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  /* Background elements */
  #star-pattern {
    background-image: url("https://assets.codepen.io/1468070/Star+Pattern+3.svg");
    background-size: 10%;
    position: absolute;
    left: 50%;
    top: 0px;
    translate: -50% 0%;
    height: 100%;
    width: 100%;
    min-width: 1200px;
    opacity: 0.1;
    animation: pan 180s linear infinite;
    will-change: background-position;
    z-index: 1;
  }

  #star-gradient-overlay {
    background: radial-gradient(
      circle,
      transparent 75%,
      rgb(var(--dark-gold-rgb))
    );
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    z-index: 2;
  }

  /* Content wrapper styles */
  .content-wrapper {
    position: relative;
    z-index: 10; /* Ensures content stays above background elements */
    height: 100%;
    width: 100%;
  }

  @keyframes pan {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 0%;
    }
  }

  @keyframes move-background {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -100% 0%;
    }
  }

  @keyframes bounce {
    0%,
    20%,
    100% {
      translate: 0% 0%;
    }
    10% {
      translate: 0% -12%;
    }
  }

  @keyframes blink {
    0%,
    3%,
    100% {
      scale: 1 1;
    }
    1.5% {
      scale: 1 0;
    }
  }

  @keyframes fall-1 {
    0% {
      transform: translate(0px, 0px) rotateX(45deg) rotateY(30deg) rotateZ(0deg)
        scale(0.25);
      opacity: 0;
    }
    5% {
      transform: translate(10px, -10px) rotateX(45deg) rotateY(30deg)
        rotateZ(0deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(25px, 200px) rotateX(180deg) rotateY(270deg)
        rotateZ(90deg) scale(1);
      opacity: 0;
    }
  }
</style>
