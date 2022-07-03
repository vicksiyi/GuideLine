import { EventHandler } from './events';

export type GuiSize = {
    width: number,
    height: number
}

export type SelectionSize = GuiSize;

export interface SelectionChangedHandler extends EventHandler {
    name: 'SELECTION_CHANGED'
    handler: (hasSelection: string[]) => void
}

export interface ChangeGuiSizeHandler extends EventHandler {
    name: 'CHANGE_GUI_SIZE'
    handler: (guiSize: GuiSize) => void
}