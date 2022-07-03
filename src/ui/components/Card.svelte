<script>
    import NumberField from "./NumberField.svelte";
    import {determineSize, toast} from "../common/global";
    import {MIN_VALUE, MAX_VALUE, guidelines} from "../common/variables";

    // 判断数量是否超过或者小于最大值
    const inputChange = (event,handler)=> {
        let {value} = event.detail;
        let deter = determineSize(value, MIN_VALUE, MAX_VALUE);
        if(deter === -1) {
            toast(`值不能小于${MIN_VALUE}`,'warning');
            handler(MIN_VALUE);
        }else if(deter === 1) {
            toast(`值不能大于${MAX_VALUE}`,'warning');
            handler(MAX_VALUE);
        }else{
            handler(value);
        }
    }
</script>

<div class="card">
  <div class="card-row">
    <h1 class="header-text">行</h1>
    <NumberField
      bind:value={guidelines.row.count}
      min={MIN_VALUE}
      max={MAX_VALUE}
      on:inputChange={(event) => {
        inputChange(event, (value) => {
          guidelines.row.count = value;
        });
      }}
    >
      <span class="label" slot="textfield-label"
        >数量(<span class="measure">N</span>)</span
      >
      <span slot="unit-measure">个</span>
    </NumberField>
    <NumberField value={guidelines.row.height} disabled>
      <span class="label" slot="textfield-label"
        >宽度(<span class="measure">H</span>)</span
      >
      <span slot="unit-measure">像素</span>
    </NumberField>
  </div>
  <div class="card-column">
    <h1 class="header-text">列</h1>
    <NumberField
      min={MIN_VALUE}
      max={MAX_VALUE}
      bind:value={guidelines.column.count}
      on:inputChange={(event) => {
        inputChange(event, (value) => {
          guidelines.column.count = value;
        });
      }}
    >
      <span class="label" slot="textfield-label"
        >数量(<span class="measure">N</span>)</span
      >
      <span slot="unit-measure">个</span>
    </NumberField>
    <NumberField value={guidelines.column.height} disabled>
      <span class="label" slot="textfield-label"
        >高度(<span class="measure">H</span>)</span
      >
      <span slot="unit-measure">像素</span>
    </NumberField>
  </div>
</div>

<style>
  .card > [class^="card"] {
    border: 1px solid rgba(32, 32, 32, 0.2);
    border-radius: 8px;
    min-height: 100px;
    margin: 0 12px;
    position: relative;
    padding: 16px;
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
  .card-column {
    top: 20px;
  }
  span > .measure {
    text-decoration: underline rgba(32, 32, 32, 0.8);
  }
</style>
