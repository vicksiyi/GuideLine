<script>
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';
    const dispatch = createEventDispatcher();
    export let basedColor = '#CCCCCC';
    export let width = 16;
    export let height = 16;

    // 显示颜色选择器
    function showColorPalate(){
        let selectColorInput = document.getElementById("select-color-input");
        selectColorInput && selectColorInput.click();
        selectColorInput && selectColorInput.addEventListener("input", (event) => {
            basedColor = event.target.value;
            dispatch("colorChange", { basedColor });
        });
    }
    
    onMount(()=>{
        // 监听点击事件
        let selectNode = document.getElementById("colors");
        selectNode && selectNode.addEventListener('click', showColorPalate);
    })
</script>

<div class="color-select">
  <div
    id="colors"
    class="based-color"
    style="background-color: {basedColor};width: {width}px;height: {height}px"
  />
  <input type="color" id="select-color-input" style="visibility: hidden;" />
</div>

<style>
</style>
