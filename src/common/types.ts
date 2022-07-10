import { EventHandler } from './events';

export type GuiSize = {
    width: number,
    height: number
}

export type SelectionSize = GuiSize;

export type Line = {
    count: number,
    scales: number[]
}

export type GuideLine = {
    row: Line,
    column: Line
}

export type SaveCard = {
    id: string,
    name: string,
    icon: string,
    guideline: GuideLine
}

export type UnApplyGroup = {
    [id: string]: GroupNode
}

// 只支持画板节点和矩形节点
export type SupportsGuideLineNode =
    | FrameNode

export interface SelectionChangedHandler extends EventHandler {
    name: 'SELECTION_CHANGED'
    handler: (hasSelection: boolean) => void
}

export interface ChangeGuiSizeHandler extends EventHandler {
    name: 'CHANGE_GUI_SIZE'
    handler: (guiSize: GuiSize) => void
}

export interface ClearLineHandler extends EventHandler {
    name: 'clear-line',
    handler: () => void
}

export interface AddLineHandler extends EventHandler {
    name: 'add-line',
    handler: (saveCard: SaveCard) => void
}

export interface ApplyLineHandler extends EventHandler {
    name: 'apply-line',
    handler: () => void
}

export interface DeleteLineHandler extends EventHandler {
    name: 'delete-line',
    handler: (saveCard: SaveCard) => void
}

export interface clearActiveHandler extends EventHandler {
    name: 'clear-active',
    handler: () => void
}

export interface colorChangeHandler extends EventHandler {
    name: 'update-color',
    handler: (color: string) => void
}

export interface PreviewLineHandler extends EventHandler {
    name: 'preview-line',
    handler: (guideline: GuideLine) => void
}

export interface HidePreviewLineHandler extends EventHandler {
    name: 'hide-preview-line',
    handler: () => void
}

export interface SaveGuidelineHandler extends EventHandler {
    name: 'save-guideline',
    handler: (saveCard: SaveCard) => void
}

export interface GetStorageHandler extends EventHandler {
    name: 'get-storage',
    handler: (saveCard: SaveCard) => void
}

export interface StoragesHandler extends EventHandler {
    name: 'STORAGE',
    handler: (saveCards: SaveCard[]) => void
}