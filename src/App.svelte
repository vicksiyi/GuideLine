<script>
  import  { nanoid } from "nanoid";
  import Color from "./components/Color.svelte";
  import Tags from "./components/Tags.svelte";
  import Card from "./components/Card.svelte";
  import CheckBox from "./components/CheckBox.svelte";
  import Input from "./components/Input.svelte";
  import {
    tags,
    guiSizeEmpty,
    guiSize,
    guideline,
    saveCardList,
  } from "./common/variables";
  import Button from "./components/Button.svelte";
  import Empty from "./components/Empty.svelte";
  import { on, emit } from "./common/events";
  import { updateGuiSize,toast } from "./common/global";
  import SaveCard from "./components/SaveCard.svelte";

  let active = 0;
  let lineSelected = [];
  let hasSelected = false;
  let basedColor = "CCCCCC";
  let _guideline = JSON.parse(JSON.stringify(guideline));
  let _saveCardList = JSON.parse(JSON.stringify(saveCardList));
  let isPreview = false;
  let _guidelineName = "";
  let storageActive = 1;
  let defaultActive = 0;

  // 重置选择
  function resetSelection() {
    lineSelected = [];
    emit("clear-line");
  }
  // 导航栏选择
  function handleActiveChange(event) {
    active = event.detail.active;
    isPreview = false;
    _guideline = JSON.parse(JSON.stringify(guideline));
    if(active === storageActive) {
      emit("get-storage");
    }else if(active === defaultActive ){
      _saveCardList =  JSON.parse(JSON.stringify(saveCardList));
    }
    resetSelection();
    updateGuiSize(guiSize);
  }
  // 分割线选择【渲染生成分割线】
  function lineActiveChange(event) {
    const index = event.detail.index;
    const lineIndex = lineSelected.indexOf(index);
    // 判断是否已经预览
    if (lineIndex === -1) {
      emit("add-line", _saveCardList[index]);
      lineSelected = [...lineSelected, index];
    } else {
      emit("delete-line", _saveCardList[index]);
      lineSelected.splice(lineIndex, 1);
      lineSelected = lineSelected;
    }
  }
  // 预览更新
  function previewChangeHandler(event) {
    if(isPreview) {
      emit('preview-line', _guideline)
    } else {
      emit('hide-preview-line')
    }
  }
  // 自定义比例输入更新
  function cardInputChangeHandler(event){
    isPreview = false;
    resetSelection();
  }
  // 颜色更新
  function colorChange() {
    emit("update-color", basedColor);
  }
  // 重置
  function resetHandler(event) {
    resetSelection();
  }
  // 取消选择
  function clearHandler(event) {}
  // 保存
  function saveHandler(event) {
    if(_guidelineName !== "") {
      emit("save-guideline", {
        id:nanoid(),
        name:_guidelineName,
        icon:"",
        guideline:_guideline
      });
      resetCustomCard();
      updateGuiSize(guiSize);
    }else {
      toast("分割线名称不能为空");
    }
  }
  // 重置自定义画板
  function resetCustomCard() {
    _guideline = JSON.parse(JSON.stringify(guideline));
    _guidelineName = "";
    isPreview = false;
  }
  // 应用
  function applyHandler(event) {
    emit("apply-line");
  }
  // 监听图层选择情况
  on("SELECTION_CHANGED", (hasSelection) => {
    hasSelected = hasSelection;
    if (!hasSelected) {
      emit("CHANGE_GUI_SIZE", guiSizeEmpty);
    } else {
      updateGuiSize(guiSize);
    }
  });
  // 清空所有选择
  on("clear-active", () => {
    resetSelection();
  });
  on("STORAGE", (saveCards)=>{
    if(active === storageActive) {
      _saveCardList = saveCards
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
        <div class="guide-lines">
          <Card
            bind:guideline={_guideline}
            on:inputChange={cardInputChangeHandler}
          />
        </div>
        <div class="preview-container">
          <div class="preview">
            <CheckBox
              on:checkboxChange={previewChangeHandler}
              label={"预览"}
              bind:guideline={_guideline}
              bind:checked={isPreview}
            />
          </div>
        </div>
        <!-- 输入保存名称 -->
        <div class="save-name-container">
          <div class="save-name">
            <Input label={"分割线名称"} bind:value={_guidelineName} />
          </div>
        </div>
      {:else if _saveCardList.length}
        <SaveCard
          bind:saveCardList={_saveCardList}
          on:activeChange={lineActiveChange}
          bind:selected={lineSelected}
        />
        <!-- 颜色选择器 -->
        <div class="color-select-container">
          <div class="color-select">
            <Color on:colorChange={colorChange} bind:basedColor />
          </div>
        </div>
      {:else}
        <Empty text={`${active === 1 ? "自定义" : "默认"}数据为空`} />
      {/if}
    </div>
    <footer>
      <div class="manage-btn">
        <div class="clear-btn">
          {#if active === 0 || active === 1}
            <Button
              disabled={lineSelected.length === 0}
              on:click={resetHandler}
              text={"重置"}
            />
          {:else}
            <Button
              disabled={lineSelected.length === 0}
              on:click={clearHandler}
              text={"取消"}
            />
          {/if}
        </div>
        <div class="show-btn">
          {#if active === 0 || active === 1}
            <Button
              disabled={lineSelected.length === 0}
              class="show-btn"
              on:click={applyHandler}
              text={"应用"}
              hasMasters
            />
          {:else}
            <Button
              disabled={!(
                (_guideline.row.scales.length > 1 &&
                  _guideline.column.scales.length > 0 &&
                  _guidelineName !== "") ||
                (_guideline.column.scales.length > 1 &&
                  _guideline.row.scales.length > 0 &&
                  _guidelineName !== "")
              )}
              class="show-btn"
              on:click={saveHandler}
              text={`保存`}
              hasMasters
            />
          {/if}
        </div>
      </div>
    </footer>
  </main>
{:else}
  <!-- 没有选择任何组件时 -->
  <main id="main">
    <Empty text="请先选择一个画板" />
  </main>
{/if}

<style>
  .save-name-container {
    justify-content: start !important;
  }
  .color-select {
    width: 131px;
  }
  .save-name-container,
  .color-select-container,
  .preview-container {
    display: flex;
    justify-content: right;
    padding: 0 12px;
    margin-top: 12px;
  }
  .preview {
    width: 48px;
  }
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
