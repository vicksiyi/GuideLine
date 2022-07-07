<script>
  import { createEventDispatcher } from "svelte";
  import { onMount } from "svelte";
  const dispatch = createEventDispatcher();
  export let basedColor = "CCCCCC";
  export let width = 16;
  export let height = 16;

  // 显示颜色选择器
  function showColorPalate() {
    let selectColorInput = document.getElementById("select-color-input");
    selectColorInput && selectColorInput.click();
    selectColorInput &&
      selectColorInput.addEventListener("input", (event) => {
        basedColor = event.target.value.replace("#", "");
        dispatch("colorChange", { basedColor });
      });
  }

  onMount(() => {
    // 监听点击事件
    let selectNode = document.getElementById("colors");
    selectNode && selectNode.addEventListener("click", showColorPalate);
  });
</script>

<div class="color-select">
  <label for="color-input"> 颜色 </label>
  <div class="panel">
    <div class="color">
      <div
        id="colors"
        class="based-color"
        style="background-color: #{basedColor};width: {width}px;height: {height}px"
      />
      <input
        type="color"
        id="select-color-input"
        style="visibility: hidden;width:0;height:0;"
      />
    </div>
    <span>#</span>
    <input
      name="color-input"
      class="color-input"
      id="color-input"
      type="text"
      disabled
      bind:value={basedColor}
    />
  </div>
</div>

<style>
  .color-select {
    display: flex;
    width: 131px;
    height: 28px;
    font-size: 12px;
    color: rgba(32, 32, 32, 0.6);
  }
  .color-select label {
    padding: 4px 0;
    line-height: 20px;
  }
  .color-select .panel {
    display: flex;
    background-color: rgba(0, 0, 0, 0.03);
    margin-left: 8px;
    width: 99px;
    align-items: center;
    border-radius: 4px;
  }
  .color-select .panel .color {
    padding: 6px 4px;
    width: 16px;
    height: 16px;
  }
  .color-select .panel .panel .based-color {
    border-radius: 2px;
  }
  .panel span {
    color: rgba(32, 32, 32, 1);
    font-size: 12px;
  }
  .panel .color-input {
    flex: 1;
    background-color: transparent;
    border: transparent;
    width: 43px;
    height: 20px;
    padding-right: 4px;
    margin: 0 4px;
    font-size: 12px;
    line-height: 28px;
  }
  .panel .color-input:focus,
  .panel .color-input:active {
    border: none !important;
  }
</style>
