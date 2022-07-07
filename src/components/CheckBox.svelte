<script>
    import checkmark from '../assets/check_mask.svg';
    export let checked = false;
    export let label = '';
</script>

<div class="checkbox-label">
  <label>
    <input type="checkbox" bind:checked />

    <div class="checkbox-toggle">
      <div class="checkbox-icon">
        {@html checkmark}
      </div>
    </div>
  </label>

  <div class="label">
    <span>
      {label}
    </span>
  </div>
</div>

<style>
  .checkbox-label {
    display: flex;
    height: 20px;
    line-height: 20px;
    align-items: center;
  }
  .checkbox-label label {
    position: relative;
  }
  input {
    position: absolute;
    width: 12px;
    height: 12px;
    z-index: -1;
    opacity: 0;
  }
  input:focus {
    outline: 0;
  }
  .checkbox-toggle {
    position: relative;
    height: 12px;
    width: 12px;
    display: flex;
    align-items: center;
  }
  .checkbox-toggle:before,
  .checkbox-toggle:after {
    background: rgba(255, 255, 255, 1);
    display: inline-block;
    position: absolute;
    content: "";
    opacity: 1;
    border-radius: 2px;
    filter: brightness(100%);
    height: 12px;
    width: 12px;
    transform-origin: center center;
  }

  .checkbox-toggle:before {
    z-index: -2;
  }

  .checkbox-toggle:after {
    z-index: -1;
    border: 1px solid rgba(32, 32, 32, 1);
  }

  label:hover .checkbox-toggle:after {
    border: 1px solid rgba(69, 150, 255, 1);
  }

  label:hover input:checked ~ .checkbox-toggle:after,
  label:hover input:checked ~ .checkbox-toggle:before {
    filter: brightness(90%);
  }

  input:checked ~ .checkbox-toggle:after,
  input:checked ~ .checkbox-toggle:before {
    background: rgba(69, 150, 255, 1);
    border: 1px solid rgba(69, 150, 255, 1);
  }

  input:checked ~ .checkbox-toggle:before {
    opacity: 0;
  }

  .checkbox-icon {
    display: inline-block;
    transform: scale(0);
    width: 10px;
    height: 10px;
    margin: auto;
  }

  input:checked ~ .checkbox-toggle .checkbox-icon {
    transform: scale(1);
    opacity: 1;
  }

  .label {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: rgba(32, 32, 32, 1);
    margin-left: 6px;
  }
</style>
