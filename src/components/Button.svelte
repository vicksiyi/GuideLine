<script>
    import "../style/button.css";
    export let hasMasters = false;
    export let text = "按钮";
</script>

<button
  class="js-design-button {hasMasters
    ? 'js-design-master-button'
    : 'js-design-second-button'}">{text}</button
>