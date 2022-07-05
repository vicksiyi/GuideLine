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