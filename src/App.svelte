<script>
    import Tags from "./components/Tags.svelte";
    import Card from "./components/Card.svelte";
    import {tags,guiSizeEmpty,guiSize,guidelines} from "./common/variables";
    import Button from "./components/Button.svelte";
    import Empty from "./components/Empty.svelte";
    import {on,emit} from "./common/events";
    import {updateGuiSize} from "./common/global";
    
    let active = 0;
    let hasSelected = false;
    let selectedLayers = []; // 记录已经选择的图层ID

    function handleActiveChange(event) {
        active = event.detail.active;
        updateGuiSize(guiSize);
	  }
    
    // 监听图层选择情况
    on("SELECTION_CHANGED",(layers)=>{
      hasSelected = layers.length > 0;
      selectedLayers = layers;
      if(!hasSelected) {
        emit('CHANGE_GUI_SIZE', guiSizeEmpty)
      }else {
        updateGuiSize(guiSize);
      }
    })
</script>

{#if hasSelected}
  <main id="main">
    <!-- 头部选择栏 -->
    <header>
      <Tags on:activeChange={handleActiveChange} {tags} {active} />
    </header>
    <div class="content">
      {#if active !== 2}
        <!-- 辅助线 -->
        <div class="guide-lines">
          <Card {guidelines} />
        </div>
      {:else}
        <!-- 已保存 -->
        <div class="save-lines">已经保存</div>
      {/if}
    </div>
    <footer>
      <div class="manage-btn">
        <div class="clear-btn">
          <Button text={active === 0 ? "重置" : "取消"} />
        </div>
        <div class="show-btn">
          <Button
            class="show-btn"
            text={active === 0 ? "预览" : active === 1 ? "保存" : "编辑"}
            hasMasters
          />
        </div>
      </div>
    </footer>
  </main>
{:else}
  <!-- 没有选择任何组件时 -->
  <main id="main">
    <Empty text="请先选择一个图层" />
  </main>
{/if}

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
    border: 1px solid #e6a23c;
    background-color: #e6a23c;
  }
  :global(.toast--success) {
    border: 1px solid #67c23a;
    background-color: #67c23a;
  }
  footer {
    width: 100%;
    height: 64px;
    margin-top: 16px;
    background-color: rgba(0, 0, 0, 0.03);
  }
  .manage-btn {
    display: flex;
    justify-content: space-between;
    padding: 16px;
  }
  .manage-btn :global(.clear-btn) {
    width: 58px;
    height: 32px;
  }
  .manage-btn :global(.show-btn) {
    flex: 1;
    margin-left: 12px;
  }
</style>
