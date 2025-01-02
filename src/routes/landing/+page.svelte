<script>
  import Button from '../../lib/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<div class="landing-container">
  <!-- Hero Section -->
  <div class="hero-section">
    <h1>Greeting Text</h1>
    <Button 
      text="Start today" 
      type="primary" 
      fontSize="24px"
      on:click={() => goto('/register')}
    />
  </div>

  <!-- Features Section -->
  <div class="features-section">
    <div class="feature">
      <h2>Choose from large repertoire</h2>
      <div class="puzzle-icon">
        <img src="/images/Picture3.png" alt="Sudoku puzzle icon" class="repertoire-image" />
      </div>
    </div>

    <div class="feature">
      <h2>Be the best among your friends !</h2>
      <div class="leaderboard">
        <div class="podium">
          <!-- Second Place -->
          <div class="player-card second">
            <img src="/images/avatars/x-fredd5.png" alt="Player avatar" class="avatar" />
            <span class="username">X-fredd5</span>
            <div class="score-badge">
              <span class="rank">2</span>
              <span class="points">320 pts</span>
            </div>
          </div>

          <!-- First Place -->
          <div class="player-card first">
            <img src="/images/avatars/antonio12.png" alt="Player avatar" class="avatar" />
            <span class="username">Antonio12</span>
            <div class="score-badge">
              <span class="rank">1</span>
              <span class="points">420 pts</span>
            </div>
          </div>

          <!-- Third Place -->
          <div class="player-card third">
            <img src="/images/avatars/lucas123.png" alt="Player avatar" class="avatar" />
            <span class="username">Lucas123</span>
            <div class="score-badge">
              <span class="rank">3</span>
              <span class="points">201 pts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <div class="about-section">
    <h2>About us... (Github API)</h2>
  </div>
</div>

<style>
  .landing-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .hero-section {
    background-color: #f88912;
    width: 100%;
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .hero-section h1 {
    color: white;
    font-size: 64px;
    font-weight: bold;
    text-align: center;
  }

  .features-section {
    display: flex;
    justify-content: space-between;
    padding: 80px 120px;
    width: 100%;
    max-width: 1400px;
    gap: 80px;
  }

  .feature {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .feature h2 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    color: #212121;
  }

  .puzzle-icon {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .repertoire-image {
    width: 120px;
    height: auto;
  }

  .podium {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    padding: 20px;
  }

  .player-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .player-card.first {
    transform: scale(1.1);
  }

  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  .username {
    font-weight: 600;
    font-size: 16px;
  }

  .score-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 24px;
    border-radius: 12px;
    background-color: #f5f5f5;
  }

  .first .score-badge {
    background-color: #ffd700;
  }

  .second .score-badge {
    background-color: #e0e0e0;
  }

  .third .score-badge {
    background-color: #f88912;
  }

  .rank {
    font-size: 24px;
    font-weight: bold;
  }

  .points {
    font-size: 14px;
  }

  .about-section {
    width: 100%;
    padding: 60px 20px;
    background-color: #212121;
    display: flex;
    justify-content: center;
  }

  .about-section h2 {
    color: white;
    font-size: 48px;
    font-weight: bold;
  }
</style>
