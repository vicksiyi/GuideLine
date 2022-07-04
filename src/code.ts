import { on, emit } from "./common/events";
import {
    SelectionChangedHandler,
    ChangeGuiSizeHandler,
    ClearLineHandler,
    AddLineHandler,
    ApplyLineHandler
} from "./common/types";

// 记录未应用分割线[记录ID]
let unApplyGroups = [];

// 清除所有未应用的分割线
function clearCurrentUnApplyGroup() {
    unApplyGroups.forEach(node => {
        node.remove();
    });
    unApplyGroups = [];
}

jsDesign.showUI(__html__, { width: 260, height: 440 });

// GUI 界面发送消息【已选择图层，启动的时候发一次】
emit<SelectionChangedHandler>(
    'SELECTION_CHANGED',
    jsDesign.currentPage.selection.length > 0
)

// 监听图层选择事件
jsDesign.on('selectionchange', function () {
    // 向GUI 界面发送消息【已选择图层】
    emit<SelectionChangedHandler>(
        'SELECTION_CHANGED',
        jsDesign.currentPage.selection.length > 0
    )
})

// 监听GUI发送过来的消息【改变窗口】
on<ChangeGuiSizeHandler>("CHANGE_GUI_SIZE", (guiSize) => {
    jsDesign.ui.resize(guiSize?.width, guiSize?.height);
})

// 监听清空分割线消息【清空未应用】
on<ClearLineHandler>('clear-line', () => {
    clearCurrentUnApplyGroup();
})

// 添加未应用分割线
on<AddLineHandler>('add-line', (saveCard) => {
    console.log(saveCard);
})

// 应用已经添加的分割线
on<ApplyLineHandler>('apply-line', () => {
    
})