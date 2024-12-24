<script>
    export let text = '';
    export let type = 'primary';
    export let imageSrc = '';
    export let fontSize = '16px';
  </script>
  
  <button
    class={`button ${type}`}
    style={`
      font-size: ${fontSize};
      padding: calc(${fontSize} * 0.5) calc(${fontSize} * 1.5);
      border-radius: calc(${fontSize} * 2); /* Adjusted border-radius */
      ${type === 'image' ? `background-image: url(${imageSrc}); width: calc(${fontSize} * 2); height: calc(${fontSize} * 2);` : ''}
    `}
    on:click
  >
    {#if type !== 'image'}
      {text}
    {/if}
  </button>
  
  <style>
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      cursor: pointer;
    
      transition: all 0.2s;
    }
  
    .button.primary {
      background-color: #f88912;
      color: #fcfcfc;
    }
  
    .button.primary:hover {
      background-color: #e07810;
    }
  
    .button.secondary {
      background-color: transparent;
      color: #212121;
      text-align: center;
    }
  
    .button.secondary:hover {
      color: #000000;
    }
  
    .button.image {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border: 1px solid #212121;
      box-sizing: border-box;
    }
  </style>
  