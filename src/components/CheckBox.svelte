<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import checkmark from '../assets/check_mask.svg';
    export let checked = false;
    export let label = '';
    export let guideline = {};
</script>

<div class="checkbox-label">
  <label>
    <input
      disabled={!(
        (guideline.row.scales.length > 1 &&
          guideline.column.scales.length > 0) ||
        (guideline.column.scales.length > 1 && guideline.row.scales.length > 0)
      )}
      type="checkbox"
      on:change={() => {
        setTimeout(() => {
          dispatch("checkboxChange", checked);
        }, 0);
      }}
      bind:checked
    />

    <div class="checkbox-toggle">
      <div class="checkbox-icon">
        {@html checkmark}
      </div>
    </div>
    <div class="label">
      <span>
        {label}
      </span>
    </div>
  </label>
</div>

<style>
  .checkbox-label {
    display: flex;
    height: 20px;
    line-height: 12px;
    align-items: center;
  }
  .checkbox-label label {
    position: relative;
    display: flex;
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
    padding-left: 2px;
    padding-top: 1px;
  }

  input:checked ~ .checkbox-toggle .checkbox-icon {
    transform: scale(1);
    opacity: 1;
  }

  input[disabled] ~ .checkbox-toggle:after,
  input[disabled] ~ .checkbox-toggle:before {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .label {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: rgba(32, 32, 32, 1);
    margin-left: 6px;
  }
  :global(.jsdesign-dark) .label {
    color: rgba(255, 255, 255, 0.8);
  }
  :global(.jsdesign-dark) input[disabled] ~ .checkbox-toggle:after,
  :global(.jsdesign-dark) input[disabled] ~ .checkbox-toggle:before {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
</style>
