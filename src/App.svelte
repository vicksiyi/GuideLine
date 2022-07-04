<script>
    import Tags from "./components/Tags.svelte";
    import Card from "./components/Card.svelte";
    import {tags,guiSizeEmpty,guiSize,guidelines,saveCardList} from "./common/variables";
    import Button from "./components/Button.svelte";
    import Empty from "./components/Empty.svelte";
    import {on,emit} from "./common/events";
    import {updateGuiSize} from "./common/global";
    import SaveCard from "./components/SaveCard.svelte";
    
    let active = 0;
    let lineSelected = [];
    let hasSelected = false;
    
    // 重置选择
    function resetSelection() {
      lineSelected = [];  
      emit('clear-line');
    }
    
    // 导航栏选择
    function handleActiveChange(event) {
        active = event.detail.active;
        resetSelection();
        updateGuiSize(guiSize);
	  }
    // 分割线选择【渲染生成分割线】
    function lineActiveChange(event){
      const index = event.detail.index;
      const lineIndex = lineSelected.indexOf(index);
      // 判断是否已经预览
      if(lineIndex === -1) { 
        emit('add-line', saveCardList[index]);
        lineSelected = [...lineSelected, index];
      }else{ 
        emit('delete-line', saveCardList[index]);
        lineSelected.splice(lineIndex,1);
        lineSelected = lineSelected;
      }
      console.log(lineSelected);
    }

    // 重置
    function resetHandler(event){
      resetSelection();
    }
    // 取消选择
    function clearHandler(event){
        
    }
    // 监听图层选择情况
    on("SELECTION_CHANGED",(hasSelection)=>{
      hasSelected = hasSelection;
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
    <!-- 正文 -->
    <div class="content">
      {#if active === 2}
        <!-- 辅助线 -->
        <div class="guide-lines">
          <Card {guidelines} />
        </div>
      {:else}
        <!-- 已保存 -->
        <SaveCard
          {saveCardList}
          on:activeChange={lineActiveChange}
          bind:selected={lineSelected}
        />
      {/if}
    </div>
    <footer>
      <div class="manage-btn">
        <div class="clear-btn">
          <Button
            disabled={lineSelected.length === 0}
            on:click={active === 0 ? resetHandler : clearHandler}
            text={active === 0 ? "重置" : "取消"}
          />
        </div>
        <div class="show-btn">
          <Button
            disabled={lineSelected.length === 0}
            class="show-btn"
            text={active === 2 ? "预览" : active === 1 ? "保存" : "应用"}
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
