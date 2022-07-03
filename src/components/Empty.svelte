<script>
    import empty from "../assets/empty.svg"
    export let text = "";
</script>

<div class="empty">
  <div class="empty-svg">
    {@html empty}
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
</style>
