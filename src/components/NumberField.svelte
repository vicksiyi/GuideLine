<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let base = true;
    export let value = 1;
    export let placeholder = '';
    export let step = 1;
    export let disabled = false;
    export let min = 0;
    export let max = Math.max;
</script>

{#if base}
  <label for="input-label">
    <div class="left-side">
      <div class="label">
        <slot name="textfield-label" />
      </div>
    </div>
    <div class="right-side {disabled ? 'right-disabled' : ''}" input>
      <input
        type="number"
        bind:value
        {placeholder}
        {step}
        {disabled}
        {min}
        {max}
        on:change={() => {
          dispatch("inputChange", { value });
        }}
        on:click={(event) => event.currentTarget.select()}
      />
      <div class="unit-measure">
        <slot name="unit-measure" />
      </div>
    </div>
  </label>
{:else}
  <label for="input-label">
    <div class="left-side">
      <div class="label">
        <slot name="textfield-label" />
      </div>
    </div>
    <div class="right-side right-scale" scale>
      {#each value as item, index}
        <input
          type="number"
          bind:value={item}
          {disabled}
          on:click={(event) => event.currentTarget.select()}
          on:change={() => {
            dispatch("inputChange");
          }}
        />
        {#if value.length !== index + 1}
          <span>:</span>
        {/if}
      {/each}
    </div>
  </label>
{/if}

<style>
  label {
    display: flex;
    margin: 8px 0;
    line-height: 26px;
  }
  .label {
    font-size: 12px;
    color: rgba(32, 32, 32, 0.8);
  }
  :global(.jsdesign-dark) .label {
    color: rgba(255, 255, 255, 0.8);
  }
  .left-side {
    width: auto;
    white-space: nowrap;
    margin-right: 8px;
  }
  .right-side {
    display: inline-flex;
    border-radius: 4px;
    height: 26px;
    justify-content: space-between;
    flex: 1;
    background-color: rgba(0, 0, 0, 0.02);
  }
  :global(.jsdesign-dark) .right-side[input] {
    background-color: rgba(0, 0, 0, 0.1);
  }
  :global(.jsdesign-dark) .right-side[input]:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
  .right-disabled {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .right-side input {
    background: transparent;
    border: transparent;
    font-weight: 400;
    padding: 3px 8px;
    font-size: 12px;
    width: 100%;
    border-radius: 4px;
    color: rgba(32, 32, 32, 1);
  }
  :global(.jsdesign-dark) .right-side input {
    color: rgba(255, 255, 255, 0.8);
  }
  :global(.jsdesign-dark) .right-side[scale] input {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .right-side input::-webkit-inner-spin-button,
  .right-side input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .right-side input:focus {
    outline: transparent;
  }
  .right-side .unit-measure {
    padding: 3px 6px;
    line-height: 20px;
    color: rgba(32, 32, 32, 0.4);
    font-size: 12px;
    white-space: nowrap;
  }
  :global(.jsdesign-dark) .right-side .unit-measure {
    color: rgba(255, 255, 255, 0.3);
  }

  .right-scale {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    background: none;
    justify-content: start;
    align-items: center;
  }

  .right-scale input {
    width: 30px;
    background-color: rgba(0, 0, 0, 0.02);
    padding: 3px 4px;
  }

  .right-scale span {
    margin: 0 2px;
    color: rgba(32, 32, 32, 0.3);
  }
</style>
