<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import "../style/button.css";
    export let hasMasters = false;
    export let disabled = false;
    export let text = "按钮";
</script>

<button
  {disabled}
  class="js-design-button {hasMasters
    ? 'js-design-master-button'
    : 'js-design-second-button'}"
  on:click={() => {
    dispatch("click");
  }}>{text}</button
>
