<script>
    export let label = "";
    export let value = "";
</script>

<div class="input-container">
  <label for="text-input"> {label} </label>
  <div class="panel">
    <input
      name="text-input"
      class="text-input"
      id="text-input"
      type="text"
      bind:value
    />
  </div>
</div>

<style>
  .input-container {
    width: 100%;
    display: flex;
    height: 28px;
    font-size: 12px;
    color: rgba(32, 32, 32, 0.6);
  }
  :global(.jsdesign-dark) .input-container {
    color: rgba(255, 255, 255, 0.5);
  }
  .input-container label {
    padding: 4px 0;
    line-height: 20px;
  }
  .input-container .panel {
    display: flex;
    background-color: rgba(0, 0, 0, 0.03);
    margin-left: 8px;
    width: 99px;
    align-items: center;
    border-radius: 4px;
  }
  :global(.jsdesign-dark) .input-container .panel {
    background-color: rgba(0, 0, 0, 0.1);
  }
  :global(.jsdesign-dark) .input-container .panel:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
  :global(.jsdesign-dark) .panel .text-input {
    color: rgba(255, 255, 255, 0.8);
  }
  :global(.jsdesign-dark) .panel .text-input:focus {
    color: rgba(255, 255, 255, 1);
  }
  .panel .text-input {
    flex: 1;
    background-color: transparent;
    border: transparent;
    width: 43px;
    height: 20px;
    padding-right: 4px;
    margin: 0 4px;
    font-size: 12px;
    line-height: 28px;
  }
  .panel .text-input,
  .panel .text-input:focus,
  .panel .text-input:active {
    border: none !important;
    outline: none;
  }
</style>
