<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import {baseIcon} from "../common/variables";
    export let saveCardList = [];
    export let selected = [];
</script>

<div class="save-card">
  {#each saveCardList as item, index}
    <div
      class="card {selected.indexOf(index) !== -1 ? 'active-card' : ''}"
      on:click={() => {
        dispatch("activeChange", { index });
      }}
    >
      {@html item.icon ? item.icon : baseIcon}
      <span>{item.name}</span>
    </div>
  {/each}
</div>

<style>
  .save-card {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .save-card .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 50px;
    padding: 5px 0;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .save-card .active-card,
  .save-card .card:hover {
    border: 1px solid rgba(69, 150, 255, 1);
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 4px;
  }
  .save-card .card:nth-child(3n + 1) {
    margin-left: 18px;
  }
  .save-card .card:nth-child(3n + 2) {
    margin-left: 36px;
  }
  .save-card .card:nth-child(3n + 3) {
    margin-left: 38px;
  }
  .save-card .card:nth-child(n + 4) {
    margin-top: 16px;
  }
  .save-card .card span {
    font-size: 8px;
    margin-top: 8px;
    color: rgba(32, 32, 32, 0.8);
  }
</style>
