<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import NumberField from "./NumberField.svelte";
    import {determineSize, toast} from "../common/global";
    import {MIN_VALUE, MAX_VALUE,guiSize} from "../common/variables";
    import {updateGuiSize} from "../common/global";

    export let guideline = {};

    // 判断数量是否超过或者小于最大值
    const inputChange = (event,handler,isUpdate=true)=> {
        dispatch('inputChange');  // 卡片里面任何一个input输入都会触发[目的：每次更新都取消预览]
        if(!isUpdate) return;
        let {value} = event.detail;
        let deter = determineSize(value, MIN_VALUE, MAX_VALUE);
        if(deter === -1) {
            toast(`数量不能小于${MIN_VALUE}`,'warning');
            handler(MIN_VALUE);
        }else if(deter === 1) {
            toast(`数量不能大于${MAX_VALUE}`,'warning');
            handler(MAX_VALUE);
        }else{
            handler(value);
        }
        updateGuiSize(guiSize);

    }
    // 处理行输入
    const rowHandler = (value)=>{
      guideline.row.count = value;
      let _scales = guideline.row.scales;
      const len = _scales.length;
      if(len > value) {
        guideline.row.scales = _scales.splice(0, value);
      }else if(len < value) {
        guideline.row.scales = _scales.concat(Array(value - len).fill(1));
      }
    }

    // 处理列输入
    const columnHandler = (value)=>{
      guideline.column.count = value;
      let _scales = guideline.column.scales;
      const len = _scales.length;
      if(len > value) {
        guideline.column.scales = _scales.splice(0, value);
      }else if(len < value) {
        guideline.column.scales = _scales.concat(Array(value - len).fill(1));
      }
    }
</script>

<div class="card">
  <div class="card-row">
    <h1 class="header-text">行</h1>
    <!-- 数量 -->
    <NumberField
      bind:value={guideline.row.count}
      min={MIN_VALUE}
      max={MAX_VALUE}
      on:inputChange={(event) => inputChange(event, rowHandler)}
    >
      <span class="label" slot="textfield-label"
        >数量(<span class="measure">N</span>)</span
      >
      <span slot="unit-measure">份</span>
    </NumberField>
    <!-- 比例 -->
    <NumberField
      base={false}
      bind:value={guideline.row.scales}
      on:inputChange={(event) => inputChange(event, {}, false)}
    >
      <span class="label" slot="textfield-label"
        >比例(<span class="measure">G</span>)</span
      >
    </NumberField>
  </div>
  <div class="card-column">
    <h1 class="header-text">列</h1>
    <NumberField
      min={MIN_VALUE}
      max={MAX_VALUE}
      bind:value={guideline.column.count}
      on:inputChange={(event) => inputChange(event, columnHandler)}
    >
      <span class="label" slot="textfield-label"
        >数量(<span class="measure">N</span>)</span
      >
      <span slot="unit-measure">份</span>
    </NumberField>
    <!-- 比例 -->
    <NumberField
      base={false}
      bind:value={guideline.column.scales}
      on:inputChange={(event) => inputChange(event, {}, false)}
    >
      <span class="label" slot="textfield-label"
        >比例(<span class="measure">G</span>)</span
      >
    </NumberField>
  </div>
</div>

<style>
  .card > [class^="card"] {
    border: 1px solid rgba(32, 32, 32, 0.2);
    border-radius: 8px;
    margin: 0 12px;
    position: relative;
    padding: 16px;
  }
  :global(.jsdesign-dark) .card > [class^="card"] {
    border: 1px solid rgba(255, 255, 255, 0.8);
  }
  .card > [class^="card"] > .header-text {
    position: absolute;
    top: -20px;
    left: 16px;
    font-weight: 400;
    color: rgba(32, 32, 32, 1);
    font-size: 12px;
    display: block;
    background-color: rgba(255, 255, 255, 1);
    padding: 4px;
  }
  :global(.jsdesign-dark) .card > [class^="card"] > .header-text{
    border-radius: 4px;
  }
  .card-column {
    margin-top: 20px !important;
  }
  span > .measure {
    text-decoration: underline rgba(32, 32, 32, 0.8);
  }
</style>
