<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let tags = [];
    export let active = -1;

    function activeChange(active){
        dispatch('activeChange', {active});
    }
</script>

<ul class="tags">
  {#each tags as item, index}
    <li
      class="item {active == index ? 'active' : ''}"
      on:click={() => {
        activeChange(index);
      }}
    >
      {item}
    </li>
  {/each}
</ul>

<style>
  .tags {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    height: 36px;
  }
  .tags > li {
    flex: 1;
    text-align: center;
    line-height: 36px;
    color: rgba(32, 32, 32, 1);
    font-size: 12px;
    border-bottom: 1px solid rgba(218, 218, 220, 0.6);
  }
  :global(.jsdesign-dark) .tags > li {
    color: rgba(255, 255, 255, 0.8);
    border-bottom: rgba(23, 25, 31, 0.6);
  }
  :global(.jsdesign-dark) .tags > li.active {
    color: rgba(69, 150, 255, 1);
  }
  .tags > li.active {
    border-bottom: 2px solid rgba(69, 150, 255, 1);
  }
</style>
