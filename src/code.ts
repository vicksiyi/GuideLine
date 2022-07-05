import { on, emit } from "./common/events";
import {
    SelectionChangedHandler,
    ChangeGuiSizeHandler,
    ClearLineHandler,
    AddLineHandler,
    ApplyLineHandler,
    DeleteLineHandler,
    SaveCard,
    UnApplyGroup,
    GuideLine,
    clearActiveHandler,
    SupportsGuideLineNode
} from "./common/types";

// 记录未应用分割线[分割线ID:分组ID]
let unApplyGroup: UnApplyGroup | {} = {};

// 清除所有未应用的分割线
function clearCurrentUnApplyGroup(): void {
    Object.keys(unApplyGroup).forEach(key => {
        const node = unApplyGroup[key].node;
        node?.remove();
    });
    unApplyGroup = {};
}

// 画分割线
function drawGuideline(guideline: GuideLine): void {
    // 已经选择的组件
    const selections = jsDesign.currentPage.selection;
    let rows = guideline.row.scales;
    let columns = guideline.column.scales;

    selections.forEach(node => {
        console.log(node.type);
    })
}

// 生成辅助线
function createGuideline(saveCard: SaveCard): void {
    if (unApplyGroup.hasOwnProperty(saveCard.id)) {
        jsDesign.notify("请勿重复添加分割线");
    } else {
        // 生成
        unApplyGroup[saveCard.id] = <GroupNode>{ remove: () => { console.log('删除成功'); } };
        drawGuideline(saveCard.guideline);
        jsDesign.notify(`创建${saveCard.name}分割线成功`);
    }
}

// 删除辅助线 
function deleteGuideline(saveCard: SaveCard): void {
    const id = saveCard.id;
    if (!unApplyGroup.hasOwnProperty(id)) {
        jsDesign.notify("分割线不存在");
    } else {
        // 删除
        const node = unApplyGroup[id];
        node?.remove();
        delete unApplyGroup[id];
        jsDesign.notify(`取消${saveCard.name}分割线成功`);
    }
    console.log(unApplyGroup);
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
    );

    // 重新选择会将未引用的分割线取消掉
    emit<clearActiveHandler>('clear-active')
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
on<AddLineHandler>('add-line', (saveCard: SaveCard) => {
    createGuideline(saveCard);
})

// 删除未应用分割线
on<DeleteLineHandler>('delete-line', (saveCard: SaveCard) => {
    deleteGuideline(saveCard);
})

// 应用已经添加的分割线
on<ApplyLineHandler>('apply-line', () => {

})