<script>
    import NumberField from "./NumberField.svelte";
</script>

<div class="card">
  <div class="card-row">
    <h1 class="header-text">行</h1>
    <NumberField>
      <span class="label" slot="textfield-label"
        >数量(<span class="measure">N</span>)</span
      >
      <span slot="unit-measure">个</span>
    </NumberField>
    <NumberField disabled>
      <span class="label" slot="textfield-label"
        >宽度(<span class="measure">H</span>)</span
      >
      <span slot="unit-measure">像素</span>
    </NumberField>
  </div>
  <div class="card-column">
    <h1 class="header-text">列</h1>
    <NumberField>
      <span class="label" slot="textfield-label"
        >数量(<span class="measure">N</span>)</span
      >
      <span slot="unit-measure">个</span>
    </NumberField>
    <NumberField disabled>
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
