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

// 支持的节点
let supportNodes = ['FRAME'];
let typeToName: { [key: string]: string } = {
    'FRAME': "画板",
    'GROUP': "分组",
    'RECTANGLE': "矩形",
    'ELLIPSE': "椭圆",
    'LINE': "线段",
    'POLYGON': "多边形",
    'STAR': "星形",
    'TEXT': "文本",
    'SLICE': "切片",
    'VECTOR': "矢量",
    'BOOLEAN_OPERATION': "布尔运算",
    'COMPONENT': "引用",
    'INSTANCE': "实例组件",
    'COMPONENT_SET': "变体"
}
let dash = [2, 2]

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

// 画分割线[注意：需要解决画板旋转角度问题]
function drawLine(node: SupportsGuideLineNode, distance: number, isRow: boolean): LineNode {
    const { width, height, rotation, x, y } = node;
    const lineNode = figma.createLine();
    lineNode.x = isRow ? x : y + distance;
    lineNode.y = isRow ? y + distance : x;
    lineNode.resize(isRow ? width : height, 0);
    lineNode.rotation = isRow ? 0 : 90;
    lineNode.dashPattern = dash;
    return lineNode;
}

// 处理分割线
function createLine(node: SupportsGuideLineNode, guideline: GuideLine): LineNode[] {
    let { width, height } = node;
    let rows = guideline.row.scales;
    let columns = guideline.column.scales;
    let rowsLen = rows.length;
    let columnsLen = columns.length;
    let rowsPreSum: number[] = (() => {
        let total = 0;
        let sum = rows.map((row) => {
            total += row;
            return total;
        })
        return sum;
    })();
    let columnsPreSum: number[] = (() => {
        let total = 0;
        let sum = columns.map((column) => {
            total += column;
            return total;
        })
        return sum;
    })();
    let nodes = [];
    // 生成行分割线
    rows.length > 1 && rows.forEach((_, index) => {
        if (index === rows.length - 1) { return; }
        let lineNode = drawLine(node, height * rowsPreSum[index] / rowsPreSum[rowsLen - 1], true);
        nodes.push(lineNode);
    });

    // 生成列分割线
    columns.length > 1 && columns.forEach((_, index) => {
        if (index === columns.length - 1) { return; }
        let lineNode = drawLine(node, width * columnsPreSum[index] / columnsPreSum[columnsLen - 1], false);
        nodes.push(lineNode);
    });

    return nodes;
}

// 处理节点
function createGuidelineHandler(saveCard: SaveCard): void {
    // 已经选择的组件
    const selections = figma.currentPage.selection;
    selections.forEach(node => {
        // 判断类型是否支持
        if (supportNodes.indexOf(node.type) !== -1) {
            const nodes = createLine((node as SupportsGuideLineNode), saveCard.guideline);
            let group = figma.group(nodes, <SupportsGuideLineNode>node);
            group.name = saveCard.name;
            group.locked = true;

            const children = (node as SupportsGuideLineNode).children;
            let lineGroup = children.find(node => node.name === '分割线集合');
            if (!lineGroup) {
                lineGroup = figma.group([group], <SupportsGuideLineNode>node);
                lineGroup.name = '分割线集合';
                lineGroup.x = node.x;
                lineGroup.y = node.y;
                lineGroup.resize(node.width, node.height);
            } else {
                (lineGroup as GroupNode).appendChild(group);
            }


            unApplyGroup[saveCard?.id] = group;
            // 添加未引用组件
            figma.notify(`创建${saveCard.name}分割线成功`);
        }
        else {
            // 问题：平台不支持同时提示两个notify
            figma.notify(`${typeToName[node.type]}节点 ${node.name} 暂时支持`);
        }
    })
}

// 生成辅助线
function createGuideline(saveCard: SaveCard): void {
    if (unApplyGroup.hasOwnProperty(saveCard.id)) {
        figma.notify("请勿重复添加分割线");
    } else {
        // 生成
        unApplyGroup[saveCard.id] = <GroupNode>{ remove: () => { console.log('删除成功'); } };
        createGuidelineHandler(saveCard);
    }
}

// 删除辅助线 
function deleteGuideline(saveCard: SaveCard): void {
    const id = saveCard.id;
    if (!unApplyGroup.hasOwnProperty(id)) {
        figma.notify("分割线不存在");
    } else {
        // 删除
        const node = unApplyGroup[id];
        node?.remove();
        delete unApplyGroup[id];
        figma.notify(`取消${saveCard.name}分割线成功`);
    }
}

figma.showUI(__html__, { width: 260, height: 440 });

// GUI 界面发送消息【已选择图层，启动的时候发一次】
emit<SelectionChangedHandler>(
    'SELECTION_CHANGED',
    figma.currentPage.selection.length > 0
)

// 监听图层选择事件
figma.on('selectionchange', function () {
    // 向GUI 界面发送消息【已选择图层】
    emit<SelectionChangedHandler>(
        'SELECTION_CHANGED',
        figma.currentPage.selection.length > 0
    );


    // 重新选择会将未引用的分割线取消掉
    emit<clearActiveHandler>('clear-active')
})

// 监听GUI发送过来的消息【改变窗口】
on<ChangeGuiSizeHandler>("CHANGE_GUI_SIZE", (guiSize) => {
    figma.ui.resize(guiSize?.width, guiSize?.height);
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