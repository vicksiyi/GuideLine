<script>
    import Tags from "./components/Tags.svelte";
    import Card from "./components/Card.svelte";
    import {tags} from "./common/variables";
    let active = 0;

    function handleActiveChange(event) {
        active = event.detail.active;
	}
</script>

<main>
  <!-- 头部选择栏 -->
  <Tags on:activeChange={handleActiveChange} {tags} {active} />
  <div class="content">
    <!-- 辅助线 -->
    <div class="guide-line">
      <Card />
    </div>
    <!-- 自定义 -->
    <!-- 已保存 -->
  </div>
</main>

<style>
  :global(.toast) {
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
    padding: 8px 16px;
    border: 1px solid #909399;
    border-radius: 4px;
    background-color: #909399;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    color: #ffffff;
    transition: all 0.5s ease-in-out;
    text-align: center;
    font-size: 12px;
  }

  :global(.toast--error) {
    border: 1px solid #f56c6c;
    background-color: #f56c6c;
  }

  :global(.toast--warning) {
    border: 1px solid #E6A23C;
    background-color: #E6A23C;
  }

  :global(.toast--success) {
    border: 1px solid #67C23A;
    background-color: #67C23A;
  }
</style>
