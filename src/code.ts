import { on, emit } from "./common/events";
import {
    SelectionChangedHandler,
    ChangeGuiSizeHandler
} from "./common/types";
jsDesign.showUI(__html__, { width: 260, height: 440 });

const selections = jsDesign.currentPage.selection;
const selectionIds = selections.map(item => {
    return item.id;
})

// GUI 界面发送消息【已选择图层，启动的时候发一次】
emit<SelectionChangedHandler>(
    'SELECTION_CHANGED',
    selectionIds
)

// 监听图层选择事件
jsDesign.on('selectionchange', function () {
    const selections = jsDesign.currentPage.selection;
    const selectionIds = selections.map(item => {
        return item.id;
    })
    // 向GUI 界面发送消息【已选择图层】
    emit<SelectionChangedHandler>(
        'SELECTION_CHANGED',
        selectionIds
    )
})

// 监听GUI发送过来的消息【改变窗口】
on<ChangeGuiSizeHandler>("CHANGE_GUI_SIZE", (guiSize) => {
    jsDesign.ui.resize(guiSize?.width, guiSize?.height);
})