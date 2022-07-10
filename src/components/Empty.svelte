<script>
    import empty from "../assets/empty.svg"
    import empty_dark from "../assets/empty_dark.svg"
    export let text = "";
    export let themes = 'light';
</script>

<div class="empty">
  <div class="empty-svg">
    {@html themes === "light" ? empty : empty_dark}
  </div>
  <span class="empty-text">{text}</span>
</div>

<style>
  .empty {
    text-align: center;
  }
  .empty-svg {
    width: 120px;
    height: 90px;
    margin: 16px auto;
  }
  .empty-text {
    width: 100%;
    color: rgba(32, 32, 32, 0.6);
    font-size: 12px;
    margin-bottom: 16px;
  }
  :global(.jsdesign-dark) .empty-text {
    color: rgba(255, 255, 255, 0.8);
  }
</style>
