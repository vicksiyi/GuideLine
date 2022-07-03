import { on, emit } from "./common/events";
import { SelectionChangedHandler, ChangeGuiSizeHandler } from "./common/types";
jsDesign.showUI(__html__, { width: 260, height: 440 });

// GUI 界面发送消息【已选择图层，启动的时候发一次】
emit<SelectionChangedHandler>(
    'SELECTION_CHANGED',
    jsDesign.currentPage.selection.length > 0
)

// 监听图层选择事件
jsDesign.on('selectionchange', function () {
    // GUI 界面发送消息【已选择图层】
    emit<SelectionChangedHandler>(
        'SELECTION_CHANGED',
        jsDesign.currentPage.selection.length > 0
    )
})

on<ChangeGuiSizeHandler>("CHANGE_GUI_SIZE", (guiSize) => {
    console.log(guiSize?.width, guiSize?.height);
    jsDesign.ui.resize(guiSize?.width, guiSize?.height);
})