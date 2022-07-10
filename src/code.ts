import { on, emit } from "./common/events";
import { hexToJsDesignRGB } from "./common/convertColor";
import {
    SelectionChangedHandler,
    ChangeGuiSizeHandler,
    ClearLineHandler,
    AddLineHandler,
    ApplyLineHandler,
    DeleteLineHandler,
    SaveCard,
    GuideLine,
    clearActiveHandler,
    SupportsGuideLineNode,
    colorChangeHandler,
    PreviewLineHandler,
    HidePreviewLineHandler,
    SaveGuidelineHandler,
    GetStorageHandler,
    StoragesHandler,
    MultiFrameUnApplyGroup
} from "./common/types";

// 支持的节点
const supportNodes = ['FRAME'];
const typeToName: { [key: string]: string } = {
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
const dash = [2, 2]
// 画板分割线集合名称格式
const guideLinesGroupName = (name: string): string => `${name}--分割线`;
// 分割线名称格式
const guideLineGroupName = (name: string): string => `${name}--分割线`;
const storageKey: string = 'guideline-save-cards';
let basedColor: string = "CCCCCC";
// 记录未应用分割线[分割线ID:分组ID]
let multiFrameUnApplyGroup: MultiFrameUnApplyGroup | {} = {};

// 隐藏/显示当前画板中所有分割线
function hideFrameGuideLine(node: SupportsGuideLineNode, isHide: boolean) {
    node.children && node.children.forEach(child_node => {
        if (child_node.name.endsWith('--分割线')) {
            child_node.visible = !isHide;
        }
        if (child_node.type === 'FRAME') {
            hideFrameGuideLine(child_node, !isHide);
        }
    })
}


// 清除所有未应用的分割线
function clearCurrentUnApplyGroup(): void {
    Object.keys(multiFrameUnApplyGroup).forEach(key => {
        Object.keys(multiFrameUnApplyGroup[key]).forEach(child_key => {
            const node = multiFrameUnApplyGroup[key][child_key];
            node?.remove();
        });
    })
    multiFrameUnApplyGroup = {};
}

// 画分割线[注意：需要解决画板旋转角度问题]
function drawLine(node: SupportsGuideLineNode, distance: number, isRow: boolean): LineNode {
    const { width, height, rotation } = node;
    const x = node.absoluteTransform[0][2];
    const y = node.absoluteTransform[1][2];
    const lineNode = jsDesign.createLine();
    const rgbColor = hexToJsDesignRGB(basedColor);
    lineNode.x = isRow ? x : x + distance;
    lineNode.y = isRow ? y + distance : y;
    lineNode.resize(isRow ? width : height, 0);
    lineNode.rotation = isRow ? 0 : -90;
    lineNode.dashPattern = dash;
    lineNode.strokes = [{ type: 'SOLID', color: rgbColor }]
    lineNode.constraints = {
        horizontal: "SCALE",
        vertical: "SCALE"
    };
    lineNode.strokeWeight = 1;
    return lineNode;
}

// 处理分割线
function createLine(node: SupportsGuideLineNode, guideline: GuideLine): LineNode[] {
    let { width, height } = node;
    let rows = guideline.row.scales;
    let columns = guideline.column.scales;
    let rowsLen = rows.length;
    let columnsLen = columns.length;
    // 前缀和
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
    const selections = jsDesign.currentPage.selection;
    // if (selections.length > 1) { jsDesign.notify('只能选择一个画板'); return; }
    selections.forEach(node => {
        // 判断类型是否支持
        if (supportNodes.indexOf(node.type) !== -1) {
            const nodes = createLine((node as SupportsGuideLineNode), saveCard.guideline);
            if (nodes.length === 0) {
                jsDesign.notify('无效辅助线');
                return;
            }
            let group = jsDesign.group(nodes, <SupportsGuideLineNode>node);
            group.name = guideLineGroupName(saveCard.name);
            group.locked = true;

            const children = (node as SupportsGuideLineNode).children;
            let lineGroup = children.find(_node => _node.type === 'GROUP' && _node.name === guideLinesGroupName(node.name));
            // 首次创建分割线时候，创建一个大集合
            if (!lineGroup) {
                lineGroup = jsDesign.group([group], <SupportsGuideLineNode>node);
                lineGroup.name = guideLinesGroupName(node.name);
                lineGroup.locked = true;
            } else {
                (lineGroup as GroupNode).appendChild(group);
            }

            multiFrameUnApplyGroup[node.id][saveCard?.id] = group;
            // 添加未引用组件
            jsDesign.notify(`创建${saveCard.name}分割线成功`);
        }
        else {
            // 问题：平台不支持同时提示两个notify
            jsDesign.notify(`${typeToName[node.type]}节点 ${node.name} 暂时支持`);
        }
    })
}

// 生成辅助线
function createGuideline(saveCard: SaveCard): void {
    if (Object.keys(multiFrameUnApplyGroup).length === 0) {  // 初始化multiFrameUnApplyGroup
        const selections = jsDesign.currentPage.selection;
        multiFrameUnApplyGroup = (() => {
            let _multi = {};
            selections.forEach(node => {
                _multi[node.id] = {};
            })
            return _multi;
        })();
    }
    Object.keys(multiFrameUnApplyGroup).forEach(key => {
        if (multiFrameUnApplyGroup[key].hasOwnProperty(saveCard.id)) {
            jsDesign.notify("请勿重复添加分割线");
        } else {
            // 生成
            multiFrameUnApplyGroup[key][saveCard.id] = <GroupNode>{ remove: () => { console.log('删除成功'); } };
            createGuidelineHandler(saveCard);
        }
    })
}

// 删除辅助线 
function deleteGuideline(saveCard: SaveCard): void {
    const id = saveCard.id;
    Object.keys(multiFrameUnApplyGroup).forEach(key => {
        if (!multiFrameUnApplyGroup[key].hasOwnProperty(id)) {
            jsDesign.notify("分割线不存在");
        } else {
            // 删除
            const node = multiFrameUnApplyGroup[key][id];
            node?.remove();
            delete multiFrameUnApplyGroup[key][id];
            jsDesign.notify(`取消${saveCard.name}分割线成功`);
        }
    })
}

jsDesign.showUI(__html__, { width: 260, height: 440, themeColors: true });

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
    multiFrameUnApplyGroup = {};
    emit<clearActiveHandler>('clear-active')
    jsDesign.notify("成功应用")
})

// 监听颜色变化
on<colorChangeHandler>('update-color', (color: string) => {
    basedColor = color;
})

// 监听预览
on<PreviewLineHandler>('preview-line', (guideline: GuideLine) => {
    let saveCard: SaveCard = {
        id: new Date().getTime().toString(),
        name: '临时',
        icon: '',
        guideline
    }
    createGuideline(saveCard);
})

// 监听取消预览
on<HidePreviewLineHandler>('hide-preview-line', () => {
    clearCurrentUnApplyGroup();
})

// 监听保存分割线
on<SaveGuidelineHandler>('save-guideline', async (saveCard: SaveCard) => {
    let saveCards: SaveCard[] | undefined = await jsDesign.clientStorage.getAsync(storageKey);
    if (saveCards === undefined) {
        saveCards = [];
    }
    clearCurrentUnApplyGroup();
    jsDesign.clientStorage.setAsync(storageKey, [...saveCards, saveCard])
        .then(() => {
            jsDesign.notify('保存成功');
        }).catch(err => {
            jsDesign.notify('保存失败');
            console.error(err);
        });
})

// 监听获取本地数据
on<GetStorageHandler>('get-storage', () => {
    jsDesign.clientStorage.getAsync(storageKey).then((data) => {
        emit<StoragesHandler>('STORAGE', data === undefined ? [] : data)
    })
})