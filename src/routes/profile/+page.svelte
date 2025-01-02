<script lang="ts">
  import { slide } from 'svelte/transition';
  import Button from '../../lib/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';

  // Mock user data - replace with actual user data later
  let user = {
    name: 'Rumeysa',
    puzzleRecords: [
      { name: 'Sudoku', score: 5075 },
      { name: 'Other puzzle', score: 231 },
      { name: 'Other puzzle', score: 1200 },
      { name: 'Other puzzle', score: 12000 },
      { name: 'Other puzzle', score: 523 }
    ],
    avatar: '/images/Picture1.png'
  };

  let oldPassword = '';
  let newPassword = '';
  let showPasswordReset = false;
</script>

<div class="profile-container">
  <div class="content-wrapper">
    <div class="left-column">
      <div class="profile-header">
        <div class="avatar-section">
          <img src={user.avatar} alt="Profile" class="avatar" />
          <div class="name-container">
            <h1>{user.name}</h1>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-content">
            <Button 
              text="Reset my Password" 
              type="secondary" 
              fontSize="24px"
              style="padding-left: 8px; padding-right: 8px;"
              on:click={() => showPasswordReset = !showPasswordReset} 
            />
            
            {#if showPasswordReset}
              <div class="password-reset" transition:slide>
                <div class="password-form">
                  <input type="password" bind:value={oldPassword} placeholder="Old password" />
                  <input type="password" bind:value={newPassword} placeholder="New password" />
                  <div class="button-row">
                    <Button text="Reset" type="primary" fontSize="16px" />
                    <Button 
                      text="Cancel" 
                      type="secondary" 
                      fontSize="16px" 
                      on:click={() => showPasswordReset = false}
                    />
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <div class="right-column">
      <div class="records-section">
        <h2>
          My records 
          <img src="/images/Picture2.png" alt="Trophy" class="title-trophy" />
        </h2>
        <div class="records-list">
          {#each user.puzzleRecords as record}
            <div class="record-container">
              <div class="record-item">
                <span class="puzzle-name">{record.name}</span>
                <div class="divider"></div>
                <span class="score">
                  {record.score} 
                  <img src="/images/Picture2.png" alt="Trophy" class="trophy-icon" />
                </span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .profile-container {
    max-width: 1200px;
    margin: 76px auto 40px;
    padding: 0 20px;
  }

  .content-wrapper {
    display: flex;
    gap: 40px;
  }

  .left-column {
    flex: 0 0 400px;
    border-right: 1px solid #e0e0e0;
    padding-right: 40px;
  }

  .right-column {
    flex: 1;
    padding-left: 40px;
  }

  .profile-header {
    text-align: center;
  }

  .avatar {
    width: 192px;
    height: 192px;
    border-radius: 50%;
    margin-bottom: 0;
  }

  h1 {
    font-size: 45px;
    font-weight: bold;
    margin: 0;
  }

  h2 {
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }

  .records-section {
    background: white;
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .record-container {
    background: white;
    border-radius: 24px;
    padding: 16px 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    margin-bottom: 16px;
    position: relative;
  }

  .record-container:last-child {
    margin-bottom: 0;
  }

  .record-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    position: relative;
  }

  .record-item:last-child {
    border-bottom: none;
  }

  .password-reset {
    width: 100%;
    margin-top: 23px;
  }

  .password-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  input {
    padding: 12px;
    border: 4px solid #000000;
    border-radius: 14px;
    font-size: 16px;
    font-weight: 600;
  }

  input::placeholder {
    font-weight: 600;
  }

  .puzzle-name {
    font-weight: 600;
    font-size: 20px;
    flex: 1;
    text-align: left;
  }

  .score {
    font-weight: 600;
    font-size: 15px;
    flex: 1;
    text-align: right;
  }

  .settings-section {
    margin-top: 16px;
    padding: 16px;
    background: white;
    border-radius: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .settings-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .avatar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .avatar {
    width: 192px;
    height: 192px;
    border-radius: 50%;
    margin-bottom: 0;
  }

  .name-container {
    text-align: center;
  }

  h1 {
    font-size: 45px;
    font-weight: bold;
    margin: 0;
  }

  .password-reset {
    width: 100%;
  }

  .password-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .button-row {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 8px;
  }

  h2 {
    font-size: 45px;
    margin-bottom: 20px;
    text-align: center;
  }

  .trophy-icon {
    width: 14px;
    height: 14px;
    vertical-align: -2px;
    display: inline-block;
    margin-left: 2px;
  }

  .title-trophy {
    width: 41px;
    height: 41px;
    vertical-align: -6px;
    display: inline-block;
    margin-left: 4px;
  }

  .divider {
    width: 1px;
    height: 36px;
    background-color: #e0e0e0;
    margin: 0 24px;
    align-self: center;
  }
</style>
