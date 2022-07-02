<script>
    import Tags from "./components/Tags.svelte";
    import Card from "./components/Card.svelte";

    let tags = ['辅助线','自定义','已保存'];
    let active = 0;

    function handleActiveChange(event) {
        active = event.detail.active;
	}
</script>

<main>
  <!-- 头部选择栏 -->
  <Tags on:activeChange={handleActiveChange} {tags} {active} />
  <!-- 正文 -->
  <div class="content">
    <!-- 辅助线 -->
    <div class="guide-line">
      <Card />
    </div>
    <!-- 自定义 -->
    <!-- 已保存 -->
  </div>
</main>
